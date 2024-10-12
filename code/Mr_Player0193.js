
function menuMobile() {
  let box = document.querySelector('.menu-mobile');
  box.classList.toggle('on');
};

function authorPC() {
  let box = document.querySelector('.authorPC');
  box.classList.toggle('on');
};

function socialPC() {
  let box = document.querySelector('.socialPC');
  box.classList.toggle('on');
};

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});