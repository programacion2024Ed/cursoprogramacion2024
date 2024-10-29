localStorage.setItem("curso", "Programacion Web");

let cursoLocal = localStorage.getItem("curso");

document.querySelector("#caja1").innerHTML = cursoLocal

// _ _ _ _ _ _ _ _

const datosPersonales = {
    nombre:"Edwin",
    apellido:"Antikona",
    mail: "edw2024anticon@yahoo.com.ar",
    telefono: 1133499644
}

document.querySelector("#grabar"),addEventListener("click",  () =>{
    localStorage.setItem("datosPersonales", JSON.stringify(datosPersonales));
    })

    document.querySelector("#obtener").addEventListener("click", () => {
        let datosLocales = localStorage.getItem("datosPersonales");
        console.log(datosLocales);
        datosLocales = JSON.parse(datosLocales);
        console.log(datosLocales);

        document.querySelector("#caja2").innerHTML = `Nombre: ${datosLocales.nombre}<br> Apellido: ${datosLocales.apellido}`;
    });

    document.querySelector("#limpiar").addEventListener("click",() => {
        document.querySelector("#caja2").innerHTML = "";
        localStorage.clear();
    })
