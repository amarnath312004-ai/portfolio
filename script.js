// ==========================================
// MOBILE MENU
// ==========================================

const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {

    navbar.classList.toggle("active");

};

// Close menu when clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.onclick = () => {

        navbar.classList.remove("active");

    };

});

// ==========================================
// DARK MODE
// ==========================================

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.onclick = () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeToggle.innerHTML='<i class="fas fa-moon"></i>';

    }

};

// Load saved theme

window.onload = () => {

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark-mode");

        themeToggle.innerHTML='<i class="fas fa-sun"></i>';

    }

};

// ==========================================
// TYPING ANIMATION
// ==========================================

const words=[

"Artificial Intelligence & Data Science Student",

"Python Developer",

"Machine Learning Enthusiast",

"Computer Vision Developer",

"Full Stack Web Developer"

];

let wordIndex=0;

let charIndex=0;

let isDeleting=false;

const typing=document.querySelector(".typing");

function typeEffect(){

    const current=words[wordIndex];

    if(!isDeleting){

        typing.textContent=current.substring(0,charIndex++);

    }else{

        typing.textContent=current.substring(0,charIndex--);

    }

    let speed=120;

    if(isDeleting){

        speed=60;

    }

    if(!isDeleting && charIndex===current.length+1){

        speed=1500;

        isDeleting=true;

    }

    if(isDeleting && charIndex===0){

        isDeleting=false;

        wordIndex++;

        if(wordIndex===words.length){

            wordIndex=0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();

// ==========================================
// SCROLL TO TOP
// ==========================================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==========================================
// STICKY HEADER
// ==========================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="none";

    }

});
// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    "section, .project-card, .skill-card, .education-card, .certificate-card, .achievement-card, .internship-card"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// CONTACT FORM
// ==========================================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}


// ==========================================
// ACHIEVEMENT COUNTER
// ==========================================

const counters = document.querySelectorAll(".achievement-card h1");

const startCounter = () => {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        let count = 0;

        const speed = target / 60;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

startCounter();


// ==========================================
// IMAGE FADE-IN
// ==========================================

const images = document.querySelectorAll("img");

images.forEach((img) => {

    img.onload = () => {

        img.style.opacity = "1";

        img.style.transition = "0.6s";

    };

});


// ==========================================
// PAGE LOADER
// ==========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }



// ==========================================
// COPYRIGHT YEAR
// ==========================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML = `© ${year} Amarnath M. All Rights Reserved.`;

}


// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log("%cWelcome to Amarnath M Portfolio", "color:#00bcd4;font-size:18px;font-weight:bold;");
console.log("%cDesigned using HTML, CSS & JavaScript", "color:green;font-size:14px;");
