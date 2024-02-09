const express = require('express');

const app = express();

app.get("/", (req,res) => {
    res.send("Hello World");
})

app.get("/user/:nome/sobrenome/:sobrenome", (req,res) => {
    res.send({
        nome : req.params.nome,
        sobrenome : req.params.sobrenome
    });
})

app.listen(8080, ()=>{
    console.log("Servidor rodando.")
})