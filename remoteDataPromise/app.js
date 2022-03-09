'use strict'

//*******************************
//*** Getting data with Fetch

let button = document.getElementById('button');
let container = document.getElementById('container');
let countFlags = document.getElementById('flags');

button.addEventListener('click', function() {


})

function showFlags(countries) {
    countFlags.innerHTML = '';
    countries.map((country, i) => {
        let flag = document.createElement('img');
        flag.src = country.flag;
        flag.width = '20';
        flag.height = '20';

        countFlags.appendChild(flag);
    })
}