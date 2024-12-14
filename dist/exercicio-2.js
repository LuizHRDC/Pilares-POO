"use strict";
class Imovel {
    constructor(endereco, preco) {
        this._endereco = endereco;
        this._preco = preco;
    }
}
class Novo extends Imovel {
    constructor(endereco, preco, precoAdicional) {
        super(endereco, preco);
        this._precoAdicional = precoAdicional;
    }
    get precoAdicional() {
        return this._precoAdicional;
    }
    set precoAdicional(valor) {
        if (valor > 0) {
            this._precoAdicional = valor;
        }
        else {
            console.log("O valor adicional não poderá ser definido como menor ou igual a 0!");
        }
    }
    get precoFinal() {
        return this._preco + this._precoAdicional;
    }
}
class Velho extends Imovel {
    constructor(endereco, preco, desconto) {
        super(endereco, preco);
        this._desconto = desconto;
    }
    get desconto() {
        return this._desconto;
    }
    set desconto(valor) {
        if (valor > 0) {
            this._desconto = valor;
        }
        else {
            console.log("O desconto não poderá ser definido como menor ou igual a 0!");
        }
    }
    get precoFinal() {
        return this._preco - this._desconto;
    }
}
const imovelNovo1 = new Novo("Campo Bom", 80000, 15000);
console.log(imovelNovo1.precoAdicional);
imovelNovo1.precoAdicional = 20000;
console.log(imovelNovo1.precoAdicional);
console.log(`Valor do imóvel novo: R$ ${imovelNovo1.precoFinal.toFixed(2)}`);
const imovelVelho1 = new Velho("Novo Hamburgo", 75000, 12000);
console.log(imovelVelho1.desconto);
imovelVelho1.desconto = 12000;
console.log(imovelVelho1.desconto);
console.log(`Valor do imóvel velho: R$ ${imovelVelho1.precoFinal.toFixed(2)}`);
