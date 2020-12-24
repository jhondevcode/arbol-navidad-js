import chalk from 'chalk';

function mult(symbol: string, length: number) {
    let string = '';
    while (string.length < length) {
        string += symbol;
    }
    return string;
}

function center(message: string, messageLength: number, size: number) {
    if (messageLength < size) {
        let point = (size - messageLength) / 2;
        console.log(mult(' ', point) + message)
    } else {
        console.log(message);
    }
}

let espacios = 15;
let hoja = '0';

console.log(chalk.yellow.bold(mult(' ', espacios) + "X"));

for (let index = 0; index <= espacios; index++) {
    console.log(mult(' ', espacios - index) + chalk.green.bold(hoja));
    hoja += '10';
}

for (let tronco = 0; tronco < espacios / 2; tronco++) {
    console.log(chalk.hex('#996633')(mult(' ', espacios - 1) + '101'));
}

let message = '🎄 ¡Feliz navidad! 🎄';
center(chalk.hex('#00ff00')(message), message.length, hoja.length);
message = '🎁 Y un prospero año nuevo 🎁';
center(chalk.yellow(message), message.length, hoja.length);