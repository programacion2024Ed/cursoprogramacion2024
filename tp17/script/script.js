if(2 == 1){
    console.log("resultado del condicional");
}

/* let dato1 =  window.prompt("ingresar primer dato");
let dato2 =  window.prompt("ingresar segundo dato");

if(dato1 == dato2){
    console.log("comparacion verdadera");
} else {
    console.log("comparacion falsa");
}
 */
// Scoope
let respuesta;
if(2 > 1){
      respuesta ="primer numero mayor al segundo";
} else {
      respuesta = "segundo numero mayor al primero"
}
console.log(respuesta);

// if else if

let semaforo = "verde";

if(semaforo == "verde"){
    console.log("avanzar");
} else if(semaforo == "amarillo"){
    console.log("precaucion");
}  else if(semaforo == "rojo"){
    console.log("detenerse");
}  else {
    console.error("semaforo roto");
}


