let btn = document.getElementById('menu-btn');
let menu = document.getElementById('nav');

btn.onclick = function(event){
  event.preventDefault();

  btn.classList.toggle('menu-btn--active');
  menu.classList.toggle('open');
}