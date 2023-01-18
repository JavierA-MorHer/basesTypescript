//*Desestructuracion de objetos


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    year: number;
}

const reproductor : Reproductor = {
    volumen: 100,
    segundo: 35,
    cancion:'Pink Venom',
    detalles:{
        autor: 'BLACKPINK',
        year: 2022
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La cancion actual es: ', cancion);
// console.log('El autor es: ', autor);

//*Desestructuracion de arreglos

const bp: string[] =['Lisa', 'Jennie','Jisoo', 'Rose'];

const [ p1, p2, p3, p4]= bp;

//Si solo se quiere el tercer elemento del objeto
const [ , , elemento3 ]= bp;

console.log('Personaje 1', p1)
console.log('Personaje 2', p2)
console.log('Personaje 3', p3)
console.log('Personaje 3', p4)