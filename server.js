// required dependencies
const express = require('express');
const drinks =require('./models/drinks');
// this is the function to pass all arrays through for capitalizing first letter, will work for all arrays.
function capitalizeWords(arr) {
    return arr.map(element => {
        // make sure to reassign the variable to this new to uppcase function.
        element.name = element.name.charAt(0).toUpperCase() + element.name.substring(1).toLowerCase();
        return
    });
}

capitalizeWords(drinks);
// drinks = capitalizeWords(drinks)
// console.log(capitalizeWords(drinks));

// initialize the express application
const app = express();

// port
const port = 3000;

// mount our routes;
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
});
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', { 'allDrinks': drinks })
});
app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
});
app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.indexOfDrinksArray]
    });
});
// this tells node to listen for requests is running on: localhost:3000
app.listen(3000, () => {
    console.log('')
});