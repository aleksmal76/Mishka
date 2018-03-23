'use strict'

var slider = document.querySelector(".slider");
var slideContent = document.querySelectorAll(".slide-content");
var slideOne = document.querySelectorAll(".slider__slide1");
var slideTwo = document.querySelectorAll(".slider__slide2");
var slideThree = document.querySelectorAll(".slider__slide3");
var content = document.getElementById('content');
var btnLeft = document.getElementById('btn-1');
var btnRight = document.getElementById('btn-2');
var current = 0;


function reset(){
    for(let i = 0; i < slideContent.length; i++){
        slideContent[i].style.display = "none";
    }
}

function startSlide(){
    reset();
    slideContent[0].style.display = "block";
}

function slideLeft(){
    reset();
    slideContent[current - 1].style.display = "block";
    current--;
}

function slideRight(){
    reset();
    slideContent[current + 1].style.display = "block";
    current++;
}

btnLeft.addEventListener("click", function(){
    if(current === 0){
        current = slideContent.length;
    }
    slideLeft();
});

btnRight.addEventListener("click", function(){
    if(current === slideContent.length - 1){
        current = -1
    }
    slideRight();
});

startSlide();





//  btnLeft.addEventListener('click' , function(){
//      if ((slideLeft == -1) || (btnLeft == 0))
//        return slideContent.style.display = "block"
//     else 
//        return
//       (slideContent.style.display = "none")
//  });

//  btnRight.addEventListener('click', function(){
//     if ((slideRight == 1) || (btnRight == -1))
//     return slideContent.style.display = "block"
//     else 
//     return (slideContent.style.display = "none")
//  })
 

    
