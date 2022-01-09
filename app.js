require('colors');
const {mostraMenu, pausa} = require('./helpers/mensajes');


console.clear();

const main = async() => {

        console.log('Consola'.green);

        let opt='';

        do {
            
           opt = await  mostraMenu();

           if ( opt !== '0' )await pausa();

        } while (opt !== '0');

        //pausa();


}


main();


