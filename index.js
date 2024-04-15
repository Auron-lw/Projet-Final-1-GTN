import { prompt } from "./prompt.js";

console.log(`
$ node index.js

Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀
`);

// Générer un nombre aléatoire :
const targetNumber = Math.floor(Math.random() * 100);

// Compteur d'essai :
let userAttempts = 1;

// Fonction récursive si le nombre choisi n'est pas bon :
const guessAgain = () => {
  // Nombre choisi par le user :
  const enteredNumber = Number(prompt("\nEnter a number : "));

  // Si le nombre n'est pas valide, demander à nouveau de choisir entre 0 et 100 :
  if (Number.isNaN(enteredNumber) || enteredNumber > 100 || enteredNumber < 0) {
    console.log("Choose a number between 0 and 100 !");
    return guessAgain();
  }

  // Si le nombre choisi est plus petit :
  if (enteredNumber < targetNumber) {
    console.log("The entered number is 📉 too low");
    console.log("Number of user attempts : ", userAttempts++);
    return guessAgain();
  }

  // Si le nombre choisi est plus grand :
  if (enteredNumber > targetNumber) {
    console.log("The entered number is 📈 too big");
    console.log("Number of user attempts : ", userAttempts++);
    return guessAgain();
  }

  // Si le nombre choisi est égal au nombre aléatoire :
  if (enteredNumber === targetNumber) {
    // Gestion du pluriel en fonction du nombre d'essais
    console.log(
      `You've won in ${
        userAttempts > 1 ? `${userAttempts} tries` : `${userAttempts} try`
      } ! 🎉`
    );
  }
};
guessAgain();
