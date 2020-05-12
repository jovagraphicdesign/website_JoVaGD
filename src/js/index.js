console.log('HALLO VAN WEBPACK!!');
import "../scss/main.scss";

const ctaTouch = document.querySelector('.cta_touch');
const ctaAbout = document.querySelector('.cta_about');
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

ctaAbout.addEventListener('mouseover', ()=>{
    ctaTouch.style.background='#3FBF9B';
    ctaAbout.style.background ='#4BF2B5'
});
ctaAbout.addEventListener('mouseout', ()=>{
    ctaTouch.style.background='#4BF2B5';
    ctaAbout.style.background ='#3fbf9b';
});
ctaTouch.addEventListener('mouseover', () =>{
    ctaTouch.style.background='#3FBF9B';
    ctaAbout.style.background='#4BF2B5';
});
ctaTouch.addEventListener('mouseout', () =>{
    ctaAbout.style.background='#3FBF9B';
    ctaTouch.style.background='#4BF2B5';
});

