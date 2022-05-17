// required dependencies
const express = require('express');

// initialize the express application
const app = express();

// mount our routes;
app.get('/', (req, res) => {
    res.send('')
});
// this tells node to listen for requests is running on: localhost:3000
app.listen(3000, () => {
    console.log('')
});