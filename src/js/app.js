/*-----------------------------------------------------------------------------------

    Name: Moon Site
    Theme URI: @chendito
    Description: Web Site - Moda Devaecha
    Author: @chendito - chendo : developer and web designer
    Author URI: http://chendo.io
    Github: https://github.com/chendito
    Youtube: https://youtube.com/chendito

-----------------------------------------------------------------------------------*/
const nav = document.querySelector('.main-nav');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close');
let menuOpen = true;

menuBtn.addEventListener('click', () => {
  let tl = gsap.timeline();

  if(menuOpen) {
    nav.classList.add('open');
    setTimeout(() => {
      menuBtn.style.opacity = 0;
    }, 700);
    menuOpen = true;

    tl.from('.gs-main', {
      duration: 2,
      x: 600,
      ease: 'power2.out'
    });
    tl.from('.li', {
      y: 40,
      opacity: 0,
      stagger: 0.2
    }, .5);

    tl.from('.footer_header', {
      duration: 1,
      y: 40,
      opacity: 0,
      stagger: 0.2
    }, 1);

  } else {
    menuOpen = false;
  }
});
closeBtn.addEventListener('click', () => {
  if(!nav.classList.contains('chendo')){
    nav.classList.remove('open');
    menuBtn.style.opacity = 1;
  } 
})