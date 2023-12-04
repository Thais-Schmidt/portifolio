class Cliente{

    constructor(i){
        this.id = null;
        this.nome = i.nome;
        this.email = i.email;
        this.senha = i.senha;
    }

    create(){
        return `INSERT INTO contatos VALUES (default, '${this.nome}', '${this.email}', '${this.senha}');`
    }

    read(){
        return `SELECT * FROM contatos WHERE id='${i.id}';`
    }

    update(){
        return `UPDATE contatos SET nome='${i.nome}', senha='${i.senha}' WHERE id='${i.id}';`
    }

    delete(){
        return `DELETE FROM contatos WHERE id='${i.id}';`
    }

}

module.exports= Cliente ;