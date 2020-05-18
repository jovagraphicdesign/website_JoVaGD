console.log('hi motherfucker for about');
const workList = document.querySelectorAll('.work-list>li>a');
const workImgContColor = "linear-gradient(0deg, rgba(19, 38, 64, 0.7), rgba(19, 38, 64, 0.7))";
const workContainer = document.querySelector(".img-container");
const Urlproject_1 = "../assets/woman.jpg"
const red = "red"
console.log(workList);

workList.forEach(
    function(listItem, index){
        console.log(workList);
        
        listItem.addEventListener('mouseover', (e) => {
            ProjectDetails(e.target.getAttribute('data-project'),index);
        });
        listItem.addEventListener('mouseout', () =>{
            workContainer.style.background = workImgContColor;
        })
    }
);

function ProjectDetails (dataProject, index){
    
    let item = index +1
    console.log(dataProject, item) ;
    //let urlStr = "Url"+dataProject;
    //console.log(urlStr);
    workContainer.style.background = `${workImgContColor}, url(${Urlproject_1})`;
    
}