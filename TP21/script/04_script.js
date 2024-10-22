let DivConData = document.querySelector("#div1");

document.querySelector("#btn1").addEventListener("click",() => {
    console.log(DivConData.dataset);
});
document.querySelector("#btn2").addEventListener("click",() => {
    console.log(DivConData.dataset.id);
});
document.querySelector("#btn3").addEventListener("click",() => {
    console.log(DivConData.dataset.precio);
});
document.querySelector("#btn4").addEventListener("click",() => {
    console.log(DivConData.dataset.nombre);
});

/* document.querySelector("#btnHome").addEventListener("click",(e) => {
    console.log(e.target.dataset.boton);
});
document.querySelector("#btnProds").addEventListener("click",(e) => {
    console.log(e.target.dataset.boton);
});
document.querySelector("#btnEnvios").addEventListener("click",(e) => {
    console.log(e.target.dataset.boton);
}); */

document.querySelectorAll(".btnWeb").forEach((boton) => {
    boton.addEventListener("click", (e) => {
        console.log(e.target.dataset.boton)
    })
})
