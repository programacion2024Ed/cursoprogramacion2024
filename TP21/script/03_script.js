document.querySelector("form").addEventListener("submit",(e) => {
    e.preventDefault();
    let validacion = validarForm();
    if(validacion){
        console.log("Enviar formulario")
    }else{
        console.log("Validacion rechazada")
    }
     
});

function validarForm(){
   // console.log("validarForm");

   // Verificar campos vacios

   /* document.querySelector("#nombre").value */
   
   let nombre = document.querySelector("#nombre")
   let apellido = document.querySelector("#apellido")
   let dni = document.querySelector("#dni")

   if ( nombre.value === "" || apellido.value === "" || dni.value === "" ){
    window.alert("Debe completar todos los campos");
    
    return false;
   }
    
   if(dni.value.length !== 8 ){ //distinto
    window.alert("EL dni debe tenen 8 digitos")
    return false
   }
// Verificar tipo de dato
if(isNaN(dni.value)){
    window.alert("El campo dni solo acepta numeros")
    return false
}

let letrasAprobadas = "abcdefghijklmnñopqrstuvwxyzáéíóúàèìòùäëïöü ".split(""); //array
let resp = true
let arrayNombre = nombre.value.split("");
arrayNombre.forEach((letra) => {  //undifin
    //console.log()
    let resultado = letrasAprobadas.indexOf(letra.toLowerCase())
    //console.log(resultado)
    if(resultado === -1){
       // window.alert("el campo nombre solo acepta letras");
        resp = false
    }
    
})
if(!resp){
    window.alert("El campo dni solo acepta numeros")
    return false;
    
}
//------------
resp = true
let arrayApellido = apellido.value.split("");
arrayApellido.forEach((letra) => {  //undifin
    //console.log()
    let resultado = letrasAprobadas.indexOf(letra.toLowerCase())
    //console.log(resultado)
    if(resultado === -1){
       // window.alert("el campo nombre solo acepta letras");
        resp = false
    }
})
if(!resp){
    window.alert("El campo Apellido solo acepta letras")
    return false;
}

document.querySelector("#resultados").innerHTML += `Nombre recibido: ${nombre.value} <br>Apellido recibido: ${apellido.value} <br>DNI recibido: ${dni.value}`

   return true;
}