function showMenu() {
   let handle = document.querySelector('.slide-bar');
   handle.style.transform = 'translateX(0px)';
}
function closeMenu() {
   let handle = document.querySelector('.slide-bar');
   let width = document.querySelector('.slide-bar .slide-bar-table');
   console.log(width);
   handle.style.transform = `translateX(${-width.offsetWidth}px)`;
}

// Các hàn dưói đây dùng trong phần about us
let accordion_menus_title = document.querySelectorAll('.accordion-menus .accordion-menus-title');
let accordion_menus = document.querySelectorAll('.accordion-menus');
// Hàm dưới đây dùng khi kích thước màn hình lớn hơn 700 thì thì tự động phóng to nội dung ra
// và nếu kích thước màn hình nhỏ hơn 700 thì sẽ thu nhỏ nội dung ra
window.addEventListener('resize', () => {
   if (window.innerWidth >= 700) {
      for (let i = 0; i < accordion_menus_title.length; i++) {
         let accordion_menus_table = accordion_menus[i].querySelector('.accordion-menus-table');
         let accordion_menus_content = accordion_menus_table.querySelectorAll('.accordion-menus-content');
         accordion_menus_table.style.height = `${accordion_menus_content[0].offsetHeight * accordion_menus_content.length}px`;
         accordion_menus_table.style.transform = 'scaleY(1)';
      }
   } else {
      for (let i = 0; i < accordion_menus_title.length; i++) {
         let accordion_menus_table = accordion_menus[i].querySelector('.accordion-menus-table');
         let accordion_menus_content = accordion_menus_table.querySelectorAll('.accordion-menus-content');
         accordion_menus_table.style.height = '0px';
         accordion_menus_table.style.transform = 'scaleY(0)';
      }
   }
})
for (let i = 0; i < accordion_menus_title.length; i++) {
   accordion_menus_title[i].addEventListener('click', () => {
      let accordion_menus_table = accordion_menus[i].querySelector('.accordion-menus-table');
      let accordion_menus_content = accordion_menus_table.querySelectorAll('.accordion-menus-content');
      console.log(accordion_menus_content);
      if (accordion_menus_table.style.transform == 'scaleY(1)') {
         if (window.innerWidth <= 700) {
            accordion_menus_table.style.height = '0px';
            accordion_menus_table.style.transform = 'scaleY(0)';
         }
      } else {
         accordion_menus_table.style.height = `${accordion_menus_content[0].offsetHeight * accordion_menus_content.length}px`;
         console.log(accordion_menus_content[0].offsetHeight);
         accordion_menus_table.style.transform = 'scaleY(1)';
      }
   })
}

function turnOnSearchBar() {
   let search_bar = document.querySelector('.search-container');
   search_bar.style.display = 'block';
}
function turnOffSearchBar() {
   let search_bar = document.querySelector('.search-container');
   search_bar.style.display = 'none';
}