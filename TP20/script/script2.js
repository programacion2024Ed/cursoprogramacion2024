// Metodo forEach

let items = ["rojo","naranja","amarillo","verde","azul","violeta"];

items.forEach((item, i)=>{ 
    console.log("color:" + item +"-Repeticion" +1);
});

const numeros = [2,9,12,5,8,3];

numeros.forEach((numero) =>{
    console.log(numero* 10);
})

numeros.forEach((numero, i) => {
    numeros[i] += 100;
})

console.log(numeros);

let unir = numeros.join();
let separar = unir.split(",");
console.log(separar);

separar.forEach((dato,i)=>{
    separar[i] = Number (dato);
    //separar[i] = Number(separar[i]);
}
)
console.log(separar);

//Metodo find

let buscar = items.find(dato =>  dato === "verde");
console.log(buscar);

let buscarI = items.findIndex(dato => dato === "verde" );
console.log(buscarI);

//Metodo reduce
let total = numeros.reduce((acumulador,numero) => {return acumulador + numero}) ;
console.log(total);


// Vaciar

console.log(items);

// Array de Arrays

let datos = [["Edwin", 15963376],["Ronal",4223025],["Carlos",1588880]];
console.log(datos)