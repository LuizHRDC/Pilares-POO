abstract class Ingresso {
    protected _valorEmReais: number

    constructor(valorEmReais: number){
        this._valorEmReais = valorEmReais
    }

    abstract imprimeValor(): void;
}

class Normal extends Ingresso {

    constructor(valorEmReais: number){
        super(valorEmReais)
    }

    imprimeValor(): void {
        console.log(`Ingresso Normal: R$ ${(this._valorEmReais).toFixed(2)}`)
    }
}

class VIP extends Ingresso {
    protected adicionalVIP: number

    constructor(valorEmReais: number, adicionalVIP: number) {
        super(valorEmReais)
        this.adicionalVIP = adicionalVIP
    }

    imprimeValor(): void {
        console.log(`Ingresso VIP: R$ ${(this._valorEmReais + this.adicionalVIP).toFixed(2)}`)
    }
}

class Camarote extends Ingresso {
    protected adicionalvalorCamarote: number

    constructor(valorEmReais: number, adicionalvalorCamarote: number) {
        super(valorEmReais)
        this.adicionalvalorCamarote = adicionalvalorCamarote
    }

    imprimeValor(): void {
        console.log(`Ingresso Camarote: R$ ${(this._valorEmReais + this.adicionalvalorCamarote).toFixed(2)}`)
    }
}

const ingressoNormal = new Normal(150)
ingressoNormal.imprimeValor()

const ingressoVIP = new VIP(150, 40)
ingressoVIP.imprimeValor()

const ingressoCamarote = new Camarote(150, 100)
ingressoCamarote.imprimeValor()
