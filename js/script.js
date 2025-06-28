// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

function animateProgress(className, endValue, color = "#3f396d") {
  let progressBar = document.querySelector(`.${className}`);
  let progressValue = document.querySelector(`.${className}-progress`);
  let currentValue = 0;
  let interval = setInterval(() => {
    currentValue++;
    progressValue.textContent = `${currentValue}%`;
    progressBar.style.background = `conic-gradient(${color} ${currentValue * 3.6}deg, #ededed 0deg)`;
    if (currentValue === endValue) clearInterval(interval);
  }, 30);
}

animateProgress("reactjs", 85);
animateProgress("sql", 80);
animateProgress("mlops", 75);
// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post").not("." + value).hide("1000");
      $(".post").filter("." + value).show("1000");
    }
    $(".filter-item").removeClass("active");
    $(this).addClass("active");
  });
});

// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Contact form AJAX
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  };
  fetch('https://my-portfolio-zcyu.onrender.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('formMessage').innerText = data.message;
    this.reset();
  })
  .catch(() => {
    document.getElementById('formMessage').innerText = "Failed to send!";
  });
});

const titles = [
  "Data Scientist",
  "ML Engineer",
  "Data Analyst",
  "AI Developer",
  "Business Analyst",
  "Python Developer",
];
let titleIndex = 0;
const animatedTitle = document.getElementById("animated-title");

function changeTitle() {
  titleIndex = (titleIndex + 1) % titles.length;
  animatedTitle.style.animation = "none";
  // Force reflow to restart animation
  void animatedTitle.offsetWidth;
  animatedTitle.textContent = titles[titleIndex];
  animatedTitle.style.animation = null;
}

setInterval(changeTitle, 2000); // Change every 2 seconds