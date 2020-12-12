//
//  ABOUT, PROJECTS, CONTACT ME buttons
//

/*
var about = getElementById("about");
var projects = getElementById("projects");
var contactMe = getElementById("contactMe");

about.addEventListener("click", myfunction(){
    return;
});
*/





//
//  RESPONSIVENESS FUNCTIONS AND VARIABLES
//


var introduction_id = document.getElementById("introduction");
var name_id = document.getElementById("name");
var description_id = document.getElementById("description");
var navbar_id = document.getElementById("navbar");

// NEW
var onlickInformation_id = document.getElementById("onlick_information");

// this line selects the children of ID "navbar" and puts those who have class "links" in the newly created navbar_children array
var navbar_children = document.getElementById("navbar").querySelectorAll(".links");

// Values that, when multiplied by the screen width (window.innerWidth) or height (depending on the name of the variable)
// return the appropriate amount of px based on what parameter it's referred to in full HD resolution

// example : font size for Antonio Ancona is meant to be 70 in 1920x1080
// width_float_fontSizeName * 1920 = 70

var heigth_float_res = 0.1712962962962963;
var widht_float_res = 0.09375;

var width_float_fontSizeName = 0.0364583333333333;
var width_float_fontSizeDescription = 0.03125;
var width_float_fontSizeNavbar = 0.0208333333333333;
// same as navbar to try it
var widht_float_fontSizeonclickInformation = 0.0208333333333333;

var widht_float_NavbarMarginTop = 0.0260416666666667;
var width_float_NavbarMarginRight = 0.0755208333333333;

// Renders the website responsive every 50 milliseconds
// TODO: Check if this has a sizeable effect on page load time/generates problems if the website is open for too long

responsive();
console.log(window.innerHeight * heigth_float_res);
setInterval(responsive, 50);


function responsive(){

    // Introduction responsive distance from top of screen
    introduction_id.style.top = ( (window.innerHeight * heigth_float_res) + "px");
    console.log(introduction_id.style.top);

    // Introduction responsive distance from left of screen
    introduction_id.style.left = ((window.innerWidth * widht_float_res) + "px");
    console.log(introduction_id.style.left);

    // Introduction responsive font size (separate elements)
    name_id.style.fontSize = ((window.innerWidth * width_float_fontSizeName) + "px");
    description_id.style.fontSize = ((window.innerWidth * width_float_fontSizeDescription) + "px");
    navbar_id.style.fontSize = ((window.innerWidth * width_float_fontSizeNavbar) + "px");

    // Navbar responsive top margin
    navbar_id.style.marginTop = ((window.innerWidth * widht_float_NavbarMarginTop) + "px");

    // Navbar children responsive in-between margin
    for(var k = 0; k < navbar_children.length; k++){
        navbar_children[k].style.marginRight = ((window.innerWidth * width_float_NavbarMarginRight) + "px");
    }

    // NEW = onlick information positioning
    onlickInformation_id.style.top = ((window.innerHeight * heigth_float_res) + "px");
    // console.log(onlickInformation_id.style.top);

    onlickInformation_id.style.left = ((window.innerWidth * width_float_res) + "px");

    
}

//
// WORD ROTATION FUNCTIONS AND VARIABLES
//


var passionList = ["Java", "web developement", "innovative technologies", "sports"]
var count = 0;
var passion_id = document.getElementById("passion");




function rotatePassion(){
    var current_passion = passionList[count];

    passion_id.innerHTML = current_passion;

    count++;
    if(count == passionList.length){
        count = 0;
    }
}