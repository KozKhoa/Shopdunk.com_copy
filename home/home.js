const slider_images = document.querySelector('.slider-container .slider-content');
console.log(slider_images);
const imgs = document.querySelectorAll('.slider-container .slider-content img');
console.log(imgs);
console.log(imgs.length);
// let currentSlideIndex = 0;
// let slider = document.querySelectorAll('.slider-container .slider-content');
// console.log(slider);
// let sliderImg = document.querySelectorAll('.slider-container .slider-content img');
// console.log(sliderImg);

// let maxSlideImg = sliderImg.length;
// console.log(maxSlideImg);


// function showSlide(slideIndex) {
//    let slideWidth = sliderImg[0].offsetWidth;
//    console.log(slideWidth);
//    let move = slideIndex - currentSlideIndex;
//    slider.style.transform = `translateX(${-1 *move * slideWidth})`;

//    currentSlideIndex = slideIndex;
//    if (currentSlideIndex < 0) {
//       currentSlideIndex = maxSlideImg;
//    }
//    else if (currentSlideIndex > maxSlideImg) {
//       currentSlideIndex = 0;
//    }
// }