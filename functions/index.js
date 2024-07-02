const functions = require('firebase-functions');
const admin = require('firebase-admin');
const postmark = require('postmark');
const cors = require('cors')({ origin: true });

admin.initializeApp();

// Replace with your Postmark API key
const POSTMARK_API_KEY = 'eb2e845d-2771-43bc-925f-a4e1085d0afd';
const client = new postmark.ServerClient(POSTMARK_API_KEY);

exports.sendEmail = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        const { email, question } = req.body;

        const emailOptions = {
            "From": "raphael@raphskal.de", // Use your verified Postmark email
            "To": email,
            "Subject": "Danke für Ihre Anfrage.",
            "TextBody": `Wir haben folgende Anfrage von Ihnen erhalten:\n ${question}\n\n
            Wir werden uns zeitnah bei Ihnen melden.`,
        };

        try {
            await client.sendEmail(emailOptions);
            res.status(200).send({ success: true, message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Failed to send email', error });
        }
    });
});