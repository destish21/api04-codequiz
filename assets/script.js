var viewHighscho = document.getElementById('individualRecordDiv')
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var timeDisplayArea = document.getElementById("timeDispayArea")
var nextButton = document.getElementById('nextButton');
var startButton = document.getElementById('start-btn')
var result = document.getElementById('result');

var questions =
  [
    {
      question: "1, What does HTMl stand for?",
      answers: [
        "Hyper Text Mark up language",
        "Home Tool Mark up Language",
        "Google Text Mark up language",
        "Hyper links and Text Mark up Language"
      ],
      correctAnswer: "Hyper Text Mark up language"
    },
    {
      question: "2, Choose the correct HTML elemenet for the largest heading?",
      answers: [
        "head",
        "heading",
        "h6",
        "h1"
      ],
      correctAnswer: "h1"
    },
    {
      question: "3, InSide which HTML elenent do we Put the javaScript?",
      answers: [
        "js",
        "scripting",
        "script",
        "javascript"
      ],
      correctAnswer: "script"
    },

    {
      question: "4, Where is the correct place to insert ajavaScript?",
      answers: [
        "The head section",
        "The body section",
        "a & b is answer",
        "any where"
      ],
      correctAnswer: "a & b is answer"
    },
    {
      question: "5, What is correct Syntax for referring to an external Script called xxx.js ?",
      answers: [
        "function = myfunction",
        "functionmyFunction()",
        "function:myfunction",
        "myfunction{}"
      ],
      correctAnswer: "functionmyFunction()"
    }

  ];

var currentQuestion = 0
var score = 0
var totQuestion = questions.length;
var timeTotal = 30;

startButton.addEventListener('click', StartGame);

function StartGame() {
  //1.clear the div content
  container.innerHTML = '';
  //2. start timer
  totalTimerInterval = setInterval(function () {
    timeTotal = timeTotal - 1;
    timeDisplayArea.innerHTML = timeTotal
    if (timeTotal <= 0) {
      clearInterval(totalTimerInterval);
      timeDisplayArea.innerHTML = "0.00";
      container.innerHTML = '';
      storeScore();
    }
  }, 1000);
  getEachQuestions()
}
function getEachQuestions() {

  //3.  display good luck
  //<div class="good">Good Luck!</div>
  var goodLuck = document.createElement('div');
  goodLuck.setAttribute('class', 'good');
  goodLuck.innerHTML = "Good Luck!";
  container.append(goodLuck);

  //4. diplay first question
  //<div id="question" class="question"> </div>
  var myQesDiv = document.createElement('div');
  myQesDiv.setAttribute('class', 'question');
  myQesDiv.setAttribute('id', 'question');
  myQesDiv.innerHTML = questions[currentQuestion].question

  //5. choices arrary display
  //  <label class="choice"> 
  //  <input type="radio" name="choice" value="A" />
  //   <span id="choiceA"></span>
  //   </label>
  var lblChoice = document.createElement('label');
  lblChoice.setAttribute('class', 'choice');

  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    //var mychoices = questions[currentQuestion].answers[i]

    var inA = document.createElement('input')
    var spanA = document.createElement('span')

    inA.setAttribute('type', 'radio');
    inA.setAttribute('name', 'choice');
    inA.setAttribute('value', questions[currentQuestion].answers[i]);
    spanA.setAttribute('id', 'choiceA');
    spanA.innerHTML = questions[currentQuestion].answers[i]
    lblChoice.append(inA, spanA);
  }
  //6. answer button
  //<button id="nextButton" class="next-btn">NextQuestion</button>
  var answerButton = document.createElement('button');
  answerButton.setAttribute('class', 'next-btn');
  answerButton.innerHTML = 'NextQuestion';
  //7. append all to the empty container
  container.append(myQesDiv, lblChoice, answerButton);
  //8. check answer and next question
  answerButton.addEventListener('click', checkAnswerAndNext)
}

var newScore;
function checkAnswerAndNext() {

  var myAnswer = document.getElementsByName('choice')
  var correctA = questions[currentQuestion].correctAnswer

  // if(!val.checked){
  //   alert('please choose your answer!');
  //   return;
  // }
  for (val of myAnswer) {
    if (val.checked) {
      if (val.value === correctA) {
        console.log('correct answer')
        score = score + 5

        //console.log(score)
      } else if (val.value !== correctA) {
        console.log('Wrong answer')
      }
    }
  }

  container.innerHTML = '';
  if (currentQuestion < questions.length - 1) {
    currentQuestion = currentQuestion + 1;

    getEachQuestions()
  } else {
    timeTotal = 0;
  }
}

var myStore = localStorage.getItem('highScore')

function storeScore() {
  var finish = document.createElement('div');
  var h2 = document.createElement('h2');
  h2.innerHTML = 'Great Job!!!'
  finish.append(h2);

  var yourDiv = document.createElement('div');
  var yourName = document.createElement('label')
  yourName.textContent = 'Name: '
  var input = document.createElement('input');
  yourDiv.append(yourName, input);

  var button = document.createElement('button');
  button.setAttribute('id', 'highScore')
  button.innerHTML = 'Save'

  var button2 = document.createElement('button');
  button2.innerHTML = 'reset'
  button2.addEventListener('click', function () {
    document.location.reload();
  })

  container.append(finish, yourDiv, button, button2);

  //create save to local storage 
  button.addEventListener('click', function (e) {
    e.preventDefault();
    var highscores = [];
    if (myStore) {
      highscores = JSON.parse(myStore);
    } else {
      highscores = [];
    }

    const userName = input.value;
    const finalScore = score * 4;
    highscores[(highscores.length)] = {
      user: userName,
      score: finalScore
    }
    highscores.sort(function (a, b) {
      return b.score - a.score;
    })
    window.localStorage.setItem('highScore', JSON.stringify(highscores));
    displayScore(highscores);
  })
}

function displayScore(highscores) {
  document.body.innerHTML = "";
  var newContainer = document.createElement('div');
  newContainer.setAttribute('class', 'container');
  var h2 = document.createElement('h2')
  h2.innerHTML = 'High Score'
  newContainer.append(h2)
  //higDiv = document.createElement('div')
  if (highscores) {
    for (let i = 0; i < highscores.length; i++) {
      var individualRecordDiv = document.createElement('div');

      individualRecordDiv.innerHTML = (i + 1 + ".  " + highscores[i].user + ' = ' + highscores[i].score);
      newContainer.append(individualRecordDiv);
    }
  }
  var home = document.createElement('button');
  home.innerHTML = 'home'
  home.addEventListener('click', function () {
    document.location.reload();
  })

  var clear = document.createElement('button');
  clear.innerHTML = 'clear'
  clear.addEventListener('click', function () {
    window.localStorage.removeItem('highScore');
    individualRecordDiv.innerHTML = "";
  });

  newContainer.append(home, clear)
  document.body.append(newContainer)
}

// getting to the high score
function getMyScores() {
  highscores = JSON.parse(localStorage.getItem('highScore'));
  displayScore(highscores);
}
