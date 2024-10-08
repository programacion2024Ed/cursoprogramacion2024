document.querySelector("#boton1").addEventListener( "click" , () => {
  document.getElementById("cajas").style.flexDirection = "column"
})
document.querySelector("#boton2").addEventListener( "click", () => {
    document.getElementById("cajas").style.flexDirection = "row"
})
document.querySelector("#boton3").addEventListener( "click", () => {
    document.getElementById("cajas2").style.background = " red "
})
document.querySelector("#boton4").addEventListener( "click", () => {
    document.getElementById("cajas2").style.background = " blue "
})
document.querySelector("#boton5").addEventListener("click", () => {
    document.getElementById("texto1").style.fontSize = "1em"
})
document.querySelector("#boton6").addEventListener("click", () => {
    document.getElementById("texto1").style.fontSize = "2em"
})
document.querySelector("#color").addEventListener( "change" ,(e) => {
    /* document.getElementById("texto"). */
    texto1.style.color = e.target.value
})

