const express = require('express');

const app = express();

app.get("/", (req,res) => {
    res.send("Hello World");
})

app.get("/user", (req,res) => {
    res.send({
        usuário:"José"
    });
})

app.delete("/user", (req,res) => {
    res.send({
        usuário:"José Deletado"
    });
})
app.listen(8080, ()=>{
    console.log("Servidor rodando.")
})