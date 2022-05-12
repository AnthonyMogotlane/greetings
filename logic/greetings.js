const greetings = () => {
    //variables
    let inputName;
    let inputLanguage;
    let namesGreeted = [];

    //set the name
    const setFirstName = firstName => inputName = firstName;
    //capitalizing the name
    const capitalize = (thisName) => {
        return (thisName.toString().charAt(0).toUpperCase() + thisName.toString().slice(1).toLowerCase());
    }
    //validate the name
    const validateName = () => {
        if (capitalize(inputName).length === 0) return "Enter your name";
        if (/\s|\W|\d/.test(capitalize(inputName))) return "invalid input! Enter a valid name";
        if (/^[A-Z]+/.test(capitalize(inputName))) return capitalize(inputName);
        if (/[a-z]/.test(capitalize(inputName))) return capitalize(capitalize(inputName));
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

        let checkedLang = "check language";
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
    const correctMsg = () => `${getGreetingPhrase()}, ${getFirstName()}`;
    //set the greeting msg
    const setGreetingMsg = () => {
        //return msg or prompt the user
        if (getFirstName() === capitalize(inputName)) {
            return correctMsg();
        } else {
            return validateName();
        }
    }
    //get greeting msg
    const getGreetingMsg = () => setGreetingMsg();
    //store the greeted name in namesGreeted variable
    const setGreetedNamesList = () => {
        if (getGreetingMsg().length > 0 && !namesGreeted.includes(getFirstName())) {
            namesGreeted.push(getFirstName());
        }
    }
    //get list of greeted names
    const getGreetedNamesList = () => namesGreeted;
    //reset namesGreed
    const resetGreetedNames = () => namesGreeted = [];
    //set counter
    const setCounter = () => {
        return getGreetedNamesList().length;
    }
    //get greeting count
    const getCounter = () => setCounter();

    return {
        setFirstName,
        capitalize,
        validateName,
        getFirstName,
        setLanguage,
        selectGreetingPhrase,
        getGreetingPhrase,
        correctMsg,
        setGreetingMsg,
        getGreetingMsg,
        setGreetedNamesList,
        getGreetedNamesList,
        resetGreetedNames,
        setCounter,
        getCounter,
        namesGreeted
    }
}
