"use strict";
class Animal {
    constructor(nome, idade, tipoAlimentacao, habitat) {
        this._nome = nome;
        this._idade = idade;
        this._tipoAlimentacao = tipoAlimentacao;
        this._habitat = habitat;
    }
    mover() {
        console.log(`${this._nome} está se movendo.`);
    }
    comer() {
        console.log(`${this._nome} está comendo.`);
    }
    dormir() {
        console.log(`${this._nome} está dormindo.`);
    }
    emitirSom() {
        console.log(`${this._nome} está fazendo um som.`);
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get tipoAlimentacao() {
        return this._tipoAlimentacao;
    }
    get habitat() {
        return this._habitat;
    }
}
class Cachorro extends Animal {
    constructor(nome, idade, tipoAlimentacao, habitat) {
        super(nome, idade, tipoAlimentacao, habitat);
    }
    emitirSom() {
        console.log(`${this._nome} faz: Au Au!`);
    }
    abanarRabo() {
        console.log(`${this._nome} está abanando o rabo.`);
    }
}
class Cavalo extends Animal {
    constructor(nome, idade, tipoAlimentacao, habitat) {
        super(nome, idade, tipoAlimentacao, habitat);
    }
    emitirSom() {
        console.log(`${this._nome} solta o relincho!`);
    }
    galope() {
        console.log(`${this.nome} está galopando!`);
    }
}
class Gato extends Animal {
    constructor(nome, idade, tipoAlimentacao, habitat) {
        super(nome, idade, tipoAlimentacao, habitat);
    }
    emitirSom() {
        console.log(`${this._nome} faz: miau!`);
    }
    arranhaMoveis() {
        console.log(`${this.nome} está arranhando todo o sofá!`);
    }
}
const cachorro = new Cachorro("Totó", 5, "carnívoro", "casa");
cachorro.mover();
cachorro.comer();
cachorro.emitirSom();
cachorro.abanarRabo();
const cavalo = new Cavalo("Pégasos", 3, "herbívoro", "campo");
cavalo.mover();
cavalo.comer();
cavalo.emitirSom();
cavalo.galope();
const gato = new Gato("Mimi", 6, "carnívoro", "casa");
gato.mover();
gato.comer();
gato.emitirSom();
gato.arranhaMoveis();
