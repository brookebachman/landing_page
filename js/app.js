const nav = document.getElementById('page-header')
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const socials = document.getElementById("socials");

nav.addEventListener("click", function(event){
    console.log(event.target)
    let currentId = event.target.id
    if (currentId === "about"){
        let el = document.getElementById("about1")
        el.scrollIntoView(true);
        about.style.cssText = "background-color: rgb(244, 226, 229, .8); color: black;"
        
    } else if (currentId === "contact"){
        let el = document.getElementById("contact1")
        el.scrollIntoView(true);
        contact.style.cssText = "background-color: rgb(244, 226, 229, .8); color: black;"
        
    } else if (currentId === "socials"){
        let el = document.getElementById("socials1")
        el.scrollIntoView(true);
        socials.style.cssText = "background-color: rgb(244, 226, 229, .8); color: black;"
     }
    //document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
})