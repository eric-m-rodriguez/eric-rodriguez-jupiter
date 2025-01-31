const body = document.body; /*declares document body in variable*/

const today = new Date(); /*creates date object*/

const thisYear = today.getFullYear(); /*creates variable for current year*/

const footer = document.createElement('footer'); /*creates footer element*/

body.appendChild(footer); /*appends footer to body*/

const copyright = document.createElement('p'); /*creates paragraph element*/

const copyrightSymbol = '\u00A9'; /*creates variable for copyright symbol*/

copyright.innerHTML = `${copyrightSymbol} Eric Rodriguez ${thisYear}`; /*sets inner HTML of copyright element*/

footer.appendChild(copyright); /*appends copyright element to footer*/

const skills = ['HTML', 'CSS', 'Javascript', 'GitHub']; /*creates an array of skills*/

const skillsSection = document.querySelector("#skills"); /*selects skills section*/

const skillsList = skillsSection.querySelector("ul"); /*selects unordered list in skills section*/

for (let i = 0; i <skills.length; i++) {    /*iterates through skills array*/

    const skill = document.createElement("li"); /*creates list item element*/

    skill.innerText = skills[i]; /*selects inner text of list item*/

    skillsList.appendChild(skill); /*appends list item to skills section*/
};

const messageForm = document.forms["leave_message"]; /*selects leave message form*/

/*Retrieves values from form input fields*/
messageForm.addEventListener("submit", function(event) {/*adds events listener to form*/

    event.preventDefault(); /*prevents from reloading page before logging to console*/

    const usersName = event.target.usersName.value; /*creates variable for user name*/
    const usersEmail = event.target.usersEmail.value; /*creates variable for user email*/
    const usersMessage = event.target.usersMessage.value; /*creates variable for user message*/

    console.log("Name:", usersName); /*logs user name to console*/
    console.log("Email:", usersEmail); /*logs user email to console*/
    console.log("Message:", usersMessage); /*logs user message to console log*/
});

