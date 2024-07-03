document.getElementById('questionForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;

    const response = await fetch('https://us-central1-wetterau-digital.cloudfunctions.net/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, surname, telephone, email, question })
    });

    const result = await response.json();
    if (result.success) {
        alert('Ihre Anfrage wurde gesendet.');
    } else {
        alert('Es gab beim Senden Ihrer Anfrage ein Problem.');
    }
});