

function createSlider(div){
    var sliderInner = div.querySelector(".slider-inner");
    
    var images = sliderInner.querySelectorAll(".img");
    
    var currentImg = 0;
    
    var arrowLeft = div.querySelector('.left');

    var arrowRight = div.querySelector('.right');
    
    
    function moveLeft() {
        sliderInner.style.left = (currentImg * -600) + "px"; 
    }
    
    function rightClick(event){
        event.preventDefault();
        currentImg++;
        if (currentImg === images.length){
            currentImg = 0;
        }
          
        moveLeft(); 
    }    
    
    function leftClick(event){
        event.preventDefault();
        if (currentImg === 0){
            currentImg = images.length;
        }
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

createSlider(a);
createSlider(b);



