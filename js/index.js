
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
    alert('Are you sure you want to leave?');
}
document.addEventListener('keydown', leavePage);

