console.log("\n Trabalhando com Loops");

const listaDeDestinos = new Array (
  `Salvador`,
  `São Paulo`,
  `Rio de Janeira`,
)
console.log(listaDeDestinos);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = false; 
const destino = "Rio de Janeira";

console.log("\n Destinos possiveis: ");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true 

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length ) {

  if(listaDeDestinos[contador] == destino){
      destinoExiste = true
      break;
  }
    contador ++;
}

console.log("destino exite: " + destinoExiste);

for (let i = 0; i < listaDeDestinos.length; i++) {
  const element = listaDeDestinos[i];
  console.log(listaDeDestinos);
}


