/*
    ===== Código de TypeScript =====
*/

//Array
let habilidades: string[] = ['Dance','Vocal'];


//Las interfaces se implementan para obligar al obj a cumplir
// la estructura que tiene
interface Personaje{
    nombre: string,
    grupo: string,
    edad: number,
    habilidades: string[],
    country?: string // operador ? se usa para indicar que esta propiedad es OPCIONAL
}

//Objects
const personaje: Personaje = {
    nombre: 'Lisa',
    grupo: 'BLACKPINK',
    edad: 27,
    habilidades:['Dance','Rap']
}

personaje.country = 'Thailand'; //Agregar al arreglo
