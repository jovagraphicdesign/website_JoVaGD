const ctaTouch = document.querySelector('.cta_touch');
const ctaAbout = document.querySelector('.cta_about');
let day = document.querySelector('.day');
let month = document.querySelector('.month');


let date =  new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthIndex = (date.getMonth()-1);




 
ctaAbout.addEventListener('mouseover', ()=>{
    ctaTouch.style.background='#3FBF9B';
    ctaAbout.style.background ='#4BF2B5';
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

day.innerHTML = date.getDate();
month.innerHTML = months[monthIndex]