document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
 
addLi();
function addLi(){
  console.log("i am running")
  let ul = document.getElementById("links");
  let i = 0;
  while (i <= 4){
    let li = document.createElement('li');
    ul.appendChild(li);
  }
}
  
})
const nav = document.getElementById('page-header');
  //I put an event listener on the navigation container, this is easier and more dry than creating a new event listenerfor each button
  //Then I grab the link elements on the page
  //Next I look to see what link matches what was clicked
  //Once I find which link was clicked then I want to take the section that matches that link and scroll it to the top view of the page
nav.addEventListener('click', function (event) {
  console.log(event.target);
  let currentId = event.target.id;
  if (currentId === '0') {
    let currentSection = document.getElementById("about");
    currentSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    about.style.cssText = 'background-color: rgb(244, 226, 229, .8);';
    //currentSection.style.cssText = 'border: 15px solid lightgray';
    setTimeout(unClick(about), 2000);
  } else if (currentId === '1') {
    let currentSection = document.getElementById("contact");
    currentSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    contact.style.cssText = 'background-color: rgb(244, 226, 229, .8);';
   // currentSection.style.cssText = 'border: 15px solid lightgray';
    setTimeout(unClick(contact), 2000);
  } else if (currentId === '2') {
    let currentSection = document.getElementById("socials");
    currentSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    socials.style.cssText = 'background-color: rgb(244, 226, 229, .8);';
   // currentSection.style.cssText = 'border: 15px solid lightgray';
    setTimeout(unClick(socials), 2000);
} else if (currentId === '3'){
  let currentSection = document.getElementById("bonus");
  currentSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  socials.style.cssText = 'background-color: rgb(244, 226, 229, .8);';
}
});
function unClick(current) {
  current.style.cssText = 'background-color: black';
}

const navbarMenu = document.getElementById("links");
//select sections
const sections = document.querySelectorAll("section");
//build a nav
function createNav(){
    for (let i = 0; i < 4; i++){
      let section = document.createElement("li");
      section.id = i;
      navbarMenu.appendChild(section);
    };  
};

createNav();

const about = document.getElementById('0');
const contact = document.getElementById('1');
const socials = document.getElementById("2");
const extra = document.getElementById('3');
about.innerText = "About";
contact.innerText = "Contact";
socials.innerText = "Socials";
extra.innerText = "Bonus Content";
