describe("The storage function", () => {
    it("should return the stored name, after a name has been entered", () => {
        localStorage.clear();
        let storedNames = storage();

        storedNames.setStorage("names","Anthony");
        assert.equal(storedNames.getStorage(), "Anthony");
    })
    
    it("should return an array of two names, when two names have been entered", () => {
        localStorage.clear();
        let storedNames = storage();


        storedNames.setStorage("test","Anthony");
        storedNames.setStorage("test","Lebo");

        assert.equal(storedNames.getStorage(), ["Anthony", "Lebo"]);
    })
})