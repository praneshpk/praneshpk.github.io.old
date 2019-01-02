var text = document.querySelectorAll('.text p');
setTimeout(function(){
  text.forEach(function(e) {
    e.classList.add('fadein');
  });
}, 10);