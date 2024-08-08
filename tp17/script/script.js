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

//

/* let monto = window.prompt("Monto de la compra");

if(monto > 50000){
    let montofinal = monto *0.75;
    console.log("monto final: " + montofinal);
}else if(Monto > 20000){
    let montofinal = monto * 0.9;
    console.log("montofinal:" + montofinal);
}else{
    console.log("montofinal:" + monto);
} */   



    /* let edad = window.prompt("ingrese su edad")

    let resp;
    if(edad >= 18){
        resp = "es mayor de edad";
    }else{
        resp = " es menor de edad";
    }

    console.log(resp); */


    let resp2 = edad >= 18 ? "Mayor":"Menor";

    console.log(resp2);

    // operadores
    /*  let valor1 = true;
     let valor2 = false;
     console.log(valor1 && valor2);
     console.log(valor1 || valor2); */
     if(10 == 10 && 20 == 20){
        console.log("los numeros coinciden");
    }else{
        console.log("los numeros coinciden");
        }
        // ejercicio - llevando mas de 10 pord  por un total superior a $20.000 aplicar un descuento del 20% al total

        let cantidad = window.prompt("cantidad de productos");
        let valorcompra = window.prompt("total de la compra");

        /* if(cantidad >= 10 && valorcompra >= 20000){
            let valorfinal = valorcompra *0.8;
            console.log("valor final con descuento" + valorfinal)
} else {
    console.log("valor final sin descuento:" + valorcompra) */


    // switch

    let colorDelsemaforo = Window.prompt("color del semaforo"); 

    switch (colorDelsemaforo){
        case "verde":
            console.log("Avanzar");
            break;
        case "amarillo":
             console.log("precaucion");
             break;
        case " rojo":
             console.log("detenerse");
             break; 
        default: 
             console.log("semaforo roto");
             break;
             


    }





   
