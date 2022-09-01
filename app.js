// le framework js qui permet la création de l'api
const express = require('express');
// l'ORM qui permet de communiquer avec la BDD
const mongoose = require('mongoose');
// permet d'être à l'écoute des requêtes entrantes et sortantes pour convertir au bon ormat json
const bodyParser = require('body-parser');

// création de l'application en elle même
const app = express();

// Database
mongoose.connect('mongodb://localhost/motivation',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.once('open', ()=>{

    console.log("connected to MongoDB database");
})

// Middleware
app.use(bodyParser.json())


// Routes
app.get('/',(req,res) =>{

    res.send("Hello world");
})

app.get('/about',(req,res) =>{

    res.send("Hello about");
})

const QuotesRoute = require('./routes/Quotes');

app.use('/quotes', QuotesRoute);

// Starting server
app.listen(3000, console.log("listening on port 3000"))