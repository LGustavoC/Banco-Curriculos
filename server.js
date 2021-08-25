// Importacao das bibliotecas
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Definindo porta, caso nao exista, recebe 5000
const port = process.env.PORT || 5000

// Quais dominios podem estar consumindo os dados da API
app.use(cors());

app.use(cookieParser());

// Receber e enviar JSON do front-end para o back-end 
app.use(express.json());

app.get('/', function(req, res) {
    res.json({message: 'Hello world!'})
});

app.listen(port, function() {
    console.log(`Server running at: ${port}`)
});