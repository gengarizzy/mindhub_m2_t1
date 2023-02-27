let miNombre;

miNombre = "Nekinu";

console.log(miNombre);

let miApellido;
miApellido = "Kujo";

console.log(miApellido);

let miEdad;
miEdad = 27;
console.log(miEdad);

let miMascota;
miMascota = "Estrella panales Estrella";
console.log(miMascota);

let edadMascota;
edadMascota = 0.2;
console.log(edadMascota);




// EJ 10

// miNombre = prompt('Introduce tu mombre');
// miApellido = prompt('Introduce tu apellido');
// miEdad = prompt('Introduce tu edad');
// edadMascota = prompt('Introduce la edad de tu mascota');


let nombreCompleto;
nombreCompleto = miNombre  + " " + miApellido;
console.log(nombreCompleto);

let textoPresentacion;
textoPresentacion = miNombre + " " + miApellido + " " + miEdad + " " + miMascota + " " + nombreCompleto;
console.log(textoPresentacion);

let sumaEdades;
sumaEdades = miEdad + edadMascota;
console.log("sumaEdades " + sumaEdades);

let restaEdades;
restaEdades = miEdad - edadMascota
console.log("restaEdades " + restaEdades);



let productoEdades = miEdad * edadMascota;
console.log("productoEdades " + productoEdades);



// SEGUNDA PARTE

let alumno = {

    nombre: "Daniel",
    apellido: "Palacio",
    carrera: "Ingenieria Ambiental",
    sedePrincipal: "Campus Lynch",
    profesorEnMasMaterias: "Irene Wais"



}

console.table(alumno);


let mascota = {

    nombre: "Estrella",
    apellido: "Tercera",
    sede: "Da Vinci",
    apodo: "Smol",
    ataqueEspecial: "Mearle las cosas a Nekinu"
}

console.table(mascota);

let frutas = ["Banana", "Manzana", "Limon", "Naranja", "Mango"]
console.table(frutas);
// console.table(frutas[0]);
// console.table(frutas[1]);
console.table(frutas[2]);
// console.table(frutas[3]);
// console.table(frutas[4]);

let numeros = ["0", "1" , "2", "3", "4"]
console.table(numeros);

let familia = ["Familiar 1", "Familiar 2","Familiar 3","Familiar 4","Familiar 5"]
console.table(familia);

textoAleatorio = frutas[1] + " " + numeros[3] + " " + frutas[4];
console.log(textoAleatorio);

let edadmia = prompt("Introduce tu edad");
let edadcompa = prompt("introduce la edad de tu compa");

edadesIguales = edadmia==edadcompa;
soyMayor = edadmia>edadcompa;
soyMenor = edadmia<edadcompa;

console.log("Mi edad es igual a la de mi compa es: ",edadesIguales); 
console.log("Soy mayor que mi compa: ",soyMayor);
console.log("Soy menor que mi compa ",soyMenor);



Edad = prompt("Introduci tu edad, a ver si soy mayor de edad");
soyMayorDeEdad = Edad>=18;
console.log("Sos mayor de edad: ",soyMayorDeEdad);