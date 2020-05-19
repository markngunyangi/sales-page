
/*making the top div fixed while  scrolling*/
window.onscroll = function() {myFunction()};

var header = document.getElementById("myTop");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


/*nav-bar translation @media screen and (max-width: 768px) */
const lines = document.querySelector(".lines");
const navbar = document.querySelector(".nav-bar");
const links = document.querySelectorAll(".nav-links li");


lines.addEventListener("click", () => {
    navbar.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
    
    navbar.classList.toggle('toggle');
});

/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}*/