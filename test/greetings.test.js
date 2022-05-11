
describe("The greetings function", () => {
    describe("set validations", () => {
        it("should return the Name if the correct name has been entered", () => {
            let person = greetings();

            person.setFirstName("Anthony");

            assert.equal(person.getFirstName() , "Anthony");

        })

        it("should return the a name starting with a capital letter, followed by lower case characters", () => {
            let person = greetings();

            person.setFirstName("unalo");

            assert.equal(person.getFirstName() , "Unalo");

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

            assert.equal(language.getGreetingPhrase() , "Hello");
        })

        it("should return 'Dumela' if the checked language is sepedi", () => {
            let language = greetings();

            language.setLanguage("sepedi");

            assert.equal(language.getGreetingPhrase() , "Dumela");
        })

        it("should return 'Molo' if the checked language is isiXhosa ", () => {
            let language = greetings();

            language.setLanguage("isixhosa");

            assert.equal(language.getGreetingPhrase() , "Molo");
        })

        it("should return 'check language' if the is no language checked", () => {
            let language = greetings();

            language.setLanguage("")

            assert.equal(language.getGreetingPhrase(), "check language");
        })
    })

    describe("display message values", () => {
        it("should return 'Hello, Anthony' if checked language is 'english' and input name is 'Anthony'", () => {
            let message = greetings();

            message.setFirstName("Anthony");
            message.setLanguage("english");

            assert.equal(message.getGreetingMsg() , "Hello, Anthony");
        })
        

        it("should return 'Molo, Xholani' if checked language is 'isixhosa' and input name is 'Xholani'", () => {
            let message = greetings();

            message.setFirstName("Xholani");
            message.setLanguage("isixhosa");

            assert.equal(message.getGreetingMsg() , "Molo, Xholani");
        })

        it("should return 'Dumela, Lesetja' if checked language is 'sepedi' and input name is 'Lesetja'", () => {
            let message = greetings();

            message.setFirstName("Lesetja");
            message.setLanguage("sepedi");

            assert.equal(message.getGreetingMsg() , "Dumela, Lesetja");
        })

        it("should return error message prompting the user to input a valid name", () => {
            let message = greetings();

            message.setFirstName(5);
            message.setLanguage("english");

            assert.equal(message.getGreetingMsg() , "invalid input! Enter a valid name");
        })

        it("should greet with a capitalized name if the input name is in lower case, uppercase or mixed cases", () => {
            let message = greetings();

            message.setFirstName("anthony");
            message.setLanguage("english");

            assert.equal(message.getGreetingMsg() , "Hello, Anthony");
        })
    })

    describe("set greeted names", () => {

        it("should return all the names that have been greeted as a list", () => {
            let list = greetings();

            list.setFirstName("Yonela");
            list.setLanguage("isixhosa");

            list.setGreetedNamesList();

            list.setFirstName("Vuyo");
            list.setLanguage("sepedi");

            list.setGreetedNamesList();

            list.setFirstName("Dimakatso");
            list.setLanguage("isixhosa");

            list.setGreetedNamesList();

            list.setFirstName("Andre");
            list.setLanguage("sepedi");

            list.setGreetedNamesList();


            assert.deepEqual( list.getGreetedNamesList(), ['Yonela', 'Vuyo', 'Dimakatso', 'Andre']);
        })

        it("should return a list ['Anthony', 'John'] if 'Anthony' and 'John' have been greeted", () => {
            let list = greetings();

            list.setFirstName("Anthony");
            list.setLanguage("isixhosa");

            list.setGreetedNamesList();

            list.setFirstName("John");
            list.setLanguage("sepedi");

            list.setGreetedNamesList();

            assert.deepEqual( list.getGreetedNamesList(), ['Anthony', 'John']);
        })

        it("should store the name only when greeted for the first time, return ['Lebo', 'Thando'] if 'Lebo', 'Lebo', 'Lebo' and 'Thando' have been greeted", () => {
            let list = greetings();

            list.setFirstName("Lebo");
            list.setLanguage("english");

            list.setGreetedNamesList();

            list.setFirstName("Lebo");
            list.setLanguage("english");

            list.setGreetedNamesList();

            list.setFirstName("Lebo");
            list.setLanguage("english");

            list.setGreetedNamesList();

            list.setFirstName("Thando");
            list.setLanguage("sepedi");

            list.setGreetedNamesList();

            assert.deepEqual( list.getGreetedNamesList(), ['Lebo', 'Thando']);
        })
    })

    describe("counter", () => {
        it("should increase the counter with 2 when two people have been greeted", () => {
            let counter = greetings();

            counter.setFirstName("Naledi");
            counter.setLanguage("isixhosa");
            
            counter.setGreetedNamesList()

            counter.setFirstName("Anthony");
            counter.setLanguage("isixhosa");

            counter.setGreetedNamesList()

            assert.equal(counter.getCounter() , 2);
        })

        it("should not increase the counter if the name has previously been greeted, it will return 1 for a name that been greeted twice", () => {
            let counter = greetings();

            counter.setFirstName("Makho");
            counter.setLanguage("isixhosa");
            
            counter.setGreetedNamesList()

            counter.setFirstName("Makho");
            counter.setLanguage("isixhosa");

            counter.setGreetedNamesList()

            assert.equal(counter.getCounter() , 1);
        })
    })
})