// File Name:  server.js
//

// Import express
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Initialize
let app = express();

app.use(bodyParser.urlencoded ({ 
    extended: true,
    useNewUrlParser: true 
}));

app.use(bodyParser.json());

// mongoose options
// const options = {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: true,
//   }

// Connect to mongoose 
mongoose.connect('mongodb://127.0.0.1:27017/CRUDServer', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
});
var db = mongoose.connection;

// Import routes
let apiRoutes = require("./api-routes")

// Use Api routes in the App
app.use('/api', apiRoutes)

// server port
var port = process.env.PORT || 3000;

// Send default message
app.get('/', (req, res) => res.send('Hello.  Standard CRUD Server'));

// Launch and listen on port
app.listen(port, function () {
    console.log('Running CRUD Server on port ' + port);
});