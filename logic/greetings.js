const greetings = () => {
    let inputName;
    //set the name
    const setFirstName = firstName => {
        return inputName = firstName;
    }
    //validate the name 
    const validateName = () => {
        if(/\d/.test(inputName)) return "invalid input! Enter a valid name";
        if(/^[A-Z]+/.test(inputName)) return inputName;
        if(/[a-z]/.test(inputName)) return "Name should start with a capital letter";
    }
    //get the name or msg
    const getFirstName = () => {
        return validateName();
    }

    return {
        setFirstName,
        validateName,
        getFirstName
    }
}

let person = greetings();

person.setFirstName("Anthony");

console.log(person.getFirstName());
