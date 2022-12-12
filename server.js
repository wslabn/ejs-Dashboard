const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const ejs = require('ejs');

const os = require('os');

const si = require('systeminformation');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "./src/views"))
app.set("view engine", "ejs");


// define a root route
app.get('/', function (req, res) {
    res.render("index");
});

//get sysinfo
app.get('/getmem', function(req, res){
    si.memLayout(function(data){
        res.send(data)
        console.log(data);
    })
})

app.use('*', function (req, res) {
    res.status(404).render("404");
});

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});