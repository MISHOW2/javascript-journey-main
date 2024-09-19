const questionsList = [
  {
    question: "What is the capital of France?",
    answers: [      
      {text:"Paris", correct:true},
      {text:"London", correct:false},
      {text:"Berlin", correct:false},
      {text:"Rome", correct:false}
    ] 
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: [
      {text:"William Shakespeare", correct:true},
      {text:"Ernest Hemingway", correct:false},
      {text:"Charles Dickens", correct:false},
      {text:"George Orwell", correct:false}
   ]
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      {text:"1", correct:false},
      {text:"2", correct:true},
      {text:"3", correct:false},
      {text:"4", correct:false}
    ]
  }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answerBtn");
const nextBtn = document.getElementById("nextBtn");
nextBtn.style.display = "none";

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.style.display = "none"; // Hide the Next button initially
  showQuestion();
}


function showQuestion() {
  const currentQuestion = questionsList[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;
  answerBtn.innerHTML = ''; // Clear previous answer buttons

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = answer.text;
    answerBtn.appendChild(button);

    button.addEventListener("click", () => {
      if (answer.correct) {
        score++;
      }
      nextBtn.style.display = "block";
    });
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsList.length) {
    showQuestion();
  } else {
    // Quiz ended, display score
    questionElement.innerHTML = `Quiz ended! Your score is ${score}/3`;
    answerBtn.innerHTML = '';
    nextBtn.style.display = "none";
  }
});
startQuiz();