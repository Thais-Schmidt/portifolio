// Funçao para não permitir caracteres especiais ao preencher o nome

const nomeInput = document.querySelector("#nome_cliente");

nomeInput.addEventListener("keypress", function(e) {

    if(!checandoCaracter(e)){
        e.preventDefault();
    }
});

function checandoCaracter(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const pattern = '[a-z A-Z]';

    if(caracter.match(pattern)){
        return true;
    }
}

// Funçao para permitir somente numeros ao preencher o telefone

const celularInput = document.querySelector("#tel_cliente");

celularInput.addEventListener("keypress", function(e) {

    if(!checandoNumero(e)){
        e.preventDefault();
    }
});

function checandoNumero(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(caracter.match(pattern)){
        return true;
    }
}

// Funçao para permitir somente numeros ao preencher o ddd

const dddInput = document.querySelector("#ddd");

dddInput.addEventListener("keypress", function(e) {

    if(!checandoDDD(e)){
        e.preventDefault();
    }
});

function checandoDDD(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(caracter.match(pattern)){
        return true;
    }
}

//Funçao para validar email

function validando(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Por favor, insira um email valido."
        text.style.color = "#ff0000";
        text.style.fontFamily = "sans-serif";
        text.style.fontWeight = "bold";
        text.style.fontSize = "11px";
    }

    if (email == "")
    {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}
