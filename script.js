const questionSet = [
  {
    question: "Which is the longest animal in the world?",
    option: ["Shark", "BlueWhale", "Elephant", "Giraffe"],
    answer: "Blue Whale",
  },
  {
    question: "Which is the Smallest Country in the World",
    option: ["Vatican City", "Nepal", "India", "Australia"],
    answer: "Nepal",
  },
  {
    question: "Which is the largest dessert in the World",
    option: ["Kalahari", "Gobi", "Sahara", "Antartica"],
    answer: "Sahara",
  },
  {
    question: "Which is the smallest Continent in the World",
    option: ["Asia", "Australia", "America", "Europe"],
    answer: "Australia",
  },
];
const question = document.querySelector(".question");
const choices = document.querySelectorAll(".choices");
const nextBttn = document.querySelector(".nextBttn");

let flag = true;
let questionAlreadyAnswered = [];
//GENERATE A RANDOME QUESTION
const minValue = 0;
const maxValue = 4;
let randomNumber = (Math.random() * (maxValue - minValue) + minValue).toFixed(
  0,
);

const loadQuestions = () => {
  questionAlreadyAnswered.push(randomNumber); // PUSH LOADED QUESTION NUMBER
  question.innerText = questionSet[randomNumber].question; // LOAD QUESTION

  // LOAD OPTIONS
  for (let i = 0; i < choices.length; i++) {
    for (let j = i; j <= i; j++) {
      choices[j].innerHTML = questionSet[randomNumber].option[j];
    }
  }
};

const correctAnswer = () => {
  choices.forEach((e) => {
    if (e.innerHTML === questionSet[randomNumber].answer) {
      e.classList.add("bg-[#81ff94]");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadQuestions();
});

choices.forEach((e) => {
  if (flag === true) {
    e.addEventListener("click", () => {
      if (e.innerHTML === questionSet[randomNumber].answer) {
        e.classList.add("bg-[#81ff94]");
      } else {
        e.classList.add("bg-pink-500");
        correctAnswer();
      }
    });
  }
});

// nextBttn.addEventListener("click", () => {
//   nextBttn.classList.add("bg-pink-500");
//   nextBttn.classList.remove("bg-blue-950");
// });
