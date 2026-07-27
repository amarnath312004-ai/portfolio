// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ================================
// DARK / LIGHT MODE
// ================================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

// ================================
// TYPING ANIMATION
// ================================

const words = [
    "AI & Data Science Student",
    "Python Developer",
    "Web Developer",
    "Machine Learning Enthusiast",
    "Software Engineer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0, letterIndex);

        letterIndex++;

        if(letterIndex > current.length){
            deleting = true;
            setTimeout(typeEffect,1500);
            return;
        }

    }

    else{

        typing.textContent = current.substring(0, letterIndex);

        letterIndex--;

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();

// ================================
// SCROLL TO TOP BUTTON
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }

    });

});

// ================================
// FADE IN ANIMATION ON SCROLL
// ================================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});

// ================================
// CONTACT FORM
// ================================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});