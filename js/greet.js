//reference for input field
const inputField = document.querySelector(".input-field");
//reference for the counter
const counterNum = document.querySelector(".greet-counter");
//reference to warning msg
const warningMsg = document.querySelector(".warning-msg")
//reference to radio buttons
const radioEnglish = document.querySelector("#english");
const radioSepedi = document.querySelector("#sepedi");
const radioIsixhosa = document.querySelector("#isixhosa");
//reference for greet me button
const greetMeBtn = document.querySelector(".greet-btn");
//reference to display message
const msg = document.querySelector(".lower-content");
//instance of greetings factory function
let greeting = greetings();

const displayText = () => {
    let language;
    (radioEnglish.checked) ? language = radioEnglish.value
    :(radioSepedi.checked) ? language = radioSepedi.value
    :(radioIsixhosa.checked) ? language = radioIsixhosa.value
    :alert("select a language");

    //receiving the name
    greeting.setFirstName(inputField.value)
    //get the checked language
    greeting.setLanguage(language);

    //output the greeting msg with the name
    if(greeting.getFirstName() === inputField.value) {
       
        msg.innerHTML = `   
        <img src="img/greet_msg_day.png" alt="">
        <h2 class="msg">${greeting.getGreetingMsg()}</h2>
        `;
    } else {
        warningMsg.innerHTML = greeting.getGreetingMsg();
        warningMsg.style.color = "red";
        warningMsg.style.background = "#fff";
        warningMsg.style.display = "block";
        setTimeout(() => {
            warningMsg.style.display = "none";
        }, 2000)
    }

    //increment counter

    if(inputField.value !== "" ) counterNum.innerHTML = greeting.getCounter();
    //Clearing the input field
    inputField.value = "";
}
greetMeBtn.addEventListener("click", displayText);
