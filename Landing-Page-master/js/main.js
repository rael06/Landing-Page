"use strict";

// Screen Size
$(window).resize(screenSizer); // listener for window resizing
var screenWidth = document.documentElement.offsetWidth;

function screenSizer() { // to always display navigation menu on screen width > 767 px
    screenWidth = document.documentElement.offsetWidth;
	if (screenWidth > 767) {
	 	$(".nav_bar-menu").css("display", "block");
	 	$(".nav_bar-menu").css("opacity", "1")
	}
}
// !Screen Size

// Button nav scroll
var show_hide_on_off = false; // switch on/off statement

function show_hide() {
    if (!show_hide_on_off) {
        scrollNavShow();
    } else {
        scrollNavHide();
    }
}

function scrollNavHide() { // to show navigation menu
    show_hide_on_off = false;
    $(".nav_bar-menu").slideUp(800).animate({
        opacity: 0
    }, {
        queue: false,
        duration: 'slow'
    })
}

function scrollNavShow() { // to hide navigation menu
    show_hide_on_off = true;
    $(".nav_bar-menu").css("opacity", "0");
    $(".nav_bar-menu").slideDown(800).animate({
        opacity: 1
    }, {
        queue: false,
        duration: 1500
    });
}

function anchorsHide() { // to skip animation of nav' menu when anchors are clicked
    show_hide_on_off = false;
    $(".nav_bar-menu").css("display", "none");
    if(screenWidth > 767) { // to always display anchors even clicked on screen width > 767px
    $(".nav_bar-menu").css("display", "block");
    }
}


$("#button_nav").on('click', show_hide); // listener of navigation button
$(".nav_bar-list a").on('click', anchorsHide);  // listener of navigation bar's anchors
// ! Button nav scroll

// Scroll to Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
})

$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
})
// !Scroll to Top


/*
//Hide nav bars
if (screenWidth > 767){
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        $("ul").css("display", "none");
    } else {
        $("ul").css("display", "block");
    }
}*/