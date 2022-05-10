//references to elements
//variables
const moonBtn = document.querySelector(".moon");
const sunBtn = document.querySelector(".sun");
const theBody = document.querySelector("body");

const headerContent = document.querySelector(".header-content");
const headerH2 = document.querySelector(".header-content h2");

const upperContent = document.querySelector(".upper-content");
const greetCounter = document.querySelector(".greet-counter i");
const theNumber = document.querySelector(".the-number");
const radioLabel = document.querySelectorAll(".radio-label");


const lowerContent = document.querySelector(".lower-content");
const lowerH2 = document.querySelector(".msg");


/* night mode */
moonBtn.addEventListener("click", () => {
    //main background
    theBody.style.background = "#222";

    //sections backgrounds and content
    headerContent.classList.add("header-content-moon");
    headerH2.style.color = "#222"

    upperContent.classList.add("upper-content-moon");
    greetCounter.style.color = "#222";
    theNumber.style.color = "#fff";
    radioLabel.forEach(label => label.style.color = "#222");

    lowerContent.classList.add("lower-content-moon");
    lowerH2.style.color = "#222"


    //display buttons on relevent mode
    moonBtn.style.display = "none";
    sunBtn.style.display = "block";
})

/* night mode */
sunBtn.addEventListener("click", () => {
    //main background
    theBody.style.background = "#fff";

    //sections backgrounds
    headerContent.classList.remove("header-content-moon");
    headerH2.style.color = "#fff";

    upperContent.classList.remove("upper-content-moon");
    greetCounter.style.color = "#fff";
    theNumber.style.color = "#222";
    radioLabel.forEach(label => label.style.color = "#fff");

    lowerContent.classList.remove("lower-content-moon")
    lowerH2.style.color = "#fff";

    //display buttons on relevent mode
    moonBtn.style.display = "block";
    sunBtn.style.display = "none";
})