let usuarios = ["pedro" , "mariano" , "alberto", "matias"]
let contrasenas = ["pedro123", "mariano123", "alberto123","matias2"]





document.querySelector("#boton").addEventListener( "click" , () => {
    
let buscadorUsuario = document.querySelector("#usuar").value.toLowerCase()

 
let contra = document.querySelector("#contras").value

let l = contrasenas.find(dat => dat === contra)


let usuario= usuarios.find(dat => dat === buscadorUsuario)


let numeroDeUsuario= usuarios.findIndex(dato => dato === usuario)


let numeroDeContrasena = contrasenas[numeroDeUsuario]
  

if(contra === l && buscadorUsuario !== usuario){
    console.log("contraseña correcta")
}else if(buscadorUsuario === usuario && contra !== numeroDeContrasena){
        console.log("numero de contraseña incorrecto")
        document.getElementById("cajas2").textContent = "numero de contraseña incorrecto"
    }else if( buscadorUsuario === usuario && contra === numeroDeContrasena ){
         console.log("usuario correcto")
         document.getElementById("cajas2").textContent = "usuario correcto"
    }else if(buscadorUsuario !== usuario ){
        console.log("usuario incorrecto")
        document.getElementById("cajas2").textContent = "usuario incorrecto"
    }
    
    
})








/* let e;

    usuari.value === "p" 
    console.log("registro")
    document.querySelector("#cajas").textContent = e */ 
    /* let s = document.querySelector("#boton")
     console.log(s) */


    
/* document.querySelector("#boton").addEventListener( "click",sitio) */


 /* let e;
document.querySelector("#boton").addEventListener( "click" , () => {
    if(usuari.value === "p" ){
       e = "sss"
       document.querySelector("#cajas").textContent = e 
    }else {
        console.log("formulario no enviado")
    }
 
}) */
    /* let items = ["Rojo", "naranja", "amarillo", "verde", "azul" , "violeta"];
    let buscar = items.find((dato) => {return dato === "azul"});
    console.log(buscar) */
   


    //let buscarI = items.findIndex(dato => dato === "verde");
