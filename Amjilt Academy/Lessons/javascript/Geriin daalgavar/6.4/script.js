const boxes = document.querySelectorAll('.box');
const modalContainer = document.querySelector('.modalContainer');
const img = document.querySelector('#img');
const icon = document.querySelector('.icon');

boxes.forEach(function(box){
  box.addEventListener('click', function(){ 
    let imgPath = box.style.backgroundImage.split('"')[1];
    img.src = imgPath; 
    modalContainer.classList.remove('hidden'); 
  });
});

document.addEventListener('click',  function(e) {
  if(e.target.classList.contains('modalContainer')) {
    modalContainer.classList.add('hidden')
  }
})

document.addEventListener('keydown', function(e){
  if(e.keyCode ===  27) {
    modalContainer.classList.add('hidden');
  }
});

img.previousElementSibling.addEventListener('click', function(){
  modalContainer.classList.add('hidden');
});