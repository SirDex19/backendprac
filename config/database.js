const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect('mongodb://localhost:27017/actionitem-database', (err) => {
    !err
        ?
        console.log("Connection succeeded.") :
        console.log("Error in connection: " + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;