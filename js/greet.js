//reference for input field
const inputField = document.querySelector(".input-field");
//reference for the counter
const counterNum = document.querySelector(".the-number");
//reference to warning msg
const warningMsg = document.querySelector(".warning-msg");
const warningBlock = document.querySelector(".warning-block");
//reference to counter
const greetCounterTwo = document.querySelector(".greet-counter i");
const theNumberTwo = document.querySelector(".the-number");
//reference to radio buttons
const checkRadioBtn = document.querySelectorAll(".language");
//reference for greet me button
const greetMeBtn = document.querySelector(".greet-btn");
//reference to display message
const lowerContainer = document.querySelector(".lower-container");
const msg = document.querySelector(".msg");
//reset counter button
const resetBtn = document.querySelector(".reset-btn");
//instance of greetings factory function
let greeting = greetings();
//instance of storage factory function
let dataStorage = storage();

//initializing counter to last stored value on localStorage
if (dataStorage.getData("counter") === null) {
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
        if (lang.checked) {
            language = lang.value;
        }
    })
    if (language === undefined) return warningFunc(greeting.getGreetingPhrase())
    greeting.setLanguage(language);

    //output the greeting msg with the entered name
    //store the name/name to local storage
    //if there is an error display error message
    if (greeting.getFirstName() === greeting.capitalize(inputField.value)) {
        //display greeting message
        //animate msg box and text
        lowerContainer.classList.add("animate__backInUp");
        setTimeout(() => { msg.classList.toggle("animate__pulse") }, 1500);
        //send msg to the screen
        lowerContainer.style.visibility = "visible";
        msg.textContent = greeting.getGreetingMsg();
        //remove msg after 35s
        setTimeout(() => {
            lowerContainer.classList.remove("animate__backInUp");
            msg.classList.remove("animate__pulse");
            lowerContainer.style.visibility = "hidden";
            msg.textContent.visibility = "hidden";
        }, 3500)

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

    //sign of counter clearance
    greetCounterTwo.classList.toggle("greet-counter-two");
    theNumberTwo.classList.toggle("the-number-one");
    theNumberTwo.innerHTML = "<i class='fas fa-check'></i>";
    setTimeout(() => {
        greetCounterTwo.classList.toggle("greet-counter-two");
        theNumberTwo.classList.toggle("the-number-one");
        theNumberTwo.innerHTML = 0;
    }, 1200)
})
