
// Para poder usarla, y const para no poder cambiarla.
const readline = require('readline');
const moment = require('moment');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question('Introduce tu nombre: ',(name) => {
   console.log('Hola, ' + name);
   rl.close();
});