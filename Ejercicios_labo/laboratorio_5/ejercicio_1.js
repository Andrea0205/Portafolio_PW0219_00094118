var arreglo = ["hello", 1, "holis", 2, "adios", false];
var word = 0;
var number = 0;
var bool = 0;

function listita(array) {
  for (let j = 0; j < 6; j++) {
    if (typeof array[j] === "number") {
      number++;
    }
    if (typeof array[j] === "string") {
      word++;
    }
    if (typeof array[j] === "boolean") {
      bool++;
    }
  }
  console.log("La cantidad de numeros es: " + number);
  console.log("La cantidad de strings es: " + word);
  console.log("La cantidad de booleanos es: " + bool);
}
