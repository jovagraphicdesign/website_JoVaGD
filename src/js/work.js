console.log('hi motherfucker for about');
const workList = document.querySelectorAll('.work-list>li');
console.log(workList);

workList.forEach(
    function(listItem){
        listItem.addEventListener('mouseover', (e) => {
            console.log(e.target.getAttribute('data-project'));
             
        })
    }
)