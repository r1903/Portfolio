/*Script to add "open" class to menubutton,nav,nav-menu and nav-item */

const menu = document.querySelector(".menu");
const menubtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".navItem");

let isOpen = false;

const addClass = () => { 
    if(!isOpen){
      menubtn.classList.add("open");
      nav.classList.add("open");
      navMenu.classList.add("open");
      navItem.forEach(item=> item.classList.add("open"));
      isOpen = true;  
    }else {
      menubtn.classList.remove("open"); 
      nav.classList.remove("open");
      navMenu.classList.remove("open");
      navItem.forEach(item=> item.classList.remove("open"));
      isOpen = false;
    }

}
menu.addEventListener("click", addClass);

