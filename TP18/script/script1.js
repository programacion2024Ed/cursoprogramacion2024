console.log("hola mundo (global)");

// funcion declarada

function holaMundoDec(){
    console.log("Hola mundo (local/declarada)")
}

holaMundoDec();

//Funcion de expresion

const holaMundoExp = function(){
    console.log(" Hola mundo (local/anonima/expresion)");
}

holaMundoExp();

// Return
function calculo(){
    let suma = 3 + 3;
    console.log
    return suma;
}

console.log(calculo())

// Parametros
function saludar(nombre){
    return "Hola" + nombre;
}
let texto = saludar("Edwin");
console.log(texto);

texto = saludar("Tomas");
console.log(texto);

// Calculadora

function suma(numero1, numero2){
    let suma = numero1 + numero2;
    return suma;
}
 let suma1 = suma(5,7);
 console.log(suma1);

 let suma2 = suma(12346545,6846135465);
 console.log(suma2);

 function resta(numero1, numero2){
    let resta = numero1 - numero2;
    return resta
 }
 let resta1 = resta(8,4)
 console.log(resta1);

  // Funcion flecha
  const sumador =  (a,b) =>  a + b;

  console.log(sumador(5,6));
