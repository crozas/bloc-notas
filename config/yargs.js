const crear_borrar = {
    descripcion: {alias: 'd'}
};

const actualizar = {
    descripcion: {
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default:
            true
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea ', crear_borrar)
    .command('borrar', 'Borra una tarea ', crear_borrar)
    .command('listar', 'Lkista las  tarea ')
    .command('actualizar', 'Actualiza una tarea', actualizar)
    .help()
    .argv;

module.exports = {
    argv
}
