// Clases

class Persona{
    constructor(nombre, apellido, anioNacimiento){
        this.nombre = nombre
        this.apellido = apellido
        this.anioNacimiento = anioNacimiento
    }
    edad(){
        let hoy = new Date();
        return hoy.getFullYear() - this.anioNacimiento;
    }
    saludar(){
        return `Hola ${this.nombre}`;
    }
}

let persona1 = new Persona ("pablo", "Dega", 1983);
console.log(persona1)
console.log(persona1.edad())
console.log(persona1.saludar())

//---------------------------------

class Animal{
    constructor(nombre,color, altura, peso, region){
        this.nombre = nombre;
        this.color = color
        this.altura = altura
        this.peso = peso
        this.region = region
    }
}

let animales = [];
const elefante = new Animal("Elefante", "gris", 3000, 800,"asia");
animales.push(elefante);
console.log(animales)

const jirafa = new Animal("jirafa", "amarillo", 6000, 800, "asia")
animales.push(jirafa);
const hipopotamo = new Animal("hipopotamo","Gris",2000,2000,"africa")
animales.push(hipopotamo)
const jabali = new Animal("Jabali", " Negro", 1500, 300 , "America")
animales.push(jabali)
console.log(animales)

// Busqueda con find()

function buscarAnimal(animal){
    return animales.find((data) => 
         data.nombre === animal);
}
console.log(buscarAnimal("Jabali"));

// Filtrar con filter()

function filtrarAnimales(region){
    return animales.filter((data) => 
         data.region === region)
}
console.log(filtrarAnimales("asia"))