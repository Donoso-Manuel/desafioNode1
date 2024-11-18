const fs = require('fs');
const {registrar , leer} = require('./helpers/operaciones');

const operacion = process.argv[2];
const nuevoRegistro = process.argv.slice(3);

switch (operacion) {
    case 'registrar':
        if(nuevoRegistro.length == 5){
            registrar(nuevoRegistro);
            break;
        }else{
            console.log('introdujo demasiados o pocos datos al registro');
            break;
        }
    case 'leer':
        leer();
        break;
    default:
        console.log("no se reconoce esa funcion, las operaciones validas son registrar y leer");
        break;
}