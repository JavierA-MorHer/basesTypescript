//Encadenamiento opcional

interface Pasajero{
    nombre: string,
    hijos?: string[],
}

const pasajero1: Pasajero={
    nombre: 'Javier'
}

const pasajero2: Pasajero ={
    nombre: 'Alejandro',
    hijos : [ 'Natalia', 'Diego' ]
}

function imprimerHijos(pasajero:Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimerHijos(pasajero1);
imprimerHijos(pasajero2);