//0) 자동 배너 


//1) 메뉴바 마우스엔터 확대
let menu = document.getElementsById("menuBar");

const zoom = (element, scale) => {
    element.style.transform = `scale(${scale})`;
    element.style.transition = "all 0.5s";
  };

  menu[i].addEventListener("mouseenter", () => zoom(img, 1.05));
  menu[i].addEventListener("mouseleave", () => zoom(img, 1));
  





// 2) Image Slider


var slider = document.querySelector("#slider");
var slides = slider.querySelector(".slides");
var slide = slides.querySelectorAll(".slide");

var currentSlide = 0;

setInterval(function() {
    var from = - (1024 * currentSlide);
    var to = from - 1024;
    
    slides.animate({
        marginLeft: [from + "px", to + "px"]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });


    currentSlide++;


    if (currentSlide === (slide.length - 1)) {
        currentSlide = 0;
    }
}, 2000);




