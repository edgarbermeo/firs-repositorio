
/*function convertir(numero) {
    const numerosEnTexto = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];

    //una forma de hacer 
    if (typeof numero !== 'number') {
        return "digite solo numero"

    }
    if (!isNaN(numero) && numero >= 0 && numero <= 5) {
        return numerosEnTexto[numero]
    }
    return "debe ser un numero del 0 al 5"

    //otra forma de hacer solo typeof


}

console.log(convertir(1));
console.log(convertir(6));
console.log(convertir("5")); 
*/

const productos =[
    {
        "nombre": "leche",
        "subValor": 4000,
        "iva": 18
      },
      {
        "nombre": "pan",
        "subValor": 2500,
        "iva": 18
      },
      {
        "nombre": "huevos",
        "subValor": 3000,
        "iva": 18
      },
      {
        "nombre": "arroz",
        "subValor": 3500,
        "iva": 18
      },
      {
        "nombre": "aszúcar",
        "subValor": 2000,
        "iva": 18
      }
    ]; 
    function calcularPrecio(productos) {
        let precioTotal = 0;
      
        productos.forEach(producto => {
          const precioConIva = producto.subValor * ( + producto.iva / 100 )+producto.subValor;
          console.log ("precio con iva "+ producto.nombre + ":", + precioConIva)
          precioTotal = precioConIva + precioTotal;
        });
      
        return precioTotal;
        
      }
      
 
      const precioTotal = calcularPrecio(productos);
      console.log("Precio total a pagar:", precioTotal);