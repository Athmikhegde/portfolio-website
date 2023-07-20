//toggle navbar toggle
let menuIcon= document.getElementById('menu-icon');
let nav= document.querySelector('.navbar');
menuIcon.onclick= () => {
    console.log('toggle navbar toggle')
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}





//sticky header
window.onscroll=() => {
   
    let header= document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);
    menuIcon.classList.remove('bx-x');
nav.classList.remove('active');

}

