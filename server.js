// required dependencies
const express = require('express');
const drinks =require('./models/drinks');
// initialize the express application
const app = express();
// port
const port = 3000;
// mount our routes;
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
});
app.get('/drinks', (req, res) => {
    res.send(drinks)
});
// this tells node to listen for requests is running on: localhost:3000
app.listen(3000, () => {
    console.log('')
});