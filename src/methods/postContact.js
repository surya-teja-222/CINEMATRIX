export default async function postContact(email, message) {
    const date = new Date();
    const response = await fetch('https://api.ipify.org/?format=json');
    const ip = await response.json();
    fetch(process.env.REACT_APP_CONTACT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "Cinematrix-Contact Us",
            type: 1,
            channel_id: "941595518809833522",
            avatar: null,
            id: "941595720086077480",
            content: `\n**===NEW INCOMING MESSAGE===**\nTime :  ${date}\nEmail :  __${email}__\nMessage :  __${message}__\nUser IP :   __${ip.ip}__  \n @everyone`,
        })
    })
}