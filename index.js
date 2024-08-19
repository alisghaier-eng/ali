const arrows1=document.querySelectorAll(".arrow");
const movielist=document.querySelector(".movie-list");
arrows1.forEach((arrow,i)=>{
    arrow.addEventListner("click",()=>{
        console.log("you clicked"+i)})})