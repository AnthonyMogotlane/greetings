const storage = () => {
    //set the localStorage
    const setData = (key, value) => {
        //set the storage values, with relevant key and values
        localStorage.setItem(`${key}`, JSON.stringify(value))
    }
    //getting the stored data from localStorage depending on the key
    const getData = key => {
        return JSON.parse(localStorage.getItem(`${key}`));
    }

    return {
        setData,
        getData
    }
}

let checkData = storage();
checkData.setData("local", ["John", "Thabo", "Lebo"]);

