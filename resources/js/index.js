'use strict'
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('Has dado click');
    menu.classList.toggle('hidden')
})