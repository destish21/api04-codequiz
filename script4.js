const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

setTimeout(function() {
    console.log('Time is up!')
}, 5000)

// var div = document.getElementById('target')
// var count = 100
// setInterval(function(){
//     count++
//     div.innetText = count + 'seconds have passed'
//     // console.log( count + " x seconds have passed")
// }, 1000)


var currentQuestion = [
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
  
  function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
        for(letter in currentQuestion.answers){
  
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
};

quizContainer.innerHTML = output.join('');

