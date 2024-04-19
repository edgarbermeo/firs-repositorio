//Todas las funciones deben recibir datos dinamicos
/*
Cacular promedio de estatura
catidad de mujeres y hombres
Asignar cada calificacion a su respectivo estudiante por id
*/
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


function calcularpromedio(dato, estudiante) {
    const totalaltura = estudiante.reduce((sumaaultura, estudiante) => sumaaultura + estudiante[dato], 0)
    const promedio = totalaltura / estudiante.length;
    return promedio



}
const promedio = calcularpromedio("height", students);
console.log("el promedio es : ", promedio)


//cantidad de m-f


 function calculateAmount(students,data){
    let count = 0;
    
    students.forEach(student =>  {
        if(student.gender === data){
       count++  
          }

        
      
    });
    return count;
    
    //const filtroh = students.filter(student => student.gender === "M").length;
    //const filtromujer = students.filter(student => student.gender === "F").length;
    //return{filtroh,filtromujer};
 }
 const amountamle = calculateAmount(students,'M');
 const amountfemale = calculateAmount(students,'F');

 console.log("Cantidad de mujeres:", amountfemale);
console.log("Cantidad de hombres:", amountamle);
 


//console.log("total de hombres" + ":", filtro.length)
//console.log("total de mujeres " + ":", filtromujer.length)



// asignar calificacion

function assignNote (students,califications){
   for( const student of students){
        const calification = califications.find(calification => student.id === calification.id);
            
               if(calification){
                 student['calificacion'] = calification.calification
          
               } 

    } 
    return students;
}
const nota = assignNote(students,califications);
console.log(nota)


// con map y spread 
/*function assignNote2(students,califications){
    const student=  students.map(student=>{
        const calification = califications.find(calification => student.id === calification.id);
        if(calification){
            //funcion spread expandir elementos iterables 
            return { ...student,calification: calification.calification};
        }
       
    });
    return student;
}
const note = assignNote2(students,califications);
console.log(note)
*/