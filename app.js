const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
console.log(process.env);
const port = process.env.PORT

// ! handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Luis Perdomo',
    titulo: 'curso de node'
  });
});

app.get('/generics', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
    res.render('generics', {
        nombre: 'Luis Perdomo',
        titulo: 'curso de node'
    });
});

app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
    res.render('elements', {
        nombre: 'Luis Perdomo',
        titulo: 'curso de node'
    });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Running app on port ${port}`);
  })

// app.listen(8080)