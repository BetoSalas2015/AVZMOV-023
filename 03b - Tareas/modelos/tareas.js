const Tarea = require('./tarea');

class Tareas {
    constructor() {
        this.listado = {};
    }

    get listadoArr() {
        const listadoArr = [];
        Object.keys(this.listado).forEach( (key) => {
            const tarea = this.listado[key];
            listadoArr.push(tarea);
        });
        return listadoArr;
    }

    crearTarea = (desc) => {
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    };
}

module.exports = Tareas;