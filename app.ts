
//1°
// Uso de Let y Const
/**
var nombre = "Ricardo Tapia";
var edad = 23;

var PERSONAJE = {
  nombre: nombre,
  edad: edad
};
**/

//Solución
let nombre: string = "Ricardo Tapia";
let edad: number = 23;

const PERSONAJE: { nombre: string, edad: number} = {
  nombre: nombre,
  edad: edad
};


//2°
// Cree una interfaz que sirva para validar el siguiente objeto
var batman: Batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

//Solución
interface Batman {
	nombre: string;
	artesMarciales: string[];
}


//3°
// Convertir esta funcion a una funcion de flecha
/**
function resultadoDoble( a, b ){
  return (a + b) * 2
}
**/

//Solución
let resultadoDoble = (a: number, b: number) => (a + b) * 2;


//4°
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
/**
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};
**/

//Solución
function getAvenger(nombre: string, poder?: string, arma: string = "arco") {
	let mensaje: string;
	if (poder) {
	
		mensaje = `${ nombre } tiene el poder de: ${ poder } y un arma: ${ arma }`;
	} else {
		
		mensaje = `${ nombre } tiene un ${ poder }`;
	}
}


//5°
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

//Solución
class Rectangulo {
	base: number;
	altura: number;

	constructor (base: number, altura: number) {
		this.base = base;
		this.altura = altura;
	}

	calcularArea (): number{
		return this.base * this.altura;
	}
}
