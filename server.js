const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const ejs = require('ejs');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"))
app.set("view engine", "ejs");

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', function (req, res) {
    res.render("index");
});

app.use('*', function (req, res) {
    res.status(404).render("404");
});

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});