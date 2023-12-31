//SE ALGUEM MEXER SEM A AUTORZAÇAO DA >>>THATA<<< VAI LEVAR 3 COICES DE ADVERTENCIA

// import express from 'express';
// import { engine } from 'express-handlebars';

const express = require('express'); //Importando express
const { engine } = require('express-handlebars') //Importando express-handlebars

const cadastroController = require('./controller/cadastro.controller');

const funcionarioController = require('./controller/funcionario.controller');

const homeController = require('./controller/home.controller');

const loginController = require('./controller/login.controller');

const lojaController = require('./controller/loja.controller');

const app = express(); //Cria uma instância de aplicativo Express
const port = 8000; //Criando uma porta

//BodyParser

const bodyParser = require('body-parser'); // Importando body-parser

// Configurando o BodyParser

app.use(bodyParser.json()); // Utilizando o analisador JSON
app.use(bodyParser.urlencoded({ extended: false })); // Utilizando o analisador de dados codificados na URL

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/publico`));

app.engine('handlebars', engine({  //configurando Handlebars para ser usado com o express
    defaultLayout: 'main', // define o layout padrão para ser usado com os templates Handlebars. No exemplo, o layout padrão é chamado de 'main'.
    helpers: { //funçao que usamos para facilitar o uso de css em varios locais
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));

//Rotas

app.get('/', homeController.home);

app.get('/cadastro', cadastroController.cadastro);

app.get('/funcionario', funcionarioController.funcionario);

app.get('/login', loginController.login);

app.get('/loja', lojaController.loja);

//porta

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});


//SE ALGUEM MEXER SEM A AUTORZAÇAO DA >>>THATA<<< VAI LEVAR 3 COICES DE ADVERTENCIA