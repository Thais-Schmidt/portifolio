//importando Express

const express = require('express');

//Variavel para ter acesso as funcionalidades do express

const app= express();

app.use(express.static(`${__dirname}/projetos`)); //todas as pastas (html, css, js) devem estar dentro da pasta principal (projetos)

//Para home.html

app.get(`/`, function (req,res) {
    res.sendFile(`${__dirname}/projetos/telas/html/home.html`)
})

//para tela de cadastro.html

app.get(`/cadastro`, function (req, res){
    res.sendFile(`${__dirname}//projetos/telas/html/cadastro.html`)
})

//para tela de contato.html

app.get(`/contato`, function (req, res){
    res.sendFile(`${__dirname}//projetos/telas/html/contato.html`)
})

//para tela de login.html

app.get(`/login`, function (req, res){
    res.sendFile(`${__dirname}//projetos/telas/html/login.html`)
})

//porta

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})