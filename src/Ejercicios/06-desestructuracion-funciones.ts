//Desestructuracion de funciones

export interface Producto{
    desc: string,
    precio: number
}

const telefono: Producto = {
    desc:'POCO X3 PRO',
    precio: 150
}

const tablet: Producto ={
    desc:'Tablet POCO',
    precio: 200
}

export function calcularIVA( productos: Producto[] ): [number,number]{

    let total = 0;

    productos.forEach( ( {precio} )=>{
        total += precio;
    } )

    return [total, total * 0.16];

}


const articulos = [telefono, tablet];

const [total, iva] = calcularIVA(articulos);

// console.log('Total:', total)
// console.log('IVA:', iva)