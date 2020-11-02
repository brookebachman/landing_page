document.addEventListener('DOMContentLoaded', (event) => {

  addLi();



  const nav = document.getElementById('page-header');
  // const about = document.getElementById('about');
  // const contact = document.getElementById('contact');
  // const socials = document.getElementById('socials');
  // const extra = document.getElementById('extra');
  //I put an event listener on the navigation container, this is easier and more dry than creating a new event listener for each button
//Then I grab the link elements on the page
//Next I look to see what link matches what was clicked
//Once I find which link was clicked then I want to take the section that matches that link and scroll it to the top view of the page
//I used setTimeout to allow me to essentially unclick the link after 2 seconds so that the user can click a new link and only the newest link they clicked is highlighted
  function addLi(){
    console.log("i am running")
    let ul = document.getElementById("links");
    let i = 0;
    while (i <= 4){
      let li = document.createElement('li');
      ul.appendChild(li);

    }

  }




  nav.addEventListener('click', function (event) {
    console.log(event.target);
    let currentId = event.target.id;
    if (currentId === 'about') {
      let el = document.getElementById('about1');
      el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    //  about.style.cssText = 'background-color: rgb(244, 226, 229, .8);';
      // el.style.cssText = 'border: 15px solid lightgray';
      //setTimeout(unClick(about), 2000);
    } else if (currentId === 'contact') {
      let el = document.getElementById('contact1');
      el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      //contact.style.cssText = 'background-color: rgb(244, 226, 229, .8);';
      // el.style.cssText = 'border: 15px solid lightgray';
      //setTimeout(unClick(contact), 2000);
    } else if (currentId === 'socials') {
      let el = document.getElementById('socials1');
      el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      //socials.style.cssText = 'background-color: rgb(244, 226, 229, .8);';
      // el.style.cssText = 'border: 15px solid lightgray';
      //setTimeout(unClick(socials), 2000);
    } else if (currentId === 'extra') {
      let el = document.getElementById('extras1');
      el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    //  extra.style.cssText = 'background-color: rgb(244, 226, 229, .8);';
      // el.style.cssText = 'border: 15px solid lightgray';
      //setTimeout(unClick(extra), 2000);
    }
  });

})

// function unClick(current) {
// 	current.style.cssText = 'background-color: black';
// }




// Thumbnail image controls
