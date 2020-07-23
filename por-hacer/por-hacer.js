const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`./db/data.json`, data, (err) => {

    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        console.log(tarea.descriopcion, descripcion)
        return tarea.descriopcion === descripcion;
    });
    console.log(index)
    if (index > 0) {
        listadoPorHacer[index].completado = completado;

        guardarDB();
    }


}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descriopcion !== descripcion;
    })

    console.log(nuevoListado);
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;

    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

const crear = (descriopcion) => {
    cargarDB();

    let porHacer = {
        descriopcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
