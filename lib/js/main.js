const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let database = firebase.database().ref();


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    let username        = usernameElement.value;
    let message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    let userInput ={
        Name : username,
        Message: message,
    };
database.push(userInput);
}

// Set database "child_added" event listener here
database.on("child_added", addMessagetoBoard); 
let messageContainer = document.querySelector(".allMessages");

function addMessagetoBoard(rowData){
    let row = rowData.val();
    let name = row.Name;
    let message = row.Message;
    let pElement = document.createElement('p');
    pElement.innerText = `${name}: ${message}`;
    messageContainer.appendChild(pElement);
}