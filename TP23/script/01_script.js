let datos = {     //llave valor
    nombre: "Pablo",
    apellido: "Deganis",
    mail: "pdeganis@yahoo.com",
    direccion: "Calle falsa 123",
    telefono: 12345678,
    registrado: true,
}

console.log(datos)
console.log(datos.nombre)
console.log(datos["nombre"])

//Modificar propiedad
datos.nombre = "Ignacio",
console.log(datos)


//Añadir una propiedad
datos.edad = 41;
console.log(datos)

//Eliminar una propiedad
delete datos.direccion
console.log(datos)

//loop For in

for(const x in datos){
    //console.log(x)
    console.log(datos[x])
}

const curso = {
    nombre: "Programacion Web",
    sede: "San Martin",
    inscriptos: 26,
    saludar: () => {
        console.log("Hola alumnos de " + curso.nombre)
    },
    estado: () => {
        if(curso.inscriptos > 25){
            console.log("Curso completo");
        }else{
            console.log("Curso con vacantes")
        }
    }
}
curso.saludar()
curso.nombre = "sublimacion";
curso.saludar()

curso.estado()
curso.inscriptos--;
curso.estado()
console.log(curso)



