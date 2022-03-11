(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){

    var primerPost = document.querySelector ('main article');

    primerPost.parentNode.removeChild(primerPost);

    var enlaces = document.querySelector('#navegacion nav ul li a');

    enlaces.parentNode.removeChild(enlaces);

    // // var enlaces = document.querySelectorAll('#navegacion nav ul li a')[10];
    // elimina un elemento en una posicion en especifico, en este caso la posicion 10


  });
  
})();
