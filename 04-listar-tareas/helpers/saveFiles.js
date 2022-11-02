import fs, { readFileSync } from 'node:fs';

export { saveDB, readDB };

const file = './db/data.json';


const saveDB = ( data ) => {

    //JSON.stringify(data) convierte a string
    fs.writeFileSync( file, JSON.stringify(data) );
}

const readDB = () => {
    if (! fs.existsSync(file)) {
        return null;
    }

    const info = readFileSync(file, {encoding: 'utf-8'});
    const data = JSON.parse (info);

    // console.log(data);
    return data;

}