/*
    ===== FUNCIONES =====
*/

//SIEMPRE colocar los tipos de datos a los parametros
function sumar(a: number, b: number): number{
    return a+b;
}

const sumarFlecha = (a: number,b: number): number  =>{
    return a+b;
}

//Primero se colocan los parametros obligatorios, al final los opcionales
function multiplicar( numero: number, base: number, otroNumero?: number, ):number{
    return numero * base;
}

// const resultado = multiplicar(12,10);

// console.log(resultado);


interface PersonajeLOR{
    nombre: string,
    pv: number,
    mostrarPV: () => void
}

function curar( personaje: PersonajeLOR, curarX: number):void {

    personaje.pv += curarX;
    
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR ={
    nombre: 'Pikachu',
    pv: 50,
    mostrarPV(){
        console.log('Puntos de vida: ', this.pv)
    }
}

curar( nuevoPersonaje, 50 );
nuevoPersonaje.mostrarPV();
