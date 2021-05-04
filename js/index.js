
//nav hover color change
function navHover(event){
    event.target.style.color = 'blue';
}
function navLeave(event){
    event.target.style.color = 'black';
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


// const test = Array.from(document.querySelector('nav'));
// console.log(test);