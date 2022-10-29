//usar yargs
const argv = require('yargs')
                    .options({
                        'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'base to the multiplication'},
                        
                        'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'list the multiplication table'
                        },

                        'h': {
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'list the multiplication table extend'
                            },
                    })
                    .check( (argv, options) => {
                        if( isNaN(argv.base) ) {
                            throw 'La base tiene que ser un numero'
                        }
                        return true
                    })
                    .argv;


module.exports = argv;