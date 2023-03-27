const fs = require('fs');

const filephath = './db/data.json';

const guardaBase = (data) => {
    fs.writeFileSync(filephath, JSON.stringify(data));
}

const cargaBase = () => {
    if( !fs.existsSync(filephath))
        return null;
    const tareas = fs.readFileSync(filephath, {encoding: 'utf-8'});
    return JSON.parse(tareas);
};

module.exports = {
    guardaBase, 
    cargaBase
}