
function createSlider(div){
    var sliderInner = div.find(".slider-inner");
    var images = sliderInner.find(".img");
    var currentImg = 0;
    var arrowLeft = div.find('.left');
    var arrowRight = div.find('.right');
    
    function moveLeft() {
        sliderInner.css("left", (currentImg * -600) + 'px');
    };
    
    function rightClick(event){
        event.preventDefault();
        currentImg++;
        if (currentImg === images.length){
            currentImg = 0;
        }    
        moveLeft(); 
    };    

    
    function leftClick(event){
        event.preventDefault();
        if (currentImg === 0){
            currentImg = images.length;
        }
        currentImg--; 
        moveLeft();
    };    
    
    arrowRight.on("click", rightClick);
    arrowLeft.on("click", leftClick);
}

var allDivs = $(".slider");

var a = allDivs.eq(0);
var b = allDivs.eq(1);
createSlider(a);
createSlider(b);
