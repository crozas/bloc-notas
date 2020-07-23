const argv = require('./config/yargs').argv
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear tarea');
        porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        console.log('listar tareas');
        let listado = porHacer.getListado();

        console.log(listado)
        for (tarea of listado) {
            console.log('============='.green);
            console.log(tarea.descriopcion.blue);
            console.log('Estado: ', tarea.completado);
        }

        break;
    case 'actualizar':
        console.log('actualizar tarea');
        porHacer.actualizar(argv.descripcion, argv.completado)
        break;
    case 'borrar':
        console.log('borrando tarea');
        porHacer.borrar(argv.descripcion)
        break;

    default:
        console.log("comando no sirve");
}
