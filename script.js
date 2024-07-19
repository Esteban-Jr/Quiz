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
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
=======
>>>>>>> Stashed changes

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

    //set options
    //get the length of options
    const optionLen = currentQuestion.options.length
    //push options into availableOptions Array
    for(let i =0; i < optionLen; i++){
        availableOptions.push(i)
    }

    optionContainer.innerHTML = '';
    let animationDelay = 0.15;

    //create options in html
    for(let i = 0; i < optionLen; i++){
        //randomize the options
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]
        //get the position of 'optionIndex' from the availableOptions Array
        const index2 = availableOptions.indexOf(optionIndex);
        //remove the 'optionIndex' from the availableOptions, so that the option doe snot repeat
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = 'option';
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)");
    }

    questionCounter++;
}

//get the result of the option chosen
function getResult(element){
    const id = parseInt(element.id);
    //get the answer by comparing the id of clicked option to the id of answer
    if(id === currentQuestion.answer){
<<<<<<< Updated upstream
>>>>>>> f757b103136623ce5b941c5ec032bc1cbe7807e9
=======
        //set the green colour to the correct answer
        element.classList.add("correct");
        //add the indicator correct mark
        updateAnswerIndicator("correct");
        correctAnswers++;
    }
    else{
        //set the red colour to the incorrect answer
        element.classList.add("incorrect");
        //add the indicator incorrect mark
        updateAnswerIndicator("incorrect");
        

        //if the answer is incorrect, it will reveal the correct answer with the colour green
        const optionLen = optionContainer.children.length;
        for(let i = 0; i < optionLen; i++){
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}

//making all choices unclickable once user has already chosen one of the options
function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i = 0; i < optionLen; i++){
        optionContainer.children[i].classList.add("already-answered");
    }

}

function answersIndicator(){
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for(let i = 0; i < totalQuestion; i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);

    }

}

function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType)

}

function next(){
    if(questionCounter === quiz.length){
        quizOver();
    }
    else{
        getNewQuestion();
    }

}

function quizOver(){
    //hide quiz box
    quizBox.classList.add("hide");
    //show result box
    resultBox.classList.remove("hide");
    quizResult();

}

function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-incorrect").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers/quiz.length) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;

}

function resetQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;

}

function tryAgainQuiz(){
    //hide the resultBox
    resultBox.classList.add("hide");
    //show the quizBox
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();

}

function goToHome(){
    //hide resultBox
    resultBox.classList.add("hide");
    //show homeBox
    homeBox.classList.remove("hide");
    resetQuiz();
}

//    STARTING POINT

function startQuiz(){
    //hide homeBox
    homeBox.classList.add("hide");
    //show the quizBox
    quizBox.classList.remove("hide");
    //first set all the question in availableQuestions Array
    setavailableQuestions();
    //second we call getNewQuestion(); function
    getNewQuestion();
    //to keep score of the answers
    answersIndicator();

}

window.onload = function (){
    homeBox.querySelector(".total-questions").innerHTML = quiz.length;

}
>>>>>>> Stashed changes
