var array = [5, 5, 5];
var sum = 0;
var avg = 0;

function promedio(arreglo) {
  for (let j = 0; j < arreglo.length; j++) {
    sum += array[j];
    avg = sum / array.length;
  }
  console.log("La suma es: " + sum);
  console.log("El promedio es: " + avg);
}
