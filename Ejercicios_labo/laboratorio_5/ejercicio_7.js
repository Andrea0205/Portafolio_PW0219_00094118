function fibonacci(num) {
  var x = 0;
  var y = 1;
  var z;

  console.log(x + "");
  console.log(y + "");

  for (var j = 3; j <= num; j++) {
    z = x + y;
    x = y;
    y = z;

    console.log(z + "");
  }
}
