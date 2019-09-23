var word = "Reconocer";

function palindromo(palabra) {
  palabra = palabra.toLowerCase().replace(/\s/g, "");
  atras = palabra
    .split("")
    .reverse()
    .toString();

  for (var j = 0; j < atras.length - 1; j++) {
    atras = atras.replace(",", "");
  }

  if (palabra == atras) {
    resultado = "Es un palindromo";
  } else {
    resultado = "No es un palindromo";
  }
  console.log("La palabras es: " + resultado);
}
