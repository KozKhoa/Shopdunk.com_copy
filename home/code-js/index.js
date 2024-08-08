function showMenu() {
   let handle = document.querySelector('.slide-bar');
   handle.style.transform = 'translateX(0px)';
}
function closeMenu() {
   let handle = document.querySelector('.slide-bar');
   handle.style.transform = `translateX(${-window.innerHeight}px)`;
}