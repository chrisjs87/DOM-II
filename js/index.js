
//nav functionality
function navHover(event){
    event.target.style.color = 'blue';
    event.target.style.border = '2px solid black';
    event.target.style.padding = '4px';
}
function navLeave(event){
    event.target.style.color = 'black';
    event.target.style.border = '0';
    event.target.style.padding = '0';
}
function navClick(event){
    event.target.style.color = 'purple';
}

const navH = document.querySelector('nav :nth-child(1)');
const navA = document.querySelector('nav :nth-child(2)');
const navB = document.querySelector('nav :nth-child(3)');
const navC = document.querySelector('nav :nth-child(4)');

navH.addEventListener('mouseenter', navHover);
navA.addEventListener('mouseenter', navHover);
navB.addEventListener('mouseenter', navHover);
navC.addEventListener('mouseenter', navHover);
navH.addEventListener('mouseleave', navLeave);
navA.addEventListener('mouseleave', navLeave);
navB.addEventListener('mouseleave', navLeave);
navC.addEventListener('mouseleave', navLeave);
navH.addEventListener('click', navClick);
navA.addEventListener('click', navClick);
navB.addEventListener('click', navClick);
navC.addEventListener('click', navClick);

//escape key event listener
function leavePage(event){
    if(event.key === 'Escape'){
        alert('Are you sure you want to leave?');
    }  
}
document.addEventListener('keydown', leavePage);

//load listener, alert user
function loadAlert(event){
    alert('The page has loaded');
}
window.addEventListener('load', loadAlert);

//double click event
function doubleClickAlert(event){
    alert(`You have double clicked the page`)
}
document.addEventListener('dblclick', doubleClickAlert);

//mousemove event
function movingMouseIntro(event){
    event.target.style.color = 'red';
    setTimeout(function(){
        event.target.style.color = 'black';
    }, 1);
}
const introText = document.querySelector('.intro');
introText.addEventListener('mousemove', movingMouseIntro);

//mouseover event
function mouseOverMidText(event){
    event.target.style.color = 'red';
    setTimeout(function(){
        event.target.style.color = 'black';
    }, 5000);
}
const midText = document.querySelector('.text-content');
midText.addEventListener('mouseover', mouseOverMidText);

//keyup event
document.addEventListener("keyup", event => {
    if (event.key === 'a') {
        alert('You found the secret key');
      }
});