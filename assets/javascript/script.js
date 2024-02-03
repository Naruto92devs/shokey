var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "1000px";
    } 
  });
}


let header = document.querySelector(".navbar")
window.onscroll = (e)=> {
   if (window.pageYOffset > 100) {
      header.style.backgroundColor= "#91949A";
    } else{
      header.style.backgroundColor = "transparent";
    }
 }


const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");
const navbar = document.querySelector(".left-side-menu");
const body = document.querySelector(".body");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

navbarLinks.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

navbar.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

body.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

var coll = document.getElementsByClassName("h3");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



var coll = document.getElementsByClassName("qn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const qna = document.querySelector(".qna");
const egg = document.querySelector(".egg");
const qna1 = document.querySelector(".qna1");
const egg1 = document.querySelector(".egg1");
const qna2 = document.querySelector(".qna2");
const egg2 = document.querySelector(".egg2");
const qna3 = document.querySelector(".qna3");
const egg3 = document.querySelector(".egg3");
const qna4 = document.querySelector(".qna4");
const egg4 = document.querySelector(".egg4");
const qna5 = document.querySelector(".qna5");
const egg5 = document.querySelector(".egg5");
const qna6 = document.querySelector(".qna6");
const egg6 = document.querySelector(".egg6");
const qna7 = document.querySelector(".qna7");
const egg7 = document.querySelector(".egg7");
const qna8 = document.querySelector(".qna8");
const egg8 = document.querySelector(".egg8");
const qna9 = document.querySelector(".qna9");
const egg9 = document.querySelector(".egg9");
const qna10 = document.querySelector(".qna10");
const egg10 = document.querySelector(".egg10");


qna.addEventListener("click", () => {
  egg.classList.toggle("active1");
});

qna1.addEventListener("click", () => {
  egg1.classList.toggle("active1");
});

qna2.addEventListener("click", () => {
  egg2.classList.toggle("active1");
});

qna3.addEventListener("click", () => {
  egg3.classList.toggle("active1");
});

qna4.addEventListener("click", () => {
  egg4.classList.toggle("active1");
});

qna5.addEventListener("click", () => {
  egg5.classList.toggle("active1");
});

qna6.addEventListener("click", () => {
  egg6.classList.toggle("active1");
});

qna7.addEventListener("click", () => {
  egg7.classList.toggle("active1");
});

qna8.addEventListener("click", () => {
  egg8.classList.toggle("active1");
});

qna9.addEventListener("click", () => {
  egg9.classList.toggle("active1");
});

qna10.addEventListener("click", () => {
  egg10.classList.toggle("active1");
});


// const navbarToggle1 = document.querySelector(".drop");
// const navbarLinks1 = document.querySelector(".dropdown-content");

// navbarToggle1.addEventListener("mouseover", () => {
//   navbarToggle1.classList.toggle("active");
//   navbarLinks1.classList.toggle("active");
// });



// var dropdowns = document.getElementsByClassName("dropdown");
// for (var i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.querySelector(".dropdown-content");
//     if (dropdownContent.style.display === "flex") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "flex";
//     }
//   });
// }

