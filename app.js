const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersArray = Array.from(letters);
const lettersCont = document.querySelector(".letters");
const theChosenWord = document.querySelector(".word-from span");
const gussWord = document.querySelector(".guss-word");
const theDrwa = document.querySelector(".draw-cont");
const gamwOver = document.querySelector(".game-over");
const winCont = document.querySelector(".win-cont");
const gameOverSpan = document.getElementById("gameOver-span");
let lettersBox;
let wrongTries = 0;
let correctTries = 0;

const words = {
  player: [
    "cristiano ronaldo",
    "messi",
    "benzema",
    "kross",
    "marcelo",
    "kaka",
    "moh sallah",
  ],
  movie: ["inception", "batman", "interstellar", "shutter island", "don jon"],
  actor: ["ashton kutcher", "leonardo dicaprio", "brad pitt", "adel emam"],
};

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "letter";
  let spanText = document.createTextNode(letter);
  span.appendChild(spanText);
  lettersCont.appendChild(span);
  span.addEventListener("click", () => {
    span.classList.add("clicked");
  });
});

const randomKeyNum = Math.floor(Math.random() * 3);
const wordsKeys = Object.keys(words);
const randomKey = wordsKeys[randomKeyNum];
const wordsValues = words[randomKey];
const randomValueNum = Math.floor(Math.random() * wordsValues.length);
const finalRandomWord = wordsValues[randomValueNum];
const arrayFromFinalWord = Array.from(finalRandomWord);
console.log(finalRandomWord.length);

arrayFromFinalWord.forEach((letter, letterIndex) => {
  const span = document.createElement("span");
  gussWord.appendChild(span);
  span.className = "box";
  lettersBox = document.querySelectorAll(".box");
  if (letter === " ") {
    correctTries++
    const space = document.createTextNode("-");
    lettersBox[letterIndex].appendChild(space);
  }
});

const chosenWordSpan = document.createTextNode(randomKey);
theChosenWord.appendChild(chosenWordSpan);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("clicked")) {
    let isTrue = false;
    arrayFromFinalWord.forEach((letter, letterIndex) => {
      if (e.target.innerText == letter) {
        const correctLetter = document.createTextNode(letter);
        lettersBox[letterIndex].appendChild(correctLetter);
        isTrue = true;
        correctTries++;
        console.log(correctTries);
        if (correctTries === finalRandomWord.length) {
          winCont.classList.add("show0");
        }
      }
    });
    if (isTrue === false) {
      wrongTries++;
      theDrwa.classList.add(`show-${wrongTries}`);
      if (wrongTries === 9) {
        gameOverSpan.innerHTML = `the ${randomKey} was ${finalRandomWord}`;
        gamwOver.classList.add("show0");
      }
    }
  }
});
