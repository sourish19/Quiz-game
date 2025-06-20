const questionSet = [
  {
    question: "Which is the longest animal in the world?",
    option: ["Shark", "Blue Whale", "Elephant", "Giraffe"],
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
const questionContainer = document.querySelector("#question-container");
const nextBttn = document.querySelector(".nextBttn");
const mainContainer = document.querySelector(".mainContainer");
const quizCompleteContainer = document.querySelector(
  ".quiz-complete-container",
);
const correctAnswersElement = document.querySelector(".correct-answers");
const wrongAnswersElement = document.querySelector(".wrong-answers");
const playAgainBttn = document.querySelector(".play-again");

let curr_Question = 0;
let next_flag = false;
let correct_option = null;

let wrongOptSelected = 0;
let correctOptSelected = 0;

function loadContents() {
  if (curr_Question < questionSet.length) {
    for (let i = curr_Question; i <= curr_Question; i++) {
      correct_option = questionSet[i].answer;

      questionContainer.innerHTML = `
        <div
          class="question text-blue-800 text-2xl font-bold"
          style="font-family: &quot;Poppins&quot;, sans-serif"
        >${questionSet[i].question}</div>

        <div
          class="flex flex-col gap-3 my-5"
          style="font-family: &quot;Poppins&quot;, sans-serif"
        >
        ${getOptions(i)}
        </div>
      
      `;
    }
    curr_Question++;
  } else {
    mainContainer.classList.toggle("hidden", true);
    quizCompleteContainer.classList.toggle("hidden", false);
    correctAnswersElement.innerHTML = `Correct: ${correctOptSelected}`;
    wrongAnswersElement.innerHTML = `Wrong: ${wrongOptSelected}`;
  }
  return;
}

function getOptions(index) {
  let allOptions = questionSet[index].option
    .map((e) => {
      return `<div class="Options">${e}</div>`;
    })
    .join("");

  return allOptions;
}

function findCorrectOption() {
  const question = document.querySelector(".question");
  const options = document.querySelectorAll(".Options");
  const correct_answer = questionSet.find((val) => {
    if (val.question == question.innerHTML) {
      return val;
    }
  });
  options.forEach((e) => {
    if (e.innerHTML === correct_answer.answer) {
      e.classList.add("bg-[#81ff94]");
    }
  });
  return;
}

questionContainer.addEventListener("click", (e) => {
  const clicked_option = e.target;
  if (!next_flag) {
    if (
      clicked_option.className === "Options" &&
      clicked_option.innerHTML === correct_option
    ) {
      clicked_option.classList.add("bg-[#81ff94]");
      next_flag = true;
      correctOptSelected++;
    } else if (
      clicked_option.className === "Options" &&
      clicked_option.innerHTML != correct_option
    ) {
      findCorrectOption();
      clicked_option.classList.add("bg-[#ff0000]");
      next_flag = true;
      wrongOptSelected++;
    }
  }
});

nextBttn.addEventListener("click", (e) => {
  if (next_flag) {
    next_flag = false;
    loadContents();
  }
});

playAgainBttn.addEventListener("click", (e) => {
  location.reload();
});

loadContents();
