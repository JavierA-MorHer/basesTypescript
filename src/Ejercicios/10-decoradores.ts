
// Decoradores


function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

@sealed
class BugReport {
    type = "report";
    title: string;
   
    constructor(t: string) {
      this.title = t;
    }
  } 

console.log(BugReport)

function imprimir():string{
    return 'hola';
}

const miClase = new BugReport(imprimir());

console.log(miClase)