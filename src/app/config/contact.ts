export async function sendContactForm(data: any) {
    console.log(JSON.stringify(data))
    await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    });
}