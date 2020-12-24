let chalk = require('chalk');

console.log(chalk.yellow.bold("     X"));

let numero_espacios = 5;
let espacios = '     ';
let hoja = '0';
for (let index = 0; index <= numero_espacios; index++) {
    console.log(espacios + chalk.green.bold(hoja));
    espacios = espacios.substring(0, espacios.length - 1);
    hoja += '00';
}

for (let tronco = 0; tronco <= 3; tronco++) {
    console.log(chalk.hex('#996633')('    101'));
}

console.log(chalk.hex('#00ff00')('🎄 ¡Feliz navidad! 🎄'));
console.log(chalk.yellow('🎁 Y un prospero año nuevo 🎁'));