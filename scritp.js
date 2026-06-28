const menu = document.querySelector('.fa-bars');
const colse = document.querySelector('.fa-x');
const nav_ver = document.querySelector('.nav-ver')
const con_us = document.querySelector('.con-us');
const moving = document.querySelector('.moving')
const book =document.querySelector('.book');

const book_item =document.querySelector('.book-item');
const contac_item =document.querySelector('.contact-item')

menu.addEventListener('click',()=>{
    nav_ver.classList.add('active')
    menu.classList.remove('active')
});

colse.addEventListener('click',()=>{
    nav_ver.classList.remove('active');
    menu.classList.add('active')
});


window.addEventListener('resize',()=>{
    if (window.innerWidth > 800){
        nav_ver.classList.remove('active')
    }
});


window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 2000); // 2000 ملي ثانية = 2 ثانية
});

con_us.addEventListener('click',()=>{
    moving.style.transform='translateX(-100%)';
    book_item.classList.add('active')
    contac_item.classList.remove('active')

})
book.addEventListener('click', () => {
    moving.style.transform = 'translateX(0%)';
    book_item.classList.remove('active')
    contac_item.classList.add('active')

});






// window.addEventListener("load", () => {
//     document.getElementById("preloader").style.display = "none";
// });