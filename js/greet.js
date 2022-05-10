//reference for input field
const inputField = document.querySelector(".input-field");
//reference for the counter
const counterNum = document.querySelector(".the-number");
//reference to warning msg
const warningMsg = document.querySelector(".warning-msg");
const warningBlock = document.querySelector(".warning-block");
//reference to radio buttons
const checkRadioBtn = document.querySelectorAll(".language");
//reference for greet me button
const greetMeBtn = document.querySelector(".greet-btn");
//reference to display message
const msg = document.querySelector(".msg");
//reset counter button
const resetBtn = document.querySelector(".reset-btn");
//instance of greetings factory function
let greeting = greetings();
//instance of storage factory function
let dataStorage = storage();

//initializing counter to last stored value on localStorage
if(dataStorage.getData("counter") === null) {
    counterNum.innerHTML = 0;
} else {
    counterNum.innerHTML = dataStorage.getData("counter");
}

const displayText = () => {
    //get the input name
    greeting.setFirstName(inputField.value)
    //get the language checked, if not return error msg
    let language
    checkRadioBtn.forEach(lang => {
        if(lang.checked) {
           language = lang.value;
        }
    })
    if(language === undefined) return warningFunc(greeting.getGreetingPhrase())
    greeting.setLanguage(language);
    

    //output the greeting msg with the entered name
    //store the name/name to local storage
    //if there is an error display error message
    if(greeting.getFirstName() === inputField.value) {
        //display greeting message
        msg.textContent = greeting.getGreetingMsg();

        //store name/names to local storage
        greeting.setGreetedNamesList(); //applies to the counter
        dataStorage.setData("names", greeting.getGreetedNamesList())

        //increment counter if the name is been greeted the first time
        counterNum.innerHTML = greeting.getCounter();
        dataStorage.setData("counter", greeting.getCounter())
        
    } else {
       warningFunc(greeting.getGreetingMsg());
    }

    //Clearing the input field when greet me button is pressed
    inputField.value = "";
}

const warningFunc = (warnMsg) => {
    warningMsg.innerHTML = `${warnMsg}`;
    
    //display warning msg for 2 seconds
    warningMsg.style.visibility = "visible";
    warningBlock.style.visibility = "visible";
    setTimeout(() => {
        warningMsg.style.visibility = "hidden";
        warningBlock.style.visibility = "hidden";
    }, 2000)
}

//greet me event listener
greetMeBtn.addEventListener("click", displayText);

//reset counter event listener
resetBtn.addEventListener("click", () => {
    //reseting the counter and deleting the names greeted in the program
    greeting.resetGreetedNames()

    //removing counter from local storage
    localStorage.clear();

    //resetting the counter to zero
    counterNum.innerHTML = 0;
})
