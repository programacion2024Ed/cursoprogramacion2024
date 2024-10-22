let cursos = [
    {
        id: 1,
        nombre:"Programación web",
        calificado: false,
        notas: [],
        alumnos: [1, 2, 3, 4]
    },
    {
        id:2,
        nombre:"Pensamiento computacional",
        calificado:true,
        notas: [10, 9],
        alumnos:[2, 4],
    },
    {
        id:3,
        nombre:"Sublimación",
        calificado:true,
        notas: [],
        alumnos:[1, 2], 
    },
    {
        id:2,
        nombre:"Impresión 3D",
        calificado:true,
        notas: [10, 9, 5],
        alumnos:[2, 3, 4], 
    }
];

cursos.forEach((curso) => {
    document.querySelector("#cursos").innerHTML +=  `
    <div class="curso">
     <h1>${curso.nombre}</h1>
     <span>Alumnos: ${curso.alumnos.length}</span>
     <span>Calificado: ${curso.calificado}</span>
     <span>
     <div class="btn">Abrir</div>
     </div>`;

})