const colors = require('colors');
const { inquirerMenu, pausa } = require('./js/inquirer');

const main = async() => {
    let opc = 0;
    do {
        opc = await inquirerMenu();
        console.log(opc);
    } while (opc !== 0);

    await pausa();
};

main();