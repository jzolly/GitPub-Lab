// required dependencies
const express = require('express');
const drinks =require('./models/drinks');
const food = require('./models/food');
// this is the function to pass all arrays through for capitalizing first letter, will work for all arrays.
function capitalizeWords(arr) {
    return arr.map(element => {
        // make sure to reassign the variable to this new to uppcase function.
        element.name = element.name.charAt(0).toUpperCase() + element.name.substring(1).toLowerCase();
        return
    });
}

capitalizeWords(drinks);
// console.log(capitalizeWords(food));

// initialize the express application
const app = express();

// port
const port = 3000;

// mount our routes; Home
app.get('/', (req, res) => {
    res.render('gitpub_index.ejs')
});
// Drinks Routes
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', { 'drinks': drinks })
});

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id]
    });
});
// Food Routes
app.get('/food', (req, res) => {
    res.render('food_index.ejs', { 'food': food })
});

app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id]
    });
});

// this tells node to listen for requests is running on: localhost:3000
app.listen(3000, () => {
    console.log('Noms')
});