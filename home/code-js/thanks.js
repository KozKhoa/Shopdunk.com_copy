
let slider_thanks_content = document.querySelector('.slider-thanks-container .slider-thanks-content');
let slider_thanks_image = document.querySelectorAll('.slider-thanks-container .slider-thanks-content img');
let prev_thanks_btn = document.getElementById('prev-thanks-button');
let next_thanks_btn = document.getElementById('next-thanks-button');

const TIME_TRANSITION = 0.5;
const TIME_CHANGE_TKS_SLIDE = 7000;

let numOfImages_tks = slider_thanks_image.length - 6 ;
let currentFirstIndex = 3;
let startTksIndex = 3;
let endTksIndex = numOfImages_tks;

slider_thanks_content.style.transition = 'none';
slider_thanks_content.style.transform = `translate(${slider_thanks_image[0].offsetWidth * -startTksIndex}px)`;

// Mình chỉ có thể tele rồi trượt chứ không thể trượt rồi tele. Đell đc xóa comment này
// Cân nhắc dùng order trong trường hợp này; fail
function showTksSlide(index) {
   if (index > endTksIndex + 3) {
      slider_thanks_content.style.transition = 'none';
      slider_thanks_content.style.transform = `translate(${slider_thanks_image[0].offsetWidth * -startTksIndex}px)`;
      currentFirstIndex = startTksIndex + 1;
   } else if (currentFirstIndex < 0) {
      slider_thanks_content.style.transition = 'none';
      slider_thanks_content.style.transform = `translate(${slider_thanks_image[0].offsetWidth * -endTksIndex}px)`;
      currentFirstIndex = endTksIndex - 1;
   }
   index = currentFirstIndex;
   let imageWidth = slider_thanks_image[index].offsetWidth;
   slider_thanks_content.style.transform = `translate(${imageWidth * -1 * currentFirstIndex}px)`;
   slider_thanks_content.style.transition = '0.5s';

   console.log(imageWidth);
   console.log(currentFirstIndex);
}
let HANLDE_INTERVAL = setInterval(() => {
   currentFirstIndex++;
   showTksSlide(currentFirstIndex);
}, TIME_CHANGE_TKS_SLIDE);

next_thanks_btn.onclick = () => {
   clearInterval(HANLDE_INTERVAL);
   clearInterval
   currentFirstIndex++;
   showTksSlide(currentFirstIndex);
   HANLDE_INTERVAL = setInterval(() => {
      currentFirstIndex++;
      showTksSlide(currentFirstIndex);
   }, TIME_CHANGE_TKS_SLIDE);
}
prev_thanks_btn.onclick = () => {
   clearInterval(HANLDE_INTERVAL);
   currentFirstIndex--;
   showTksSlide(currentFirstIndex);
   HANLDE_INTERVAL = setInterval(() => {
      currentFirstIndex++;
      showTksSlide(currentFirstIndex);
   }, TIME_CHANGE_TKS_SLIDE);
}


console.log(slider_thanks_content); 
console.log(slider_thanks_image);
console.log(numOfImages_tks);
console.log(prev_thanks_btn);
console.log(next_thanks_btn);