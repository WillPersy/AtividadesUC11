//Cadastro peças

let numeroPeca = 10
let pesoPeca = 100
let nomePeca = "Difusor"

if(numeroPeca >= 10) {
    console.log("Impossível cadastrar, número de peças excedido.")

}
else{
    console.log("Podemos seguir com o cadastro.")
}

if(pesoPeca > 100) {
    console.log("Podemos cadastrar.")

}
else{
    console.log("Não podemos seguir com o cadastro, peso insuficiente.")
}

if(nomePeca.length > 3) {
    console.log("Nome de peça adequado.")
}
else{
    console.log("Nome da peça inadequado.")
}