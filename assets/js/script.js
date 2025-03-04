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


// text animation effect for hero section

const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {
    // loop through letter boxes
    for (let i=0; i < letterBoxes.length; i++){
        // set initial animation delay
        let letterAnimationDelay = 0;

        // get all characters from the current letter box
        let letters = letterBoxes[i].textContent.trim();

        // remove all characters from the current letter box
        letterBoxes[i].textContent = "";

        // loop through all letters
        for( let j=0; j < letters.length; j++){

            const span = document.createElement("span");

            span.style.animationDelay = `${letterAnimationDelay}s`

            // set the "in" class on the span if the current letter active
            // otherwise class is "out"

            if (i === activeLetterBoxIndex){
                span.classList.add("in");
            }else{
                span.classList.add("out");
            }

            // pass current letter into span
            span.textContent = letters[j];

            // add space class on span when current letter contain space
            if(letters[j] === " "){
                span.classList.add("space");
            }

            letterBoxes[i].appendChild(span);

            // skip letterAnimationDelay when loop in last index
            if( j >= letters.length - 1) break;

            letterAnimationDelay += 0.05;
        }

        // get total delay of active letter box
        if( i === activeLetterBoxIndex){
            totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
        }

        // add active class on last active letter box
        if ( i === lastActiveLetterBoxIndex){
            letterBoxes[i].classList.add("active");
        }else{
            letterBoxes[i].classList.remove("active");
        }
    }

    setTimeout (function () {
        lastActiveLetterBoxIndex = activeLetterBoxIndex;

        // update activeLetterBoxIndex based on total letter boxes
        activeLetterBoxIndex >= letterBoxes.length - 1 ? activeLetterBoxIndex = 0 : activeLetterBoxIndex++;

        setLetterEffect();
    }, (totalLetterBoxDelay * 1000) + 3000)
}


// call the letter effect function after window loaded
window.addEventListener("load", setLetterEffect);


// back to top button
const backTopBtn = document.querySelector("[data-back-top-btn]");


window.addEventListener("scroll", function (){
    const bodyHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;

    const scrollEndPos = bodyHeight - windowHeight;
    const totalScrollPercent = (this.window.scrollY / scrollEndPos) * 100;

    backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`;

    //visible back top top btn when scrolled 5% of the page
    if(totalScrollPercent > 5){
        backTopBtn.classList.add("show");
    }else{
        backTopBtn.classList.remove("show");
    }
})