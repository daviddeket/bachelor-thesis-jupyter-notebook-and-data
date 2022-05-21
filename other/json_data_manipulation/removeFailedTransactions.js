function removeFails(data) {
    try {
        // loop and check success
        let dataWithoutFails = [];
        for (let i = 0; i < data.length; i++) {
            if (!data[i]["status"].includes("Fail")) {
                dataWithoutFails.push(data[i]);
            }
        }
        return dataWithoutFails;
    } catch(err) {
        console.log(err);
    }
}

module.exports = removeFails;