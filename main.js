// Nav Menu on Mobile Screen

// selecting DOM Elements
const navLinks = document.getElementById('nav-link');
const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');

// Listening Events
closeBtn.addEventListener('click', closeMenu);
menuBtn.addEventListener('click', openMenu);

// close Menu
function closeMenu() {
    navLinks.style.right = '-200px'
};


// open Menu
function openMenu() {
    navLinks.style.right = '0';
};
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Leave Comment Section

