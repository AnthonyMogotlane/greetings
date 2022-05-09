const storage = () => {
    //variables
    //let theKey;
    // let theName;
    //set the localStorage
    const setStorage = (key, value) => {
        let container;
        //checking if the is a key of names in the storage
        if (localStorage.getItem(`${key}`) === null) {
            container = [];
        } else {
            container = JSON.parse(localStorage.getItem(`${key}`));
        }
        let theName = value;
        container.push(theName)

        localStorage.setItem(`${key}`, JSON.stringify(container))
    }
    //getting the stored name/names
    const getStorage = key => {
        return JSON.parse(localStorage.getItem(`${key}`));
    }

    return {
        setStorage,
        getStorage
    }
}
