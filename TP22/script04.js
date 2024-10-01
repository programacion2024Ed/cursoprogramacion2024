document.querySelector("#btnEj1").addEventListener("click", (e) =>{
 let nombre = document.querySelector("#nombre").value;  
 //console.log(nombre);
 if(nombre === ""){
    document.querySelector("#salidaEj1").innerHTML ="Error!!! ingrese un nombre en el campo";
    return;
}
 document.querySelector("#salidaEj1").innerHTML = "Hola " + nombre; 
}) 

document.querySelector("#btnEj2").addEventListener("click", () =>{
    let comensales = document.querySelector("#comensales").value;
    if(comensales === "" || isNaN(comensales)){
        document.querySelector("#salidaEj2").innerHTML =
        "Error!!! ingrese un numero en el campo";
        return
    }
    document.querySelector("#salidaEj2").innerHTML =
    `*Papas:${0.5*comensales}kilos<br>
    *Leche:${100*comensales}ml<br>
    *Manteca:${30*comensales}grs<br>
    *Huevo:${1*comensales}unidades<br>`;
})