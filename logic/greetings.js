const greetings = () => {
    let inputName;
    let inputLanguage;
    let greetingCount = 0;
    //set the name
    const setFirstName = firstName => inputName = firstName;
    //validate the name 
    const validateName = () => {
        if (/\d/.test(inputName)) return "invalid input! Enter a valid name";
        if (/^[A-Z]+/.test(inputName)) return inputName;
        if (/[a-z]/.test(inputName)) return "Name should start with a capital letter";
    }
    //get the name or error msg
    const getFirstName = () => validateName();
    //set the language to greet the user
    const setLanguage = checkedLanguage => inputLanguage = checkedLanguage;
    //selecting the greeting phrase depending on the checked language
    const selectGreeting = () => {
        let typesOfGreetings = {
            "english": "Hello",
            "sepedi": "Dumela",
            "isixhosa": "Molo"
        }

        for (let greet in typesOfGreetings) {
            if (greet === inputLanguage) {
                return typesOfGreetings[greet];
            }
        }
    }
    //getting the greeting phrase
    const getTheGreeting = () => selectGreeting();
    //correct msg
    const correctMsg = () => `${getTheGreeting()}, ${getFirstName()}`;
    //set the greeting msg
    const setGreetingMsg = () => {
        //return msg or prompt the user
        if(getFirstName() === inputName) {
            return correctMsg();
        } else {
            return validateName();
        }
    }
    //get greeting msg
    const getGreetingMsg = () => setGreetingMsg();
    //set counter
    const setCounter = () => {
        return (getGreetingMsg() === correctMsg()) ? greetingCount++ : greetingCount;
    }
    //get greeting count
    const getCounter = () => setCounter();

    return {
        setFirstName,
        validateName,
        getFirstName,
        setLanguage,
        selectGreeting,
        selectGreeting,
        selectGreeting,
        getTheGreeting,
        correctMsg,
        setGreetingMsg,
        getGreetingMsg,
        setCounter, 
        getCounter,
    }
}

let person = greetings();

person.setFirstName("Unalo");
person.setLanguage("isixhosa");

person.setCounter();

person.setFirstName("Anthony");
person.setLanguage("isixhosa");

person.setCounter();
console.log(person.getCounter());
