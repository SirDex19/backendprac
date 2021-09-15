const express = require("express");
const cors = require("cors");
const actionItemRoute = require("./routes/actionitem-route");
// const ticketsTableRoute = require("./routes/tickets-table-route");

require("./config/database");

const app = express();

app.use(express.json());
// app.use(
//   express.urlencoded({
//     limit: "50mb",
//     extended: true,
//     parameterLimit: 50000,
//   })
// );

const whitelist = ["http://localhost:4200"];
const corsOptions = {
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Source",
    origin: (origin, callback) => {
        whitelist.indexOf(origin) !== -1 || !origin ?
            callback(null, true) :
            callback(new Error("Not allowed by CORS"));
    },
};

app.use(cors(corsOptions));

// app.use(cors({
//   methods: 'POST, GET, DELETE, PUT, PATCH',
//   origin: '*'
// }))


app.get('/', (req, res) => {
    res.send('hello')
})

app.use("/api/actionitems", actionItemRoute);
// app.use("/api/ticket", saveTicketRoute);


module.exports = app;