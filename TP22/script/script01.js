document.querySelector("#consola").addEventListener("click", () => {
console.log("hice click")    
}) 
document.querySelector("#alerta").addEventListener( "click" , () => {
    window.alert("alerta")
})

document.querySelector("#documento").addEventListener( "click" , () => {
        
        document.querySelector("#contenedor").innerHTML += `<br> clik 1`
     
})
 let cl = 0
 document.querySelector("#contador").addEventListener( "click" , () =>{
      cl++  
      document.querySelector("#contenedor2").textContent = cl
})

let val
document.querySelector("form").addEventListener("submit",(e) => {
    e.preventDefault();
    let validacion = validarForm();
    if(validacion){
        val = "validacion aceptada"
        console.log("Enviar formulario")
    }else{
        val = "validacion rechazada"
        console.log("Validacion rechazada")
    }
    document.querySelector("#contenedor3").textContent = val
});
function validarForm(){
    let numero = document.querySelector("#numero")
if(isNaN(numero.value)){

    window.alert("El campo dni solo acepta numeros")
    return false
}

    return true
}



/* document.querySelector("form").addEventListener("submit",(e) => {
    e.preventDefault();
    let validacion = validarForm();
    if(validacion){
        console.log("Enviar formulario")
    }else{
        console.log("Validacion rechazada")
    }
     
});
 */