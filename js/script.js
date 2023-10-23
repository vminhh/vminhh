//làm cho thanh header luôn hiển thị
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY >0);
}); 

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

// làm booking form và mờ trang web phía sau
var form = document.getElementById("form");
var overlay = document.getElementById("overlay");

function show(){
    form.style.display = "block";
    overlay.style.display = "block";
}
function hide(){
    form.style.display = "none";
    overlay.style.display = "none";
}

// nut next , prev
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

// nhập đủ mới nhấn được login (nhập gì cũng nhận)
function check(){
    var phone_email = document.getElementById("phone_email").value;
    var password = document.getElementById("password").value;
    var submit = document.getElementById("submit");

    if (phone_email == "" || password == ""){
        submit.disabled = true;
        return;
    }
        submit.disabled = false;
}