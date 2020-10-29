const nav = document.getElementById('page-header')
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const socials = document.getElementById("socials");
const extra = document.getElementById("extra");
//I put an event listener on the navigation container, this is easier and more dry than creating a new event listener for each button
 //Then I grab the link elements on the page
 //Next I look to see what link matches what was clicked
 //Once I find which link was clicked then I want to take the section that matches that link and scroll it to the top view of the page
 //I used setTimeout to allow me to essentially unclick the link after 2 seconds so that the user can click a new link and only the newest link they clicked is highlighted

nav.addEventListener("click", function(event){
    console.log(event.target)
    let currentId = event.target.id
    if (currentId === "about"){
        let el = document.getElementById("about1")
        el.scrollIntoView(true);
        about.style.cssText = "background-color: rgb(244, 226, 229, .8);"
        setTimeout(unClick(about),2000)
        
    } else if (currentId === "contact"){
        let el = document.getElementById("contact1")
        el.scrollIntoView(true);
        contact.style.cssText = "background-color: rgb(244, 226, 229, .8);"
        setTimeout(unClick(contact),2000)
    } else if (currentId === "socials"){
        let el = document.getElementById("socials1")
        el.scrollIntoView(true);
        socials.style.cssText = "background-color: rgb(244, 226, 229, .8);"
        setTimeout(unClick(socials),2000)
     }
     else if (currentId === "extra"){
        let el = document.getElementById("extras1")
        el.scrollIntoView(true);
        extra.style.cssText = "background-color: rgb(244, 226, 229, .8);"
        setTimeout(unClick(extra),2000)
     }

})

function unClick(current){
    current.style.cssText = "background-color: black"

}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].class = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}