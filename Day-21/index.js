addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
var index = 0;
const slides = document.querySelectorAll(".img");
const classHide = "img-hidden", count = slides.length;
nextSlide();
function nextSlide() {
    slides[(index ++) % count].classList.add(classHide);
    slides[index % count].classList.remove(classHide);
    setTimeout(nextSlide, 300);
}
});