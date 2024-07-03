const functions = require('firebase-functions');
const admin = require('firebase-admin');
const postmark = require('postmark');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const cors = require('cors')({ origin: true });

admin.initializeApp();

const client = new SecretManagerServiceClient();

async function getPostmarkApiKey() {
    const [version] = await client.accessSecretVersion({
        name: 'projects/1015569732566/secrets/POSTMARK_API_KEY/versions/latest',
    });

    const payload = version.payload.data.toString('utf8');
    console.log(`Secret data: ${payload}`)
    return payload;
}

exports.sendEmail = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        const { email, question } = req.body;

        try {
            const POSTMARK_API_KEY = await getPostmarkApiKey();
            const postmarkClient = new postmark.ServerClient(POSTMARK_API_KEY);

            const emailOptions = {
                "From": "raphael@raphskal.de", // Use your verified Postmark email
                "To": email,
                "Subject": "Danke für Ihre Anfrage.",
                "TextBody": `Wir haben folgenden Anfrage von Ihnen erhalten:\n ${question}\n\n
                Wir melden uns bei Ihnen zeitnah.`,
            };

            await postmarkClient.sendEmail(emailOptions);
            res.status(200).send({ success: true, message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Failed to send email', error });
        }
    });
});