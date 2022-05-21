const getJson = require("./jsonGetter.js");
const removeFails = require("./removeFailedTransactions.js");
const exportJson = require("./jsonExport.js");
const stringsToNumbers = require("./stringToNumber.js");
const filterLegacyTransactions = require("./filterLegacyTransactions.js");

// read in json data
let data = getJson("./yieldyak_aave_avax.json");

// remove failed transactions
let dataWithoutFails = removeFails(data);

// filter for transaction type 2
let filteredData = filterLegacyTransactions(dataWithoutFails);

// convert string to number
let dataStringsToNumbers = stringsToNumbers(filteredData);

// export data to json file
exportJson("yieldyak_aave_avax_new.json", dataStringsToNumbers);