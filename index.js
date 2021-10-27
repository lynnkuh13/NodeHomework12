// Create an Express App
// with different routes (GET)
// send objects back
// home route (/) send back index.html

const express = require('express');
const axios = require('axios');

const app = express();

// app.METHOD('route, function)


app.get('/object', function(req, res) {
    let jsonObj = [
        {
            id: 123,
            name: "Nithin"
        },{
            id: 123,
            name: "Nithin"
        },
        {
            id: 123,
            name: "Nithin"
        },
        {
            id: 123,
            name: "Nithin"
        }
    ]
      res.send(jsonObj);
})

app.get('/message', function(req, res) {
 res.send({message: "HELLO WORLD"});

})

// using axios

app.get('/', function(req, res) {
    console.log("Express responses: ", res);

    axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(results => {
        console.log('results: ', results.data);
        res.send(results.data);
    })
    .catch(err => {
        console.log("You can write error messages here");
    })
})

// Send a file
app.get('/sendafile', function(req, res) {
    console.log("DIRNAME: ", __dirname);
    res.sendFile(__dirname + '/index.html' );
})

app.listen("3402", () => {
    console.log("App listening on port 3402");
})