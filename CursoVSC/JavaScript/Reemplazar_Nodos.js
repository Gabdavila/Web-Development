(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    //Reemplazar un Nodo con otro
    
    /*
    var viejoNodo = document.querySelector('main h2');
    var nuevoNodo  = document.querySelector('footer h2');

    viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo); */

    //Reemplazar nodo con uno Nuevo

    var nuevoTitulo = document.createElement('H2');
    var nuevoTexto = document.createTextNode('Hola Mundo');

    nuevoTitulo.appendChild(nuevoTexto);
    
    var viejoNodo = document.querySelector('main h2');

    viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo); 


  });
  
})();
