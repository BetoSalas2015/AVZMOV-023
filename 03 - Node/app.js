//  callback's Hell
const empleados = [
    {
        id: 1,
        nombre: "Roberto"
    },
    {
        id: 2,
        nombre: "Jorge"
    },
    {
        id: 3,
        nombre: "Pedro"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {
    return new Promise( (resolve, reject) => {
        const empleado = empleados.find( (e) =>  e.id === id )?.nombre;
        (empleado) ? resolve(empleado) : reject(`El empleado con id ${id} no existe.`);
    } );
};

const getSalario = ( id ) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find( (s) =>  s.id === id )?.salario;
        (salario) ? resolve(salario) : reject(`El salario para el id ${id} no existe.`);
    });
};

const id = 4;

getEmpleado(id)
        .then( (empleado) => { 
            getSalario(id).then( (salario) => {
                console.log(`El empleado ${ empleado } tiene el salario ${ salario }`);
            }).catch( (err) => { console.log(`El empleado ${empleado} no tiene salario.`);})
        }).catch( (err) => { console.log(err);} );  ;


/*getEmpleado( id, (err, empleado) => { 
    if( err ) {
        return console.log(err);
    }
    getSalario( id, (err, salario) => { 
        if( err ) {
            return console.log(`El empleado ${empleado} no tiene salario.`);
        }
        console.log(`El empleado ${empleado} gana ${salario}.`);
    });
});*/






