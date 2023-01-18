//Clases basicas

class PersonaNormal{

    constructor( 
        public nombre: string, 
        public direccion: string
    ){}
}


class Heroe extends PersonaNormal{
   //Otra forma de crear propiedades de una clase
    //  alterEgo: string,
    //   edad: number,
    //   nombreReal:string

    //Asignar a la clase las propiedades mediante el constructor
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ){
            //Se tiene que llamar al constructor mediante el super
            super( nombreReal, 'NY' );
        }
}

const ironman = new Heroe('IronMan', 20, 'Tony');

console.log(ironman)