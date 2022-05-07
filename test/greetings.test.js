
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
        it("should return 'Hello' if the language is english", () => {
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
})