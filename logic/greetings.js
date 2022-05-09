const greetings = () => {
    //variables
    let inputName;
    let inputLanguage;
    let namesGreeted = [];
    //set the name
    const setFirstName = firstName => inputName = firstName;
    //validate the name 
    const validateName = () => {
        if(inputName.length === 0) return "Enter your name";
        if (/\s|\W|\d/.test(inputName)) return "invalid input! Enter a valid name";
        if (/^[A-Z]+/.test(inputName)) return inputName;
        if (/[a-z]/.test(inputName)) return "Name should start with a capital letter";
    }
    //get the name or error msg
    const getFirstName = () => validateName();
    //set the language to greet the user
    const setLanguage = checkedLanguage => inputLanguage = checkedLanguage;
    //selecting the greeting phrase depending on the checked language
    const selectGreetingPhrase = () => {
        let greetingPhrase = {
            "english": "Hello",
            "sepedi": "Dumela",
            "isixhosa": "Molo"
        }

        if(inputLanguage.length === 0) return "check language";

        let checkedLang;
        for (let lang in greetingPhrase) {
            if (lang === inputLanguage) {
                checkedLang = greetingPhrase[lang];
            }
        }
        return checkedLang;
    }
    //getting the greeting phrase
    const getGreetingPhrase = () => selectGreetingPhrase();
    //correct msg
    const correctMsg = () => `${getGreetingPhrase  ()}, ${getFirstName()}`;
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
    //store the greeted name in namesGreeted variable
    const setGreetedNamesList = () => {
        if(getGreetingMsg().length > 0 && !namesGreeted.includes(getFirstName())) {
            namesGreeted.push(getFirstName());
        }
    }
    //get list of greeted names
    const getGreetedNamesList = () => namesGreeted;

    //set counter
    const setCounter = () => {
        return getGreetedNamesList().length;
    }
    //get greeting count
    const getCounter = () => setCounter();

    return {
        setFirstName,
        validateName,
        getFirstName,
        setLanguage,
        selectGreetingPhrase,
        getGreetingPhrase  ,
        correctMsg,
        setGreetingMsg,
        getGreetingMsg,
        setGreetedNamesList,
        getGreetedNamesList,
        setCounter, 
        getCounter,
    }
}

let test = greetings();

test.setFirstName("Lebo");
test.setLanguage("sepedi");

test.setGreetedNamesList();

test.setFirstName("John");
test.setLanguage("sepedi");

test.setGreetedNamesList();

test.setFirstName("Anthony");
test.setLanguage("sepedi");

console.log(test.getCounter());
