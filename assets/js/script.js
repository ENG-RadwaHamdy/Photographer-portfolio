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