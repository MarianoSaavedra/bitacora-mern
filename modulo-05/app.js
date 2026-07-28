const nombre = "Mariano";

let edad = 32;

const ciudad = "Ciudad de Buenos Aires";

console.log(`Mi nombre es ${nombre} tengo ${edad} años y vivo en la ${ciudad}`);

let temperatura = 26;

if (temperatura > 25) {
	console.log("Hace calor");
} else if (temperatura <= 25 && temperatura >= 10) {
	console.log("Templado");
} else {
	console.log("Hace frío");
}

for (i = 1; i <= 20; i++) {
	console.log(i);
}

for (i = 1; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

for (i = 1; i <= 10; i++) {
	console.log(i * 7);
}

const random = 12;

const numero = random % 2 === 0 ? "Es par" : "Es impar";

console.log(numero);

const nota = 90;

if (nota >= 90) {
	console.log(`Tu nota: "A"`);
} else if (nota >= 75) {
	console.log(`Tu nota: "B"`);
} else if (nota >= 50) {
	console.log(`Tu nota: "C"`);
} else {
	console.log(`Tu nota: "F"`);
}

let numeroWhile = 10;
while (numeroWhile >= 1) {
	console.log(`El numero es ${numeroWhile}`);
	numeroWhile--;
}

const colores = ["rojo", "verde", "azul"];

for (const color of colores) {
	console.log(color.toUpperCase());
}

console.log(false || ("hola" && 0));

for (let index = 1; index <= 100; index++) {
	if (index % 5 === 0 && index % 3 === 0) {
		console.log("FizzBuzz");
	} else if (index % 5 === 0) {
		console.log("Buzz");
	} else if (index % 3 === 0) {
		console.log("Fizz");
	} else {
		console.log(index);
	}
}

let contador = 0;

for (let index = 1; index <= 100; index++) {
	contador += index;
}
console.log(contador);

let numeroRandom = 3;
let numeroPrimo = true;

for (let index = 2; index < numeroRandom; index++) {
	if (numeroRandom % index === 0) {
		numeroPrimo = false;
	}
}

console.log(`Tu numero es primo: ${numeroPrimo}`);

const secreto = 7;
let intento;
let intentos = 0;

while (secreto !== intento) {
	intentos++;
	intento = Number(prompt("Adivina el numero"));
}
console.log(intentos);

const numero1 = Number(prompt("Elige un numero"));
const numero2 = Number(prompt("Elige otro numero"));

const operacion = prompt("Elegi el tipo de operación a realizar");

switch (operacion) {
	case "-":
		console.log(`El resultado es ${numero1 - numero2}`);
		break;
	case "+":
		console.log(`El resultado es ${numero1 + numero2}`);
		break;
	case "*":
		console.log(`El resultado es ${numero1 * numero2}`);
		break;
	case "/":
		if (numero2 === 0) {
			console.log("La division no puede ser nunca por cero.");
		}
		console.log(`El resultado es ${numero1 / numero2}`);
		break;
	default:
		console.log(`Ups intenta nuevamente`);
		break;
}
