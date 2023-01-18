
//Tipos genericos de datos <T>

function queTipoSoy<T>(arg:T){
    return arg;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy(100);
let soyArreglo= queTipoSoy([1,2,3,4,5,6,7]);

let soyExplicito= queTipoSoy<number>(100);




