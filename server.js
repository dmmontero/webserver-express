const express = require('express');
const app = express();
//Heroku 
const port = process.env.PORT || 3000;
const hbs = require('hbs');
require('./hbs/helpers');

//Usar carpeta publica
app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Danny Mauricio Montero',
        año: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        año: new Date().getFullYear()
    })
});

app.get('/data', (req, res) => {
    res.send(`Hola from ${req.url}`)
});

app.listen(port, () => console.log(`Escuchando desde el puerto ${port}`))