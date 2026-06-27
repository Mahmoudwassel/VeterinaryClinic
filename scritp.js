const menu = document.querySelector('.fa-bars');
const colse = document.querySelector('.fa-x');
const nav_ver = document.querySelector('.nav-ver')

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