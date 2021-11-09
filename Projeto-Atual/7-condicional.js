console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array (
  `Salvador`,
  `São Paulo`,
  `Rio de Janeira`,
)
console.log(listaDeDestinos);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possiveis: ");

if( idadeComprador >= 18 || estaAcompanhada == true ){
  console.log("Boa Viagem!!!");
  listaDeDestinos.splice(2,1); //removendo item
} else {
      console.log("Não é maior de idade e nao posso vender")
}

console.log("Embarque: \n\n")

if(idadeComprador >= 18 && temPassagemComprada){
  console.log("Boa Viagem");
}
else{
  console.log("Você não pode embarca");
}


console.log(listaDeDestinos);
// console.log(idadeComprador > 18); // false
// console.log(idadeComprador < 18); // true
// console.log(idadeComprador <= 18); //true
// console.log(idadeComprador >= 18); //false
// console.log(idadeComprador == 18); //false
