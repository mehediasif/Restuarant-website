let chanda = window.pageYOffset;
let body = document.querySelector('body');
let nav = document.querySelector('.navbar');
const findUSbtn = document.querySelector("#findUS");
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
function seeLocations(){
    const locateUrl = `https://www.google.com/maps/search/kebab+Center+/@54.1417054,16.41044,8z`;
    window.open(locateUrl, '_blank');
}
findUSbtn.addEventListener("click", seeLocations);