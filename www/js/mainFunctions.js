//
//  ABOUT, PROJECTS, CONTACT ME buttons
//

var about = document.getElementById('about_info');
var projects = document.getElementById("projects_info");
var contactMe = document.getElementById("contact_info");

function about_button(){
    if(about.style.display === "none"){
        about.style.display = "block";
    } else {
        about.style.display = "none";
    }

    if(projects.style.display === "block"){
        projects.style.display = "none";
    }
    if(contactMe.style.display === "block"){
        contactMe.style.display = "none";
    }
}

function projects_button(){
    if(projects.style.display === "none"){
        projects.style.display = "block";
    } else {
        projects.style.display = "none";
    }

    if(about.style.display === "block"){
        about.style.display = "none";
    }
    if(contactMe.style.display === "block"){
        contactMe.style.display = "none";
    }
}

function contactMe_button(){
    if(contactMe.style.display === "none"){
        contactMe.style.display = "block";
    } else {
        contactMe.style.display = "none";
    }

    if(about.style.display === "block"){
        about.style.display = "none";
    }
    if(projects.style.display === "block"){
        projects.style.display = "none";
    }
}

//
// WORD ROTATION FUNCTIONS AND VARIABLES
//

// TODO: Add fade-in and fade-out between word changes

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


var passion_id = document.getElementById('passion');
rotatePassion();


async function rotatePassion(){
    var passionList = ["Java", "web developement", "innovative technologies", "sports"]
    for(var i = 0; i < 50; i++){
        if(i == passionList.length){
            i = 0;
        }
        passion_id.innerHTML = passionList[i];
        await sleep(4000);
    }
}