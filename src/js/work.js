console.log('hi motherfucker for about');

import img1 from '../assets/woman.jpg';
import img2 from '../assets/woman2.jpg';


const images = [img1, img2];

const workList = document.querySelectorAll('.work-list>li>a');
const workImgContColor = "linear-gradient(0deg, rgba(19, 38, 64, 0.9), rgba(19, 38, 64, 0.9))";
const workContainer = document.querySelector(".img-container");
const category = document.querySelectorAll('.category');
console.log(workList);
console.log(images);

workList.forEach(
    function(listItem, index){
        console.log(workList);
        
        listItem.addEventListener('mouseover', (e) => {
            ProjectDetails(e.target.getAttribute('data-project'),index);
            category[index].style.maxWidth = "100%";
        });
        listItem.addEventListener('mouseout', () =>{
            workContainer.style.background = workImgContColor;
            // category[index].style.opacity = "0";
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