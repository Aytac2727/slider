var next = document.getElementById("next");
var prev = document.getElementById("prev");
var sliders = document.querySelector("#slider ul");
var say = 0;
var sliderli = sliders.querySelectorAll("li").length;
// next.onclick = nextSlider;
// prev.onclick = prevSlider;

// setInterval(() => {
//     nextSlider()
// }, 3000);

// function nextSlider() {
//     say++;
//     if (say == sliderli) {
//         say = 0;
//     }
//     sliders.style.left = -(say * 900) + "px"
// }

// function prevSlider() {
//     say--;
//     if (say == -1) {
//         say = sliderli - 1;
//     }
//     sliders.style.left = -(say * 900) + "px"
// }

var miniSlide = document.querySelectorAll(".minislider li");
for (var i=0; i<miniSlide.length; i++){
    miniSlide[i].onclick = function (){
        var imgLink = this.querySelector("img").src;
        document.querySelector("#slider img").src = imgLink;
    }
}

var pos = 0;
next.onclick = function(){
    pos++;
    var slideritem = document.querySelectorAll(".minislider li img")
    if (pos == slideritem.length){
        pos = 0;
    }
    document.querySelector("#slider img").src = slideritem[pos].src;
}