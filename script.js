// 🦁 Import cette function
import { prompt } from "./helper.js";

console.log("ADDITION-MASTER ™️");

// 🦁 Utilise la function "prompt" pour demander le premier nombre à l'utilisateur

// 🦁 Stocke le résultat dans une variable "firstNumber" et utilise `Number()` pour convertir la valeur en nombre
let firstNumber = Number(prompt("un premier nombre ?"));
// 💡 await prompt('Enter your name: ') permet de récupérer la valeur saisie par l'utilisateur
let name = await prompt("Enter your name:");
// 🦁 Fait la même chose pour la variable "secondNumber"
let secondNumber = Number(prompt("un second nombre ?"));
// 🦁 Affiche l'addition des deux nombres
let result = firstNumber + secondNumber ;


