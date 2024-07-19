const quiz = [
  {
      q:'Whos is the GOAT of football?',
      options:['Lionel Messi','Cristiano Ronaldo','Neymar Jr','Eden Hazard'],
      answer: 0
  },
  {
      q:'What is the best football league in the world?',
      options:['La Liga','Premier League','Ligue 1','Bundesliga'],
      answer: 1
  },
  {
      q:'Which country won the Euros 2024?',
      options:['France','England','Spain','Portugal'],
      answer: 2
  },
  {
      q:'Who won the Copa America 2024?',
      options:['Colombia','Uruguay','Canada','Argentina'],
      answer: 3
  },
  {
      q:'Who has the most Ballon d\'Or?',
      options:['Lionel Messi','Lev Yashin','Johan Cruyff','Zinedine Zidane'],
      answer: 0
  },
  {
      q:'What football has the most Champions league trophies?',
      options:['Barcelona','Real Madrid','Chelsea','Arsenal'],
      answer: 1
  },
  {
      q:'How many World Cups have there been?',
      options:['54','17','22','31'],
      answer: 2
  },
  {
      q:'Who is the All time Premier League goal scorer?',
      options:['Harry Kane','Sergio Aguero','Frank Lampard','Alan Shearer'],
      answer: 3
  },
  {
      q:'Who is the mst decorated player of all time?',
      options:['Lionel Messi','Dani Alves','Andres Iniesta','David Alaba'],
      answer: 0
  },
  {
      q:'What month do the top european leagues start?',
      options:['May','August','July','September'],
      answer: 1
  }
]

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//push the question into setavailableQuestions Array
function setavailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i = 0; i < totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

//setting the question number, questions and options.
function getNewQuestion(){
    //question number
    questionNumber.innerHTML = 'Question ' + (questionCounter + 1) + ' of ' + quiz.length;

    //asking the quetsions
    //randomizing questions
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //getting position 'questionIndex' from availableQuestion Array
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the question from questionIndex from availableQuestion Array, so question won't repeat
    availableQuestions.splice(index1, 1);
