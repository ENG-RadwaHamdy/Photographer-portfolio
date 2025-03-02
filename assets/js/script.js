'use strict'

// add event on multiple element

const addEventsOnElements = function (elemets, eventType, callback){
    for(let i=0; i < elemets.length; i++){
        elemets[i].addEventListener(eventType, callback)
    }
}

// preloading

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function(){
    loadingElement.classList.add("loaded");
    this.document.body.classList.remove("active");
})

// mobile nav toggle

const [navTogglers, navLinks, navbar, overlay] = [
    document.querySelectorAll("[data-nav-toggler"),
    document.querySelectorAll("[data-nav-link]"),
    document.querySelector("[data-navbar]"),
    document.querySelector("[data-overlay]")
];

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventsOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
}

addEventsOnElements(navLinks, "click", closeNav);

//header

const header = document.querySelector("[data-header]");

const activeElementOnScroll = function () {
    if(window.screenY > 50){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll)