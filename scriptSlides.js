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


/*
var arrowLeft = document.querySelector('.left');

var arrowRight = document.querySelector('.right');

arrowRight.onclick = function(e) {
    
    e.preventDefault();
    if (temp < gallery.length - 1) {
        pic = gallery[temp + 1];
        document.getElementById("img").src = pic;
        temp++;
    } else if (temp === gallery.length - 1){
        temp = 0;
        pic = gallery[temp];
        document.getElementById("img").src = pic;
    }
};





arrowLeft.onclick = function(e) {
    
    e.preventDefault();
    if (temp > 0) {
        pic = gallery[temp - 1];
        document.getElementById("img").src = pic;
        temp--;
    } else if (temp === 0){
        temp = gallery.length - 1;
        pic = gallery[img.length - 1];
        document.getElementById("img").src = pic;
    }
};
*/