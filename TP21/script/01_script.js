console.log(window);

console.log(document);

// Selectores

let elemento = document.querySelector("#texto2");
console.log(elemento);

elemento = document.getElementById("texto2");
console.log(elemento);

 elemento = document.getElementsByClassName("rojo");
 console.log(elemento);
  elemento = document.getElementsByTagName("p");
  console.log(elemento);

  elemento = document.querySelector("p#texto2").textContent;
  console.log(elemento);
  
  document.querySelector("p#texto2").textContent = "Nuevo texto";

  document.querySelector("#destino").textContent = "Hola Mundo!!!";

  // Crear elementos
  const element = document.createElement("div");
  element.textContent = "Soy otro DIV";
  Document.querySeletor("#destino").appendChild(element);

  document.querySelector("#destino").innerHTML += "<div>soy el segundo DIV</div>"; 
 

