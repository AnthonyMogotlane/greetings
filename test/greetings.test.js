
describe("The greetings function", () => {
    describe("set validations", () => {
        it("should return the Name if the correct name has been entered", () => {
            let person = greetings();

            person.setFirstName("Anthony");

            assert.equal(person.getFirstName() , "Anthony");

        })

        it("should return 'Name should start with a capital letter' if the entered name start with lower case", () => {
            let person = greetings();

            person.setFirstName("unalo");

            assert.equal(person.getFirstName() , "Name should start with a capital letter");

        })

        it("should return 'invalid input! Enter a valid name' if a user insert a number", () => {
            let person = greetings();

            person.setFirstName("2pac");

            assert.equal(person.getFirstName() , "invalid input! Enter a valid name");
        })
    })

    describe("set language", () => {
        it("should return 'Hello' if the checked language is english", () => {
            let language = greetings();

            language.setLanguage("english");

            assert.equal(language.getTheGreeting() , "Hello");
        })

        it("should return 'Dumela' if the checked language is sepedi", () => {
            let language = greetings();

            language.setLanguage("sepedi");

            assert.equal(language.getTheGreeting() , "Dumela");
        })

        it("should return 'Molo' if the checked language is isiXhosa ", () => {
            let language = greetings();

            language.setLanguage("isixhosa");

            assert.equal(language.getTheGreeting() , "Molo");
        })
    })

    describe("display message values", () => {
        it("should return message with a greeting phrase of the language checked and the input name", () => {
            let message = greetings();

            message.setFirstName("Anthony");
            message.setLanguage("english");

            assert.equal(message.getGreetingMsg() , "Hello, Anthony");
        })

        it("should return error message prompting the user to input a valid name", () => {
            let message = greetings();

            message.setFirstName(5);
            message.setLanguage("english");

            assert.equal(message.getGreetingMsg() , "invalid input! Enter a valid name");
        })

        it("should return error message prompting the user to start their name with capital letter", () => {
            let message = greetings();

            message.setFirstName('anthony');
            message.setLanguage("english");

            assert.equal(message.getGreetingMsg() , "Name should start with a capital letter");
        })
    })

    describe("counter", () => {
        it("should increase the counter with 2 when two people have been greeted", () => {
            let counter = greetings();

            counter.setFirstName("Naledi");
            counter.setLanguage("isixhosa");

            counter.setCounter();

            counter.setFirstName("Lebo");
            counter.setLanguage("sepedi");

            counter.setCounter();

            assert.equal(counter.getCounter() , 2);
        })
    })
})