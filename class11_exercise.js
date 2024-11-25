
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not
*/


/*
Plan
1. Adding Users:
Define AddUserToRegistry() to:
Prompt for a user's name.
Add the name to the users array.

2. Checking the Registry:
Define CheckRegistry() to:
Iterate through the users array using a for loop.
Display the list in a numbered format.
Handle empty arrays with an appropriate message.

3. Banning Users:
Define BanUser() to:
Prompt for a user's name.
Add the name to the banned array.

4. Checking the Banned List:
Define CheckBanned() to:
Iterate through the banned array using a for loop.
Display the list in a numbered format.

5. Quit Functionality:
Allow the host to terminate the application by selecting the "quit" option.

6. Error Handling:
Provide error messages for invalid inputs.


*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let users = [];
let banned = [];

function StartApp() {
  readline.question("What would you like to do? (add / check / ban / check ban / quit): ", (_command) => {
    if (_command === "add") {
      // add user's name
      AddUserToRegistry();
    } else if (_command === "check") {
      // check user's name to the registry
      CheckRegistry();
    } else if (_command === "ban") {
      // add  user to the banned list
      BanUser();
    } else if (_command === "check ban") {
      // check ban list
      CheckBanned();
    } else if (_command === "quit") {
      console.log("Goodbye!");
      // quit
      readline.close();
    } else {
      console.log("Error");
      StartApp();
    }
  });
}

// Ask user's name to register people into an array
function AddUserToRegistry() {
  readline.question("Enter user's name: ", (userName) => {
    users.push(userName);
    console.log(`${userName} has been added to the registry.`);
    StartApp();
  });
}

// Allows the host or user to check the registry
function CheckRegistry() {
  console.log("Registered users:");
  for (let i = 0; i < users.length; i++) {
    // To list the names in order
    console.log(`${i + 1}. ${users[i]}`);
  }
  StartApp();
}

// add ban user into the ban list
function BanUser() {
  readline.question("Enter ban user's name: ", (BanUserName) => {
    banned.push(BanUserName); // Add to the banned list, not users array
    console.log(`${BanUserName} has been added to the ban list.`);
    StartApp();
  });
}

// Allows the host or user to check the ban list
function CheckBanned() {
  console.log("Banned users:");
  for (let i = 0; i < banned.length; i++) { // List banned users, not users
    console.log(`${i + 1}. ${banned[i]}`);
  }
  StartApp();
}
StartApp();
// I like how when the systems asked what the user wants to do, it gives out the possible things you can type to recieve what functions comes out. code looks really neat! - Sophia
