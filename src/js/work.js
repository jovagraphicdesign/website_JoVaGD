console.log('hi motherfucker for about');

import proImg1 from '../assets/projecten/v&v/fotowit.png';
import proImg2 from '../assets/projecten/som/som.png';
import proImg3 from '../assets/projecten/peterBoonen/fotowit.png';
import proImg4 from '../assets/projecten/sonjavangenechten/sonjavangenechten.png';
import proImg5 from '../assets/projecten/fdg.jpg';
import proImg6 from '../assets/projecten/anouschkaVanLeeuwen.jpg';
import proImg7 from '../assets/projecten/iscoms.jpg';

const images = [proImg1, proImg2, proImg3, proImg4, proImg5, proImg6, proImg7];

const workList = document.querySelectorAll('.work-list>li>a');
const workImgContColor = "linear-gradient(0deg, rgba(19, 38, 64, 0.8), rgba(19, 38, 64, 0.8))";
const workContainer = document.querySelector(".img-container");
const category = document.querySelectorAll('.category');
console.log(workList);
console.log(images);

workList.forEach(
    function(listItem, index){
        console.log(workList);
        
        listItem.addEventListener('mouseover', (e) => {
            ProjectDetails(e.target.getAttribute('data-project'),index);
            category[index].style.opacity = "1";
        });
        listItem.addEventListener('mouseout', () =>{
            workContainer.style.background = workImgContColor;
            category[index].style.opacity = "0";
        })
    }
);

function ProjectDetails (dataProject, index){
    
    const item = images[index];
    console.log(dataProject, item) ;
    //let urlStr = "Url"+dataProject;
    //console.log(urlStr);
    workContainer.style.background = `${workImgContColor}, url(${item})`;
    workContainer.style.backgroundSize = 'cover';
    
}