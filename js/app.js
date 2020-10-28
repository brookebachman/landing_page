const nav = document.getElementById('page-header')
nav.addEventListener("click", function(event){
    console.log(event.target.id)
    let currentId = event.target.id
    if (currentId === "about"){
        let el = document.getElementById("about1")
        el.scrollIntoView(true);
    } else if (currentId === "contact"){
        let el = document.getElementById("contact1")
        el.scrollIntoView(true);
    } else if (currentId === "socials"){
        let el = document.getElementById("socials1")
        el.scrollIntoView(true);
     }
    //document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
})