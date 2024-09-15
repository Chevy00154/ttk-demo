// sticky nav
const nav = document.querySelector("nav");
window.addEventListener("scroll", function() {
    nav.classList.toggle("sticky", window.scrollY > 10);
})

// hamburger menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

document.querySelectorAll('li').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
}))