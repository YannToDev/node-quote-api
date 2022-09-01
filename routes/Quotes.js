// on instancie express
const express = require('express');

// on instancie le router d'express
const router = express.Router();

// on importe le model de quote
const Quote = require('../models/Quotes');

// ------------ ROUTES ------------ 

// get all routes
router.get('/', async(req,res) =>{

    const quotes = await Quote.find();
    res.json(quotes);
})

// create a new quote
router.post('/new', async(req,res) =>{

    const newQuote = new Quote(req.body);

    const saveQuote = await newQuote.save();

    res.json(saveQuote);
})

// Get a specific quote with is ID
router.get('/get/:id', async(req,res) =>{

    const q = await Quote.findById({_id: req.params.id});
    res.json(q);
})


// Delete quote
router.get('delete/:id', async(req,res) =>{

    const result = await Quote.findByIdAndDelete({_id:req.params.id});
})

module.exports = router;


// const quotes = await Quote.find() on recupère toutes les citations à la l'aide de la méthode find qui est utilisé sur le Model;

// const newQuote = new Quote(req.body) permet de créer une nouvelle instance de notre model Quote et qui prend en paramètre le body de la requete.
// const saveQuote = await newQuote.save(); permet de sauvegarder à proprement parlé la requête entrante
// res.json(saveQuote); affiche la réponse au format json.
