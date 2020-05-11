console.log('HALLO VAN WEBPACK!!');
import "../scss/main.scss";

const MenuBtn  = document.querySelector('.toggleIcon');
const nav = document.querySelector('.menu_overlay');
let menuOpen = false;

MenuBtn.addEventListener('click', ()=>{
    console.log('clicked');
    if(!menuOpen){
        MenuBtn.classList.add('open');
        nav.classList.add('active');
        menuOpen = true;
    }else{
        MenuBtn.classList.remove('open');
        nav.classList.remove('active');
        menuOpen = false;
    }
    //nav.classList.toggle("active");
});
