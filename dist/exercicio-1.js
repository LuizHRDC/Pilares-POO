"use strict";
class Ingresso {
    constructor(valorEmReais) {
        this._valorEmReais = valorEmReais;
    }
}
class Normal extends Ingresso {
    constructor(valorEmReais) {
        super(valorEmReais);
    }
    imprimeValor() {
        console.log(`Ingresso Normal: R$ ${(this._valorEmReais).toFixed(2)}`);
    }
}
class VIP extends Ingresso {
    constructor(valorEmReais, adicionalVIP) {
        super(valorEmReais);
        this.adicionalVIP = adicionalVIP;
    }
    imprimeValor() {
        console.log(`Ingresso VIP: R$ ${(this._valorEmReais + this.adicionalVIP).toFixed(2)}`);
    }
}
class Camarote extends Ingresso {
    constructor(valorEmReais, adicionalvalorCamarote) {
        super(valorEmReais);
        this.adicionalvalorCamarote = adicionalvalorCamarote;
    }
    imprimeValor() {
        console.log(`Ingresso Camarote: R$ ${(this._valorEmReais + this.adicionalvalorCamarote).toFixed(2)}`);
    }
}
const ingressoNormal = new Normal(150);
ingressoNormal.imprimeValor();
const ingressoVIP = new VIP(150, 40);
ingressoVIP.imprimeValor();
const ingressoCamarote = new Camarote(150, 100);
ingressoCamarote.imprimeValor();
