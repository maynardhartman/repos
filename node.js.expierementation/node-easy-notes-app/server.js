var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());


// Configuring the database
var dbConfig = require("./config/database.config.js");
var mongoose = require("mongoose");
var _url;  // the url we play with 
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
});



// define a simple route
app.get("/", (req, res) => {
    // In case the client uses lower case for methods
    req.method = req.method.toUpperCase();

    if ( req.method !== 'GET' || req.method !== 'POST' || req.method !== 'PUT' || req.methos !== "DELETE")
    {
        res.writeHead(501, {
            'Content-Type': 'text/plain'
        });
        return res.end( req.method + ' is not implemented by this server' );
}
    
    res.setHeader('Content-Type', 'application/json');
    res.json({ data: "done"});
});

// Require routes
require("./app/routes/note.routes.js")(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

