//references to elements
//variables
const moonBtn = document.querySelector(".moon");
const sunBtn = document.querySelector(".sun");
const theBody = document.querySelector("body");

const headerContent = document.querySelector(".header-content");
const headerH2 = document.querySelector(".header-content h2");

const upperContent = document.querySelector(".upper-content");

const lowerContent = document.querySelector(".lower-content");
const lowerH2 = document.querySelector(".msg");


/* night mode */
moonBtn.addEventListener("click", () => {
    //main background
    theBody.style.background = "#222";

    //sections backgrounds
    headerContent.classList.add("header-content-moon");
    lowerContent.classList.add("lower-content-moon");
    upperContent.classList.add("upper-content-moon");
    headerH2.style.color = "#222"
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
    lowerContent.classList.remove("lower-content-moon")
    headerH2.style.color = "#fff";
    lowerH2.style.color = "#fff";

    //display buttons on relevent mode
    moonBtn.style.display = "block";
    sunBtn.style.display = "none";
})