const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
// const img1 = d
hamburger.addEventListener("click",function(){
    menu.classList.toggle("visible");   
    logo.classList.toggle("invisible");
});
const sliderChanger = document.querySelector(".slider-changer");
const sliderNext = document.querySelector(".slider-next");
const slider = document.querySelector(".slider");

let counter = 1;

sliderChanger.addEventListener("click", function(){
    switch(counter) {
        case 0:
            counter++;
            slider.style.background = "url('./img/slide1.jpg')";
            break;
            
        case 1:
            counter++;
            slider.style.background = "url('./img/slide2.jpg')";
            break;

        case 2:
            counter++;
            slider.style.background = "url('./img/slide3.jpg')";
            counter = 0;
            break;
    }
});