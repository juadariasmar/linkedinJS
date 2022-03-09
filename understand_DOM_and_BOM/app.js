'use strict'

//*******************************
//*** DOM

/*
let button = document.getElementById("button");

button.addEventListener('click', function() {
    console.log(window.location.href);
})
*/

//*************************************
//*** Dom properties and methods

let button = document.getElementById("button");

let allP = document.getElementsByTagName("p");
let pForClass = document.getElementsByClassName("principal")[0].textContent;
let photo;

button.addEventListener('click', function() {
    console.log(allP);
    console.log(pForClass);


})