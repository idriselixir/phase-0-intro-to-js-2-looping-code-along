// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];



const  writeCards = function (names) {
    // create an array of messages
    const messages = [];
    // create a for loop
    for (let i = 0; i < names.length; i++) {
        // push each message into the array
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
     // return the array
    return messages;
}

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log (i);
        i--;  
    }

}

function countDown1() {
    let i = 4;
    while (i >= 0) {
        console.log (i);
        i--;   
    }
}
