// * Plantilla básica | chendo.io | código 100% desde cero
//   código gratis para ti.
//   Felíz Navidad  :) y Próspero año nuevo!
  
// * Basic Template by Chendo.io | code 100% from scratch
//   free code for you.
//   Merry Christmas :) and Happy New Year!

//   Nota: Imágenes de fondo y planetas sacado de frontend mentor proyecto código abierto :)

//   Important:
//   Background images and planets taken from frontend mentor open source project :)

const nav = document.querySelector('.navigation');
const btnMenu = document.querySelector('#hambur-img');

btnMenu.addEventListener('click', () => {
    if(nav.classList.contains('menu-on')){
        nav.classList.remove('menu-on');
    } else {
        nav.classList.add('menu-on');
    }
});

