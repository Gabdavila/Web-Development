(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
// var sidebar = document.querySelector('#sidebar');

// var nuevoElemento = document.createElement("H1");

// var nuevoTexto = document.createTextNode("Hola Mundo");

// nuevoElemento.appendChild(nuevoTexto);

// sidebar.appendChild(nuevoElemento); 


var enlacesSidebar = document.querySelectorAll('#sidebar ul');

var nuevoEnlace = document.createElement("A");

var textoEnlace = document.createTextNode("Entrada 6");

nuevoEnlace.appendChild(textoEnlace);

var nuevaLista = document.createElement("li");

nuevaLista.appendChild(nuevoEnlace);

enlacesSidebar[0].appendChild(nuevaLista);

  });
  
})();
