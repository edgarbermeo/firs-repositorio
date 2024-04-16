
function convertir(numero) {
    const numerosEnTexto = [ "cero","uno", "dos", "tres", "cuatro", "cinco"];
    
    //una forma de hacer 
    if(typeof numero!== 'number'){
        return "digite solo numero"

    }
    if (!isNaN(numero) &&numero >=0 && numero<=5 ){
        return numerosEnTexto[numero]
    }
        return"debe ser un numero del 0 al 5"
    
        //otra forma de hacer solo typeof
        
      
        }
    
    



console.log(convertir(1)); 
console.log(convertir(6)); 
console.log(convertir("5")); 
