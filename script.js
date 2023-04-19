const mainMenu = document.querySelector('#myLinks');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.burger-menu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
  // mainMenu.style.display = 'block';
  mainMenu.style.left = '0';
  mainMenu.style.right = '0';
};
function close(){
  // mainMenu.style.display = 'none';
  mainMenu.style.left = '-100%';
  mainMenu.style.right = '100%';
};


let scrollpos = window.scrollY;
const navbar = document.querySelector(".navbar");
const scrollChange = 20;

const add_class_on_scroll = () => navbar.classList.add("scroll__navbar");
const remove_class_on_scroll = () => navbar.classList.remove("scroll__navbar");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
});