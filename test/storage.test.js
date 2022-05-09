describe("The storage function", () => {
    it("Should return a list of greeted names", () => {
        let storedNames = storage();

        storedNames.setData("local", [ "Cara", "Kamva", "Unalo", "Anthony"]);

        assert.deepEqual(storedNames.getData("local"), [ "Cara", "Kamva", "Unalo", "Anthony"]);
    })

    it("Should return the total count of the names that have been greeted", () => {
        
        let storedNames = storage();

        storedNames.setData("count", 2);

        assert.equal(storedNames.getData("count"), 2);
    })
})