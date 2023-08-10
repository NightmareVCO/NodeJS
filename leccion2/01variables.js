var cajaA = 3;
cajaA = 5;
var cajaB = 5;
var cajaC = cajaA + cajaB;

console.log(cajaA,cajaB,cajaC);

var x = 2;
var y = 3;

// intercambiar los valores de x e y
// x: 2, y: 3
// resultado: x: 3, y: 2
// función de swap
var z = y;
y = x;
x = z;

// destructuring
[x,y] = [y,x];

console.log("Resultado ejercicio: x es",x,"y es",y);
