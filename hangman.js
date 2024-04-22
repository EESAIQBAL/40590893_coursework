/* Start of Hangman Section */

const words = [
  "harry",
  "hermione",
  "ron",
  "dumbledore",
  "voldemort",
  "snape",
  "hedwig",
  "gryffindor",
  "slytherin",
  "hufflepuff",
  "ravenclaw",
  "hogwarts",
  "quidditch",
  "wand",
  "patronus",
  "dementor",
  "expelliarmus",
  "lumos",
  "expecto patronum",
  "wingardium leviosa",
  "avada kedavra",
  "alohomora",
  "imperio",
  "crucio",
  "accio",
  "incendio",
  "protego",
  "petrificus totalus",
  "stupefy",
  "sectumsempra",
  "obliviate",
];

let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let incorrectGuesses = 0;
// Function to Show Length of Word

function displayWord() {
  let display = "";
  for (let letter of chosenWord) {
    if (guessedLetters.includes(letter)) {
      display += letter + " ";
    } else {
      display += "_ ";
    }
  }
  document.getElementById("hangmanWord").innerText = display;
}

// Function to Carry Check Guessed Letters Against The Chosen Word And Alert The Player if They Won on Loss

function checkLetter() {
  const letterInput = document
    .getElementById("letterInput")
    .value.toLowerCase();
  if (!letterInput.match(/[a-z]/)) {
    alert("Please enter a valid letter.");
    return;
  }
  if (guessedLetters.includes(letterInput)) {
    alert("You already guessed that letter!");
    return;
  }
  guessedLetters.push(letterInput);
  if (!chosenWord.includes(letterInput)) {
    incorrectGuesses++;
    document.getElementById("incorrectGuesses").innerText = incorrectGuesses;
    if (incorrectGuesses >= 6) {
      alert("Game Over! The word was: " + chosenWord);
      resetGame();
      return;
    }
  }
  displayWord();
  if (chosenWord.split("").every((letter) => guessedLetters.includes(letter))) {
    alert(
      "Congratulations! You guessed the word correctly! It was: " + chosenWord
    );

    resetGame();
  }
  document.getElementById("letterInput").value = "";
}

function resetGame() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  incorrectGuesses = 0;
  displayWord();
  document.getElementById("incorrectGuesses").innerText = incorrectGuesses;
}

// Allow User To Use 'Enter' Key to Submit Guess

document
  .getElementById("letterInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of the Enter key (i.e., submitting the form)
      checkLetter(); // Call the checkLetter function to submit the guess
    }
  });

/* End Of Hangman Section */
