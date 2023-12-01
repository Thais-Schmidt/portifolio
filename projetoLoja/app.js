const express = require('express'); //Importando express
const { engine } = require('express-handlebars') //Importando express-handlebars

const cadastroController = require('./controller/cadastro.controller');
const carrinhoController = require('./controller/carrinho.controller');
const homeController = require('./controller/home.controller');
const lojaController = require('./controller/loja.controller');

const app = express(); //Cria uma instância de aplicativo Express
const port = 8000; //Criando uma porta

//BodyParser
const bodyParser = require('body-parser'); // Importando body-parser

// Configurando o BodyParser
app.use(bodyParser.json()); // Utilizando o analisador JSON
app.use(bodyParser.urlencoded({ extended: false })); // Utilizando o analisador de dados codificados na URL

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