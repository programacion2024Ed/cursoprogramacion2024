document.querySelector("#btnEj1").addEventListener( "click" , () => {
    let nombre= document.querySelector("#nombre").value;
    //console.log(nombre)
    if(nombre === ""){
        document.querySelector("#salidaEj1").innerHTML = "error ingrese un nombre en el campo";
        return;
    }
    document.querySelector("#salidaEj1").innerHTML = "Hola "+ nombre
});

document.querySelector("#btnEj2").addEventListener( "click" , () => {
    let comensales = document.querySelector("#comensales").value;
    
    if(comensales === "" || isNaN(comensales)){
        document.querySelector("#salidaEj2").innerHTML = "error ingrese un numero en el campo";
    return;
    }

    document.querySelector("#salidaEj2").innerHTML = 
    `*Papas: ${0.5*comensales} Kilos <br> 
     *Leche: ${100*comensales} ml <br>
     *Manteca: ${30*comensales} gr <br>
     *Huevos: ${1*comensales} unidades <br>`
})


document.querySelector("#btnEj3-1").addEventListener( "click", () => {
    let asistente = document.querySelector("#asistentes").value;
    if(asistente === ""){
        document.querySelector("#salidaEje3").innerHTML = "Error ingrese un nombres en el input"
        return;
    }
    //console.log(asistente)
    asistentes.push(asistente)
    //console.log(asistentes)
    document.querySelector("#asistentes").value = ""
})
let asistentes = []
document.querySelector("#btnEj3-2").addEventListener( "click", () => {
    if(asistentes.length == 0){
        document.querySelector("#salidaEje3").innerHTML = "No hay datos guardados"
        return
    }
    document.querySelector("#salidaEje3").innerHTML = ""
    asistentes.forEach((nombre, i) => {
        //console.log(nombre)
        i++
        document.querySelector("#salidaEje3").innerHTML +=i + " - " + nombre + "<br>"                                                    
    });
});

let carrito = [0, 0, 0]

document.querySelector("#sumarProd0").addEventListener( "click", () => {
   carrito[0]++;
   actualizarContador();
})
document.querySelector("#sumarProd1").addEventListener( "click", () => {
    carrito[1]++;
    actualizarContador();
})
document.querySelector("#sumarProd2").addEventListener( "click", () => {
    carrito[2]++;
    actualizarContador();
})

function actualizarContador(){
    let acumulador = 0;
    carrito.forEach((cantidad) => {
        acumulador += cantidad
    });
    document.querySelector("#contador").innerHTML = acumulador
}

document.querySelector("#btnEj4-1").addEventListener ("click",() =>{
    document.querySelector("#salidaEj4").innerHTML = `Remera roja:${carrito[0]} <br> Remera verde: ${carrito[1]} 
         <br> Remera azul:  ${carrito[2]}  `;
})

document.querySelector("#btnEj4-2").addEventListener("click",() => {
    carrito =[0,0,0];
    actualizarContador();
    document.querySelector("#salidaEj4").innerHTML = "";
})

