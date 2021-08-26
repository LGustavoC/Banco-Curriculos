// Importacao das bibliotecas
// Foi instalado o nodemoon, definido em package para reiniciar automaticamente o server
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

// Definindo porta, caso nao exista, recebe 5000
const port = process.env.PORT || 5000
//const URI = 'mongodb://GugaUser:password@cluster0.33ujj.mongodb.net/banco-curriculos.usuarios?retryWrites=true&w=majority';
const URI = 'mongodb://localhost:27017/banco-curriculos'

// Conectando ao banco de dados (MongoDB)
try {
    mongoose.connect( URI, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("MongoDB conectado com sucesso!"));    
    }catch (error) { 
    console.log("could not connect");    
}
/*mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err){
    if(err){
        console.log(err);
    }else {
        console.log('MongoDB conectado com sucesso!')
    }
});*/


// Quais dominios podem estar consumindo os dados da API
app.use(cors());
app.use(cookieParser());
// Receber e enviar JSON do front-end para o back-end 
app.use(express.json());

app.use(routes);

app.listen(port, function() {
    console.log(`Server running at: ${port}`)
});