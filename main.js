// Dropdown toggle button
jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                '-moz-transform' : 'rotate('+ degrees +'deg)',
                '-ms-transform' : 'rotate('+ degrees +'deg)',
                'transform' : 'rotate('+ degrees +'deg)',
                'transition': 'transform 0.3s linear'});
    return $(this);
};

$(".dropdown-icon").rotate(-180);
var rotated = true;

$("#toggle-btn").click(function() {
    $("#toggle-btn + ul").slideToggle();
    if(rotated) {
        $(".dropdown-icon").rotate(0);
        rotated = false;
    }
    else {
        $(".dropdown-icon").rotate(-180);
        rotated = true;
    }
});

// Education icons 
var highSchoolOpen = false;
var collegeOpen = false;

var highSchoolButton = document.querySelector(".highschool-btn");
var highSchoolAfter = document.querySelector(".highschool-btn::after");
console.log(highSchoolAfter);
var highSchoolContent = document.querySelector(".highschool-content");
highSchoolButton.onclick = () => {
    if(!highSchoolOpen) {
        highSchoolButton.style.transform = "translateX(-10vw) rotate(-1turn)";
        highSchoolButton.style.transition = "transform 1s ease-in-out, background-color 0.5s ease-in-out";
        highSchoolContent.style.opacity = "1";
        highSchoolContent.style.transform = "translateX(0)";
        highSchoolContent.style.transition = "opacity 0.5s 1s ease-in-out, transform 0.5s 1s ease-in-out";
        collegeButton.style.opacity = "0";
        collegeButton.style.transition = "opacity 0.2s ease-in-out, background-color 0.5s ease-in-out";
        highSchoolOpen = true;
        collegeButton.disabled = true;
    }
    else {
        highSchoolButton.style.transform = "translateX(0) rotate(1turn)";
        highSchoolButton.style.transition = "transform 1s 0.5s ease-in-out, background-color 0.5s ease-in-out";
        highSchoolContent.style.opacity = "0";
        highSchoolContent.style.transform = "translateX(-3vw)";
        highSchoolContent.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
        collegeButton.style.opacity = "1";
        collegeButton.style.transition = "opacity 0.2s 0.75s ease-in-out, background-color 0.5s ease-in-out";
        highSchoolOpen = false;
        collegeButton.disabled = false;
    }
};

var collegeButton = document.querySelector(".college-btn");
var collegeContent = document.querySelector(".college-content");
collegeButton.onclick = () => {
    if(!collegeOpen) {
        collegeButton.style.transform = "translateX(-35.5vw) rotate(-1turn)";
        collegeButton.style.transition = "transform 1s ease-in-out, background-color 0.5s ease-in-out";
        collegeContent.style.opacity = "1";
        collegeContent.style.transform = "translateX(0)";
        collegeContent.style.transition = "opacity 0.5s 1s ease-in-out, transform 0.5s 1s ease-in-out";
        highSchoolButton.style.opacity = "0";
        highSchoolButton.style.transition = "opacity 0.2s ease-in-out, background-color 0.5s ease-in-out";
        collegeOpen = true;
        highSchoolButton.disabled = true;
    }
    else {
        collegeButton.style.transform = "translateX(0) rotate(1turn)";
        collegeButton.style.transition = "transform 1s 0.5s ease-in-out, background-color 0.5s ease-in-out";
        collegeContent.style.opacity = "0";
        collegeContent.style.transform = "translateX(-3vw)";
        collegeContent.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
        highSchoolButton.style.opacity = "1";
        highSchoolButton.style.transition = "opacity 0.2s 1.2s ease-in-out, background-color 0.5s ease-in-out";
        collegeOpen = false;
        highSchoolButton.disabled = false;
    }
};