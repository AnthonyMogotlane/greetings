//reference for input field
const inputField = document.querySelector(".input-field");
//reference for the counter
const counterNum = document.querySelector(".the-number");
//reference to warning msg
const warningMsg = document.querySelector(".warning-msg")
//reference to radio buttons
const radioEnglish = document.querySelector("#english");
const radioSepedi = document.querySelector("#sepedi");
const radioIsixhosa = document.querySelector("#isixhosa");
//reference for greet me button
const greetMeBtn = document.querySelector(".greet-btn");
//reference to display message
const msg = document.querySelector(".msg");
//reset counter button
const resetBtn = document.querySelector(".reset-btn");
//instance of greetings factory function
let greeting = greetings();
//instance of storage factory function
let namesGreeted = storage();//REMOVE

//LOCAL STORAGE
//initiating the local storage for counter
if(localStorage.getItem("count") === null) {
    localStorage.setItem("count", counterNum.innerHTML);
    counterNum.innerHTML = localStorage.getItem("count");
} else {
    counterNum.innerHTML = Number(localStorage.getItem("count"));
    localStorage.setItem("count", counterNum.innerHTML)
}
//=================================================================

const displayText = () => {
    //Checking if the name is there or not
    let arr = [];
    if(localStorage.getItem("names") === null) {
        arr = [];
    } else {
        arr = namesGreeted.getStorage("names");
    }
    for(let el of arr) {
        console.log(el);
    }   
    
    //get the language checked - to be moved to factory function
    let language;
    (radioEnglish.checked) ? language = radioEnglish.value
    :(radioSepedi.checked) ? language = radioSepedi.value
    :(radioIsixhosa.checked) ? language = radioIsixhosa.value
    :alert("select a language");
    //======================================================
    //get the input name
    greeting.setFirstName(inputField.value)
    //get the language checked
    greeting.setLanguage(language);

    //output the greeting msg with the input name then store the name to local storage, and if the is an error display error message
    if(greeting.getFirstName() === inputField.value) {
        //greet the user with the correct name
        msg.textContent = greeting.getGreetingMsg();

        //if name is correct store to local storage
        namesGreeted.setStorage("names", inputField.value);//MODIFYY

        //increment counter if the name is been greeted the first time
        //counterNum.innerHTML = greeting.getCounter();

        //incrementing count in the local storage
        counterNum.innerHTML = Number(localStorage.getItem("count")) + 1;
        localStorage.setItem("count", counterNum.innerHTML)
    } else {
        warningMsg.innerHTML = `<i class="fas fa-exclamation-triangle" style="color: red"></i> ${greeting.getGreetingMsg()}`;
        //display warning msg for 2 seconds
        warningMsg.style.display = "block";
        setTimeout(() => {
            warningMsg.style.display = "none";
        }, 2000)
    }

   

   

    //Clearing the input field when greet me button is pressed
    inputField.value = "";
}

//greet me event listener
greetMeBtn.addEventListener("click", displayText);

//reset counter event listener
resetBtn.addEventListener("click", () => {

    //removing counter from local storage
    localStorage.clear();

    //reseting the counter to zero
    counterNum.innerHTML = 0;
})
