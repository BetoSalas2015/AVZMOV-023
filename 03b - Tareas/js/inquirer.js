const inquirer = require('inquirer');
const colors = require('colors');

const menu = [
    {
        type: 'list',
        name: 'menuOpt',
        message: 'Seleccione una Opción: ',
        choices: [
            {
                value: 1,
                name: `${"1.".green} Crear Tarea`
            },
            {
                value: 2,
                name: `${"2.".green} Listar Tareas`
            },
            {
                value: 3,
                name: `${"3.".green} Listar Tareas terminadas`
            },
            {
                value: 4,
                name: `${"4.".green} Listar Tareas pendientes`
            },
            {
                value: 5,
                name: `${"5.".green} Completar tareas`
            },
            {
                value: 6,
                name: `${"6.".green} Borrar tarea`
            },
            {
                value: 0,
                name: `${"0.".green} Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("=========================".green);
    console.log("= Seleccione una opción =".green);
    console.log("=========================\n".green);

    const {menuOpt} = await inquirer.prompt( menu );
    
    return menuOpt;

};

const pausa = async() => {
    await inquirer.prompt([{
        type: 'input',
        name: 'pauseOpt',
        message: `Presione ${'ENTER'.green} para coninuar`
    }])
};

module.exports = {
    inquirerMenu, 
    pausa
}