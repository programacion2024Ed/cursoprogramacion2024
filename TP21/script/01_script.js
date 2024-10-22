console.log(window);

console.log(window.document);

//.propiedades y metodos()      elementos(nodos)

// Selectores

/* let elemento = document.querySelector("p") //todos reemplaza
console.log(elemento); */
let elemento = document.querySelectorAll("p") //todos
console.log(elemento);

elemento = document.getElementById("texto2"); 
console.log(elemento)

elemento = document.getElementsByClassName("rojo");
console.log(elemento)

elemento = document.getElementsByTagName("p");//todos

elemento = document.querySelector("p#texto2"); 
console.log(elemento);

elemento = document.querySelector("p#texto2").attributes // llaves de pico ,propiedades
console.log(elemento);

elemento = document.querySelector("p#texto2").textContent
console.log(elemento);

//Escribir contenido

document.querySelector("p#texto2").textContent = "Nuevo texto";

document.querySelector("#destino").textContent = "Nuevo texto" 


//Crear elementos
const element = document.createElement("div");
element.textContent = "Soy otro Div";
document.querySelector("#destino").appendChild(element);

document.querySelector("#destino").innerHTML += `<div id="nombre"> Soy el segundo DIV </div>`







