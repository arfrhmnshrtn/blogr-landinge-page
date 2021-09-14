const overflow = document.querySelectorAll('.home .navbar .nav ul li .overflow');
const listMenu = document.querySelectorAll('.home .navbar .nav ul .list .link');
const humbergerMenu = document.querySelector('.home .navbar .humberger-menu');
const list = document.querySelector('.home .navbar .nav');
// console.log(list);

for (let i = 0; i < listMenu.length; i++) {
    listMenu[i].addEventListener('click', ()=> {
        overflow[i].classList.toggle('active');
    });
}

humbergerMenu.addEventListener('click', ()=> {
    list.classList.toggle('active');
});

