var array = [5, 2, 1, 6, 9, 8, 0];

function burbuja(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[j + 1]; j++) {
      var el1 = array[j];
      array[j] = array[j + 1];
      array[j + 1] = el1;
    }
  }
  return arr;
}
