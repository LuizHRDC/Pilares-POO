abstract class Animal {
    protected _nome: string
    protected _idade: number
    protected _tipoAlimentacao: string
    protected _habitat: string
    
    constructor(nome: string, idade: number, tipoAlimentacao: string, habitat: string) {
        this._nome = nome
        this._idade = idade
        this._tipoAlimentacao = tipoAlimentacao
        this._habitat = habitat
    }

    mover(): void {
        console.log(`${this._nome} está se movendo.`)
    }

    comer(): void {
        console.log(`${this._nome} está comendo.`)
    }

    dormir(): void {
        console.log(`${this._nome} está dormindo.`)
    }

    emitirSom(): void {
        console.log(`${this._nome} está fazendo um som.`)
    }

    get nome(): string {
        return this._nome
    }

    get idade(): number {
        return this._idade
    }

    get tipoAlimentacao(): string {
        return this._tipoAlimentacao
    }

    get habitat(): string {
        return this._habitat
    }
}

class Cachorro extends Animal {
    constructor(nome: string, idade: number, tipoAlimentacao: string, habitat: string) {
        super(nome, idade, tipoAlimentacao, habitat)
    }

    emitirSom(): void {
        console.log(`${this._nome} faz: Au Au!`)
    }

    abanarRabo(): void {
        console.log(`${this._nome} está abanando o rabo.`)
    }
}

class Cavalo extends Animal {
    constructor(nome: string, idade: number, tipoAlimentacao: string, habitat: string) {
        super(nome, idade, tipoAlimentacao, habitat)
    }

    emitirSom(): void {
        console.log(`${this._nome} solta o relincho!`)
    }

    galope(): void {
        console.log(`${this.nome} está galopando!`)
    }
}

class Gato extends Animal {
    constructor(nome: string, idade: number, tipoAlimentacao: string, habitat: string) {
        super(nome, idade, tipoAlimentacao, habitat)
    }

    emitirSom(): void {
        console.log(`${this._nome} faz: miau!`)
    }

    arranhaMoveis(): void {
        console.log(`${this.nome} está arranhando todo o sofá!`)
    }
}

const cachorro = new Cachorro("Totó", 5, "carnívoro", "casa")
cachorro.mover()
cachorro.comer()
cachorro.emitirSom()
cachorro.abanarRabo()

const cavalo = new Cavalo("Pégasos", 3, "herbívoro", "campo")
cavalo.mover()
cavalo.comer()
cavalo.emitirSom()
cavalo.galope()

const gato= new Gato("Mimi", 6, "carnívoro", "casa")
gato.mover()
gato.comer()
gato.emitirSom()
gato.arranhaMoveis()