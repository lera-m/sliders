/*
var allGalleries = document.querySelectorAll(".slider");

var firstGallery = allGalleries[0].querySelector(".slider-inner").getElementsByClassName("img");
var secondGallery = allGalleries[1].querySelector(".slider-inner").getElementsByClassName("img");
//secondGallery[1].className = secondGallery[1].className + " visible"

console.log(secondGallery[1]);
*/

function createSlider(div){
    var sliderInner = div.querySelector(".slider-inner");
    
    var images = sliderInner.querySelectorAll(".img");
    
    var currentImg = 0;
    
    var arrowLeft = div.querySelector('.left');

    var arrowRight = div.querySelector('.right');
    
    console.log(arrowLeft);
    
    function moveLeft() {
        sliderInner.style.left = (currentImg * -600) + "px"; 
    }
    
    function rightClick(event){
        event.preventDefault();
        currentImg++;  
        moveLeft(); 
    }    
    
    function leftClick(event){
        event.preventDefault();
        currentImg--;  
        moveLeft();

    }    
    
    arrowLeft.addEventListener("click", leftClick);
    arrowRight.addEventListener("click", rightClick);
    //set initial left
    moveLeft();
}

var allDivs = document.body.querySelectorAll(".slider");

var a = allDivs[0];
var b = allDivs[1];

createSlider(a)
createSlider(b)












/*
var gallery = [
           "img/1.jpg", 
           "img/2.jpg", 
           "img/3.jpg", 
           "img/4.jpg",
           "img/5.jpg", 
           "img/6.jpg", 
           "img/7.jpg", 
           "img/8.jpg"
           ];
           
var temp = 0;
//var pic;


var arrowLeft = function(elem){
    var img = elem.nextElementSibling.firstElementChild;
    
    if (temp > 0){
        img.src = gallery[temp - 1];
        temp--;
    } else if (temp === 0) {
        
        temp = gallery.length;
        img.src = gallery[temp - 1];
    }
};

var arrowRight = function(elem){
    var img = elem.previousElementSibling.firstElementChild;
    
    if (temp < gallery.length - 1){
        img.src = gallery[temp + 1];
        temp++;
    } else if (temp === gallery.length - 1){
        temp = 0;
        img.src = gallery[temp];
    }
};
*/

