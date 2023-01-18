//Importaciones y exportaciones

import { calcularIVA, Producto } from "./06-desestructuracion-funciones";

const carritoCompras: Producto[] = [
    {
        desc: 'Cel 1',
        precio:100
    },
    {
        desc: 'Cel 2',
        precio:150
    }
];


const [total, iva] = calcularIVA( carritoCompras);

console.log('total', total);
console.log('iva', iva);

