const menu = document.querySelector(".menu");
const nav__content = document.querySelector(".nav__content");

menu.addEventListener('click', () => {
    nav__content.classList.toggle("menu__visible");
})


