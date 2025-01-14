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

    skillsSection.appendChild(skill); /*appends list item to skills section*/
};