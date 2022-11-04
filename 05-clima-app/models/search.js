import fs, { readFileSync } from 'node:fs';

import axios from 'axios';
export {Busquedas}


class Busquedas {

    historial = [];
    //ruta d edonde guardo mi base de datos
    dbPath = './db/databse.json';

    constructor(){
        //leer db si existe
        this.leerDB()
    }

    get historialCapitalizado() {
        //capitalizar cada palabra
        return this.historial.map( lugar => {
            //corta por el espacio 
            let palabras = lugar.split(' ');
            //transformacion
            //primera letra en MAY y sumar el resto de la palabra
            palabras = palabras.map ( p => p[0].toUpperCase() + p.substring(1) );
            //unir el arreglo por el espacio
            return palabras.join(' ')

        })
    }




    //uso de api
    get paramsMapbox() {
        return {
            'proximity':'ip',
            'language': 'es',                    
            'access_token': process.env.MAPBOX_KEY
        }
    }

    get paramsWeather(){
        return {
            //mi apikey 
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'

        }
    }
    
    //peticion de buscar y regresar informacion
    async ciudad ( lugar = '') {
        //manejarlo con try y catch
        try {
            //traer informacion por peticion http
            //recibo el lugar que ingreso el usuario para realizar la busqueda
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox

            });

            // console.log('ciudad', lugar)

            const resp = await instance.get();
            // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/valencia.json?proximity=ip&language=es&access_token=pk.eyJ1IjoiamFzc2ktZnVlbnRlcyIsImEiOiJjbGExOWw3M2EwNTl5M3BtbzZ4ZXh6Y2VrIn0.nPxyBhr53DF6cUmTnhcrrg');
            // console.log(resp.data);

            //retorna los lugares que coincida con el lugar ingresado por el ususario
            //obtener del objeto lo que quiero mostrar
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                //info del arreglo, indico posicion que se encuentra
                long: lugar.center[0],
                lat: lugar.center[1],
            }))

    
            
        } catch (error) {
            return []
            
        }
    }
    //Buscar el climar de la ciudad con la api
    async climaLugar( lat, lon) {

        try {
            //Crear instacia de axios.create mandar url y params
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                //{...,} desestrucutrar el get y adicionar pro que recibo por argumento
                params: {...this.paramsWeather, lat, lon}
            })

            //con las resp extraigo la informacion que se encuentra en la data y espero la resolucion
            const resp = await instance.get();
            // console.log(resp)//de este quiero obtener la data

            //desesctructurar d ela data, para extraer info que me interesa mostrar al usuario
            const { weather, main} = resp.data

            //resolucion de la promesa, la info la saco del objeto que devuelve la api
            return {
                //viene del weather que desetructure de la data
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp

            }
            
        } catch (error) {
            console.log(error);
            
        }
    }


    agregarHistorial( lugar = ''){

        //prevenir duplicados, validacion
        if ( this.historial.includes( lugar.toLocaleLowerCase() ) ) {
            //no grabo nada si ya existe
            return;            
        }    
        
        
        //restrigir hasta 6 busquedas en el historial
        this.historial = this.historial.splice(0,5);

        //lo guardo en mi arreglo de historial que inicalice aariba como pdad
        this.historial.unshift( lugar.toLocaleLowerCase() );

        //llamo al metodo para Grabar en DB
        this.guardarDB();
    }

    guardarDB(){

        const payload = {
            historial: this.historial
        };
        //le mando la rut adonde lo quiero guardar, de segundo arg inserto lo que quiero grabar
        fs.writeFileSync( this.dbPath, JSON.stringify( payload ) );
    }

    leerDB(){
        //Verificar si existe 
        if ( !fs.existsSync(this.dbPath)) {
            //si no existe: return y se salga
            return;
        }

        //cargar info leer el doc mandadndo el path. Importante mandar el {encoding:'utf-8}
        const info = fs.readFileSync( this.dbPath,{encoding: 'utf-8'});

        if(!info)return;

        //parsear la informa a objeto,  reconstruir como un objeto json p objeto js
        const data = JSON.parse( info );

        //extraer de la data el historial
        this.historial = data.historial;
    }

}