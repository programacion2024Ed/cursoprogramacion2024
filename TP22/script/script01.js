 document.querySelector("#btnconsola").addEventListener("click",()=>{
    console.log("click a boton1")
 })

 document.querySelector("#btnalerta").addEventListener("click",()=>{
    window.alert("click a boton cerca") 
 })

 document.querySelector("#btndocumento").addEventListener("click",()=>{
   document.querySelector("#salidas").textContent +="click1"
 })

 document.querySelector("#btnhaceclicks").addEventListener("click",()=>{
   acumulador++
    document.querySelector("#salida").textContent =acumulador
 })
 let acumulador=0

 document.querySelector("#btnvalidar").addEventListener("click",()=>{
    let valor = document.querySelector("#letras").value
    console.log(valor)

    
   
 })
