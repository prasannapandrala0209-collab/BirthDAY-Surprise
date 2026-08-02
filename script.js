// ==========================
// ELEMENTS
// ==========================

const welcomePage = document.getElementById("welcomePage");
const moodPage = document.getElementById("moodPage");
const happyPage = document.getElementById("happyPage");
const sadPage = document.getElementById("sadPage");

const startBtn = document.getElementById("startBtn");
const happyBtn = document.getElementById("happyBtn");
const sadBtn = document.getElementById("sadBtn");
const goHappy = document.getElementById("goHappy");

const music = document.getElementById("bgMusic");

// ==========================
// START BUTTON
// ==========================

startBtn.addEventListener("click", () => {

    welcomePage.classList.add("hidden");
    moodPage.classList.remove("hidden");

});

// ==========================
// HAPPY MOOD
// ==========================

happyBtn.addEventListener("click", () => {

    moodPage.classList.add("hidden");
    happyPage.classList.remove("hidden");

    music.play().catch(() => {});

});

// ==========================
// SAD MOOD
// ==========================

sadBtn.addEventListener("click", () => {

    moodPage.classList.add("hidden");
    sadPage.classList.remove("hidden");

});

// ==========================
// GO HAPPY BUTTON
// ==========================

goHappy.addEventListener("click", () => {

    sadPage.classList.add("hidden");
    happyPage.classList.remove("hidden");

    music.play().catch(() => {});

});

// ==========================
// PHOTO SLIDER
// ==========================

const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

setInterval(()=>{

    if(slides.length===0) return;

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

},3000);
// =====================================
// SIMPLE CONFETTI EFFECT
// =====================================

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.animationDelay =
            (Math.random() * 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 6000);

    }

}

// =====================================
// HAPPY BUTTON EFFECT
// =====================================

happyBtn.addEventListener("click", () => {

    createConfetti();

    if (navigator.vibrate) {

        navigator.vibrate([200,100,200]);

    }

});

goHappy.addEventListener("click", () => {

    createConfetti();

    if (navigator.vibrate) {

        navigator.vibrate([200,100,200]);

    }

});

// =====================================
// HEART RAIN
// =====================================

function heartRain(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="heart";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

}

setInterval(heartRain,700);

// =====================================
// WELCOME TYPING GLOW
// =====================================

const typing=document.querySelector(".typing");

setInterval(()=>{

typing.style.opacity=".7";

setTimeout(()=>{

typing.style.opacity="1";

},500);

},1000);

console.log("🎂 Birthday Surprise Ready ❤️");
function startBirthdayBoom(){

document.getElementById("countdown").classList.remove("hidden");

const text=document.getElementById("countText");

const words=[
"Loading Surprise...",
"3",
"2",
"1",
"💥 BOOM 💥"
];

let i=0;

const timer=setInterval(()=>{

i++;

if(i<words.length){

text.innerHTML=words[i];

}else{

clearInterval(timer);

document.getElementById("countdown").style.display="none";

document.getElementById("birthdayReveal").classList.remove("hidden");

}
const delays = [2000, 800, 800, 800, 500];

let i = 0;

function nextStep() {
    if (i < words.length) {
        text.innerHTML = words[i];
        const delay = delays[i];
        i++;
        setTimeout(nextStep, delay);
    } else {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("birthdayReveal").classList.remove("hidden");
    }
}

nextStep();

}
