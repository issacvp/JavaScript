const Twilio = require("twilio");

const client = new Twilio('', '');

let msgs
client.messages
    .list()
    .then(messages => {
        console.log("This is the last message sent : " + messages[0].body);
    })
    .catch(error => {
        error
    });
console.log("Gathering messages!!");
