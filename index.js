import { prompt } from "./prompt.js";

// Fonction pour afficher les règles :
const displayRules = () => {
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
};

// Fonction pour générer un nombre aléatoire :
const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Fonction principale pour jouer au jeu :
const playGame = () => {
  // 1: Afficher les règles :
  displayRules();

  // 2: Générer un nombre aléatoire :
  const targetNumber = generateRandomNumber(0, 100);

  // 3: Compteur d'essais :
  let userAttempts = 1;

  // 4: Fonction récursive si le nombre choisi n'est pas bon :
  const guessAgain = () => {
    // Nombre choisi par le user :
    const enteredNumber = Number(prompt("\n> Enter a number : "));

    // Si le nombre n'est pas valide, demander à nouveau de choisir entre 0 et 100 :
    if (isNaN(enteredNumber) || enteredNumber > 100 || enteredNumber < 0) {
      console.log("Choose a number between 0 and 100 !");
      return guessAgain();
    }

    // Si le nombre choisi est plus petit ou plus grand :
    if (enteredNumber < targetNumber || enteredNumber > targetNumber) {
      console.log(
        `The entered number ${
          enteredNumber < targetNumber ? " is 📉 too low" : "is 📈 too big"
        }`
      );
      console.log(`${userAttempts < 2 ? "Try : " : "Tries : "}`, userAttempts);
      // Si le nombre choisi est égal au nombre aléatoire :
    } else {
      // Gestion du pluriel en fonction du nombre d'essais
      console.log(
        `You've won in ${
          userAttempts > 1 ? `${userAttempts} tries` : `${userAttempts} try`
        } ! 🎉`
      );
      askToStartANewGameOrQuit();
    }
    userAttempts++;
    guessAgain();
  };
  guessAgain();
};

// Fonction pour reset zt relancer ou quitter le programme :
const askToStartANewGameOrQuit = () => {
  // Demander à relancer une partie :
  const answer = prompt("Do you want to play again (yes/no) ? ").toLowerCase();

  // Forcer à répondre par "yes" ou "no" :
  if (answer !== "yes" && answer !== "no") {
    console.log("Answer with yes or no !");
    askToStartANewGameOrQuit();
  } else if (answer === "yes") {
    // Relancer le jeu :
    playGame();
  } else {
    process.exit(1);
  }
};

// Démarrer le jeu :
playGame();
