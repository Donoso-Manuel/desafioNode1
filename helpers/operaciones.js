const fs = require('fs');

const registrar = (nuevoRegistro)=>{
    const data = fs.readFileSync('./datos/citas.json','utf8');
    let citas = JSON.parse(data);
    const registro = {
        nombre: nuevoRegistro[0],
        edad: nuevoRegistro[1],
        animal: nuevoRegistro[2],
        color:  nuevoRegistro[3],
        enfermedad: nuevoRegistro[4]

    }
    citas.push(registro);
    const actualizaCitas = JSON.stringify(citas);
    fs.writeFileSync('./datos/citas.json', actualizaCitas);
    console.log('Registro Exitoso');
}
const leer = () =>{
    const datos = fs.readFileSync('./datos/citas.json','utf8');
    if(datos === '[]'){
        console.log('No hay datos para mostrar');
    }else{
        JSON.parse(datos).forEach(cita => {
            console.log(cita)
        });
    }
}

module.exports = {registrar , leer};