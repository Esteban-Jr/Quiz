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
