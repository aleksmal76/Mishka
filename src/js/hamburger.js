'use strict'

var buttonMenu = document.getElementById("buttonMenu");
var menu = document.getElementById("menuList");

//var hamburgerBtnClosed = 'hamburger - btn closed';/////
var closeButton = 'hamburger-btn closed';///
var openButton = 'hamburger-btn opened';//

var menuListClosed = 'menu-top__list closed';
var menuListOpened = 'menu-top__list opened';

buttonMenu.onclick = function (e) {
  if (buttonMenu.className == closeButton) {
    buttonMenu.className = openButton;
    menu.className = menuListOpened;

  } else if (buttonMenu.className == openButton) {
    buttonMenu.className = closeButton;
   menu.className = menuListClosed;
  }
}








//var iconlose = document.getElementsByClassName('openBtn');
//var iconOpen=document.getElementsByClassName('closeBtn');

//var iconOpen = document.getElementById("openButton");
//var iconClose = document.getElementById("closeButton");





//buttonMenu.addEventListener("click", function (e) {
//(menu.classList.toggle("open"));

  //if (e) {
  //(iconClose.style.display = 'block');
   // return (iconOpen.style.display = 'none');
  //}
 //else {
    //(iconOpen.style.display = 'block');
   // return (iconClose.style.display = 'none');
  //}

//});


