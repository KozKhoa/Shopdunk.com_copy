
function callUserTable() {
   let handle = document.querySelector('#user .dropdown .dropdown-table')
   console.log(handle);
   if (handle.style.display !== 'none') {
      handle.style.display = 'none';
   } 
}