var sliderBg = document.querySelector(".slider-bg");

var screenWidth = window.screen.width;
if (screenWidth < 500) {
    sliderBg.classList.remove("slider-bg");
    sliderBg.classList.remove("slider-sec");
}
