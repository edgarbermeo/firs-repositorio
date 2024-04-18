
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
          const precioConIva = producto.subValor * (  producto.iva / 100 )+producto.subValor;
          console.log ("precio con iva "+ producto.nombre + ":", + precioConIva)
          precioTotal = precioConIva + precioTotal;
        });
      
        return precioTotal;
        
      }
      
 
      const precioTotal = calcularPrecio(productos);
      console.log("Precio total a pagar:", precioTotal);

      // ejercios 2 solo objeto

     

      const productos2 = {
        leche: { 
          subValor: 4000, iva: 18 },
        pan: { 
          subValor: 2500, iva: 18 },
        huevos: { 
          subValor: 3000, iva: 18 },
        arroz: { 
          subValor: 3500, iva: 18 },
        azucar: { 
          subValor: 2000, iva: 18 }
      };
      let preciototal=0;
      
      //object.entrie devuele fila y columnas 
      Object.entries(productos2).forEach(([key,value])=>{
        const precioiva= value.subValor *(value.iva/100)+value.subValor;
        console.log("precio con iva de "+ key +":",+precioiva)
        preciototal =precioiva+preciototal;
      return precioTotal;
      
      })
      console.log(precioTotal)


      const students = [
        { id: 1, name: "juan", age: 17, height: 1.60, gender: 'M' },
        { id: 4, name: "pedro", age: 15, height: 1.90, gender: 'M' },
        { id: 2, name: "ana", age: 16, height: 1.65, gender: 'F' },
        { id: 3, name: "sofia", age: 17, height: 1.72, gender: 'F' },
        { id: 6, name: "pedro", age: 12, height: 1.70, gender: 'M' },
        { id: 5, name: "rosa", age: 19, height: 1.67, gender: 'F' },
      ];
      
      const califications = [
        { id: 1, calification: 5 },
        { id: 4, calification: 5 },
        { id: 3, calification: 5 },
        { id: 2, calification: 1 },
        { id: 5, calification: 3 },
        { id: 6, calification: 4 },
      ]

   //promedio
       const totalaltura = students.reduce((sumaaultura, students)=> sumaaultura + students.height,0)
       const promedio = totalaltura / students.length;
       console.log(totalaltura);
       console.log(promedio)

        
       //cantidad de m-f
     
     const filtro = students.filter(student => student.gender === "M" );
      const filtromujer = students.filter(student=>student.gender==="F")
    
      console.log("total de hombres"+":",filtro.length)
      console.log("total de mujeres "+":",filtromujer.length)

      let contadorh=0;
      let contadorm=0;
      students.forEach(student=>{
        if(student.gender==="M"){
contadorh++
        }
        if(student.gender =="F")
        contadorm++
      })
      console.log(contadorh)
      console.log(contadorm)


      // asignar calificacion
      const student =students.map(student=>{
        const calification = califications.find(calification=>{
          if(student.id === calification.id){
            student['calificacion'] = calification.calification
          }
        })
        console.log(student)

      })
      