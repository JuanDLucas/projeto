// express trabalha com serviços http
require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Olá, Davi Boyzinho 76");
});

app.get('/welcome', (req, res) => {
    const nome = req.query.nome || 'curioso';
    res.send(`Olá, ${nome}`);
});

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, ()=> {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
