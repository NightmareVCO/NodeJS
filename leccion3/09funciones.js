// Formas de agrupar lógica
function proceso1() {
   console.log('Hago una cosa');
   console.log('Luego hago otra');
}
// Las podemos llamar
proceso1();
// Repetidamente
proceso1();


// Les podemos enviar datos
function generateFullName(nombre,apellido) {
   console.log(nombre + " " + apellido);
}

generateFullName('Martin','Cristóbal');
generateFullName('Martin','Hernandez');


// Podemos hacer que nos devuelvan datos
function calculateMidpoint(num1,num2) {
   return (num1 + num2) / 2;
}

var firstNumber = 0;
var secondNumber = 4;
var midPoint = calculateMidpoint(firstNumber,secondNumber);
console.log('La media de ' + firstNumber + ' y ' + secondNumber + ' es ' + midPoint);


// Las funciones son un tipo de dato, por lo que podemos utilizarlo como variable

var logicaSaludar = function (nombre) { console.log('Hola, mi nombre es ' + nombre); };
var lógicaSaludarMaleducado = function (nombre) { console.log('Hola, no me gustas pero mi nombre es ' + nombre); };

// En lógicaSaludar tenemos la referencia a la función
// Podemos hacer algo tan loco como pasar una funciona a otra:
function saludarSuperEducadamente(funcionPasadaPorParametro,nombre) {
   console.log('Disculpe, perdone que le moleste, pero ');
   // Ejecutamos la función que hemos recibido
   funcionPasadaPorParametro(nombre);
   console.log('Espero pasar una muy buena velada con usted.');
}

// Si lo ejecutamos todo:
saludarSuperEducadamente(lógicaSaludarMaleducado,'Martin');

// Esto es lo que da pie a poder hacer programación funcional en JS
// Las funciones son objetos y por lo tanto se pueden comportar como tal

// Se usa mucho en gestión de eventos:

function processClickEvent(event) {
   // Hago algo cuando recibo el click
}

//Quiero que cuando se haga click en el item, se ejecute mi función
var itemEnPantalla; // Algún item de la pantalla
// La librería de frontend me proporciona una forma de ejecutar
// mi función cuando se haga click
// Lo que estoy haciendo es pasarlo la función a ejecutar como parámetro
//itemEnPantalla.onClick(processClickEvent)