/*-----------------------------------------------------------------------------------
    Name: Moon Site
    Theme URI: @chendito
    Description: Web Site - Portfolio - Chendo
    Author: @chendito - chendo : developer and web designer
    Author URI: http://chendo.io - https://chendito.com
    Github: https://github.com/chendito
    Youtube: https://youtube.com/chendito

//   Important:
//   Background images and planets taken from frontend mentor open source project :)
-----------------------------------------------------------------------------------*/

const contact = document.querySelector('.container_luna');
const submit = document.querySelector('#submit');
const media = '(max-width: 575px)';
const mediaState = window.matchMedia(media);
const a = document.querySelector('.navigation a:nth-child(2)');

if(contact){
    contact.addEventListener('click', () => {
        window.location.href = 'contact.php';
    })
}
if(submit){
    submit.addEventListener('click', () => {
        alert('Have a nice day!');
    })
}
window.addEventListener('load', () => {
    loaded()
});
function loaded() {
    if(mediaState.matches) {
        a.innerHTML = `<i class="fa fa-moon"></i>`;
    } else {
        a.innerHTML = `<i class="fa fa-moon"></i>Moon`;
    }
}
window.addEventListener('resize', () => {
    loaded()
});


