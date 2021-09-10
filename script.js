"use strict"

// const let

const ballElem = document.querySelector(".ball");
const catElem = document.querySelector(".cat");


//event, click

// 🍀js 10
window.addEventListener('click',(e)=>{
    console.log(e.clientX)
    console.log(e.clientY)
    // 🍀js 5.
    ballElem.style.transform = `translateX(${e.clientX-15}px) translateY(${e.clientY-15}px)`;

    catElem.style.transform = `translateX(${e.clientX-350}px) translateY(${e.clientY-250}px)`;
});


//event. transition

ballElem.addEventListener('transitionstart',(e)=>{
 
    ballElem.classList.add('end');


});


//function