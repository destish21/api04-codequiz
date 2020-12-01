var container = document.getElementById('quizContainer');
console.log(container)
var questionEl = document.getElementById('question');
var time = document.getElementById('time-disply')
var choiceA = document.getElementById('choiceA');
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');
var nextButton = document.getElementById('nextButton');
var startButton = document.getElementById('Start-btn')
var result = document.getElementById('result');

var currentQuestion = 0
var score = 0
var totQuestion = question.length;
var count = 17;
var timePerQuestion = 17;
var timeTotal = (17 * currentQuestion.length);

var currentQuestion = function myQuiz() {
  [
    {
      question: "What does HTMl stand for?",
      answers: {
        a: "hyper Text Mark up language",
        b: "Home Tool Mark up Language",
        c: "Google Text Mark up language",
        d: "Hyper links and Text Mark up Language"
      },
      correctAnswer: "a"
    },
    {
      question: "Choose the correct HTML elemenet for the largest heading?",
      answers: {
        a: "<head>",
        b: "<heading>",
        c: "<h6>",
        d: "<h1>"
      },
      correctAnswer: "d"
    },
    {
      question: "InSide which HTML elenent do we Put the javaScript?",
      answers: {
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javascript>"
      },
      correctAnswer: "c"
    },


    {
      question: "Where is the correct place to insert ajavaScript?",
      answers: {
        a: "<The head section>",
        b: "<The body section>",
        c: "<a & b is answer>",
        d: "<any where>"
      },
      correctAnswer: "c"
    },
    {
      question: "What is correct Syntax for referring to an external Script called xxx.js ?",
      answers: {
        a: "function = myfunction",
        b: "functionmyFunction()",
        c: "function:myfunction",
        d: "myfunction{}"
      },
      correctAnswer: "b"
    }

  ];
}

// startButton.addEventListener('click', StartGame);
// function  StartGame() {
//   questionContainer.textContent = "currentquestion";
//   currentQuestion = 0;
//   return;

// }

function loadQuestion(questionIndex) {
  var q = questions[questionsIndex];
  questionEl.textContent = (questionIndex + 1) + ',' + q.question;
  choA.textContent = q.choiceA;
  choB.textContent = q.choiceB;
  choC.textContent = q.choiceC;
  choD.textContent = q.choiceD;

  time = timeTotal;
  totalTimerInterval = setInterval(function () {
    time = time - 1;
    timeDisplayArea.innerHTML = time
    if (time <= 0) {
      clearInterval(totalTimerInterval);
      timeDisplayArea.innerHTML = "0.00";
      renderLocalStorage();
    }
  }, 17000);
};

function nextQuestionClick() {
  //start btn click clears the front page container to be replaced by questions and start timer
  nextQuestion.addEventListener("click", function () {
    questionContainer.textContent = "";
    currentQuestion = 0;
    return;
  })
};

function loadNextQuestion() {
  var selectedChoice = document.querySelector('input[type=radio]:checked');
  if (!selectedChoice) {
    alert('please select your answer!');
    return;
  }
  var answer = selectedChoice.value;
  if (questions[currentQuestion].answer == answer) {
    score += 10;

  }
  selectedChoice.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestion - 1) {
    nextButton.textContent = 'Finsh';
  }
  if (currentQuestion = totQuestions) {
    container.style.display = 'none';
    resultCont.style.display = '';
    resultCont.textContent = 'Your Score' + score;
    return;
  }
  loadQuestion(currentQuestion);
}
loadcurrentQuestion();
// myQuiz();
loadNextQuestion(currentQuestion);

