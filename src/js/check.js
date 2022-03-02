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
// check 
getBrowser();
function getBrowser() {
    let ieCheck = /Edg/.test(navigator.userAgent);
  
       ieCheck
       ? document.querySelectorAll('input').forEach( input => input.setAttribute('autocomplete', 'nope'))
       : null;
}