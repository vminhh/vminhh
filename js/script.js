//làm cho thanh hiện bg trắng khi cuộn trang
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY >0);
}); 

//nút Book 
var form = document.getElementById("form");
var overlay = document.getElementById("overlay");

function showForm(){
    form.style.display = "block";
    overlay.style.display = "block";
}
function hideForm(){
    form.style.display = "none";
    overlay.style.display = "none";
}


// nut 3 soc
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

// next , prev comment
let slides = document.querySelectorAll('.slider-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index +1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}