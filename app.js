let chanda = window.pageYOffset;
let body = document.querySelector('body');
let nav = document.querySelector('.navbar')
window.addEventListener("scroll", () =>{
    if(window.scrollY > 736){
        nav.style.backgroundColor= "black";

    }else{
        nav.style.backgroundColor = "transparent";
    }
});

let burger = document.querySelector('.toggle');
let navlist = document.querySelector(".navbar-list");

burger.addEventListener("click", () =>{
    console.log("clicked")
    navlist.classList.toggle('nav-active')
})
