/*
    ===== Código de TypeScript =====
*/

//Especificar el tipo de dato
let nombre: string = 'javier';
let estaVivo: boolean = false;


//Con el operador OR | se puede especificar que puede recibir cualquiera
// de esos dos datos
let healthPoints: number | string = 95;

nombre = 'Jorge';
healthPoints='FULL';

console.log( nombre, healthPoints );