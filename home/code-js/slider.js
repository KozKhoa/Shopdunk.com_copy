let slider_content = document.querySelector('.slider-container .slider-content');
let slider_image = document.querySelectorAll('.slider-container .slider-content img');
let prev_btn = document.getElementById('prev-button');
let next_btn = document.getElementById('next-button');
let dots_btn = document.querySelectorAll('.slider-container .slider-dots button');
let numOfImages = slider_image.length - 2;
let currentSlideIndex = 1;
let startIndex = 1;
let endIndex = numOfImages;
const TIME_CHANGE_SLIDE = 5000;

let HANDLE_INTERAL = setInterval(() => {
   removeActiveDot(currentSlideIndex - 1);
   currentSlideIndex++;
   showSlide(currentSlideIndex);
   activateDot(currentSlideIndex - 1);
}, TIME_CHANGE_SLIDE);

/*Dùng dể đặt bức hình có index là 1 lên ngay đầu tiên khi mở trang web */
slider_content.style.transition = 'none';
slider_content.style.transform = `translateX(${-1 * slider_image[0].offsetWidth}px)`;
/**/
function activateDot(indexDot) {
   dots_btn[indexDot].classList.add('active');
}
function removeActiveDot(indexDot) {
   dots_btn[indexDot].classList.remove('active');
}

// Mình chỉ có thể tele rồi trượt chứ không thể trượt rồi tele. Đell đc xóa comment này
function showSlide(index) {
   if (index > endIndex) {
      slider_content.style.transition = 'none';
      slider_content.style.transform = `translateX(0px)`;
      currentSlideIndex = startIndex;
   } else if (index < startIndex) {
      let image_width = slider_image[index].offsetWidth;
      slider_content.style.transition = 'none';
      slider_content.style.transform = `translateX(${image_width * (endIndex + 1) * -1}px)`;
      currentSlideIndex = endIndex;
   }
   index = currentSlideIndex;
   let image_width = slider_image[index].offsetWidth;
   slider_content.style.transition = '0.5s'
   slider_content.style.transform = `translateX(${image_width * index * -1}px)`;
}
next_btn.onclick = () => {
   clearInterval(HANDLE_INTERAL);
   removeActiveDot(currentSlideIndex - 1);
   currentSlideIndex++;
   showSlide(currentSlideIndex);
   activateDot(currentSlideIndex - 1);
   createIntervalHandle();
}

prev_btn.onclick = () => {
   clearInterval(HANDLE_INTERAL);
   removeActiveDot(currentSlideIndex - 1);
   currentSlideIndex--;
   showSlide(currentSlideIndex);
   activateDot(currentSlideIndex - 1);
   createIntervalHandle();
}

function createIntervalHandle() {
   HANDLE_INTERAL = setInterval(() => {
      removeActiveDot(currentSlideIndex - 1);
      currentSlideIndex++;
      showSlide(currentSlideIndex);
      activateDot(currentSlideIndex - 1);
   }, TIME_CHANGE_SLIDE);
}

for (let i = 0; i < dots_btn.length; i++) {
   dots_btn[i].onclick = () => {
      clearInterval(HANDLE_INTERAL);
      removeActiveDot(currentSlideIndex - 1);
      currentSlideIndex = i + 1;
      showSlide(currentSlideIndex);
      activateDot(i);
      createIntervalHandle();
   }
   // We can use this instead;
   // dots_btn.forEach((button, key) => {
   // button.onclick = () => {
   //    clearInterval(HANDLE_INTERAL);
   //    removeActiveDot(currentSlideIndex - 1);
   //    currentSlideIndex = key + 1;
   //    showSlide(currentSlideIndex);
   //    activateDot(key);
   //    createIntervalHandle();
   // }
// })
}
// console.log('numOfImages = '); console.log(numOfImages);
// console.log('slider_content = '); console.log(slider_content);
// console.log('slider_image = ');  console.log(slider_image);
// console.log('prev button = '); console.log(prev_btn);
// console.log('next button = '); console.log(next_btn);
// console.log('dots buttons = '); console.log(dots_btn);
// console.log('endIndex = '); console.log(endIndex);