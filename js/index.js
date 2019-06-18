// Your code goes here
const nav = document.querySelector('header nav')
nav.addEventListener('click', event =>{
  const heading = document.querySelector('.logo-heading')
  
  if(event.target !== nav){
    heading.textContent = event.target.textContent
  }
}); 

const navColor = document.querySelector('header nav')
navColor.addEventListener('mouseover', event => {
    event.target.style.color = 'green'; 
    setTimeout(function(){
        event.target.style.color = "black"; 
    },1000); 
}, false); 

const headingReset = document.querySelector('.logo-heading')
headingReset.addEventListener('dblclick', event =>{
    headingReset.textContent = 'Fun Bus'
}); 

window.addEventListener('keydown', event =>{
    if(event.keyCode === 87){
        window.scrollBy(0, -400); 
    } 
}); 

window.addEventListener('keydown', event =>{
    if(event.keyCode === 83){
        window.scrollBy(0, 400); 
    }

}); 