var timer = document.querySelector("#timer");
var introBox = document.querySelector("#introBox");
var introTitle = document.querySelector("#introTitle");
var introText = document.querySelector("#introText");
var startBtnArea = document.querySelector("#startBtnArea");
var startBtn = document.querySelector("#startBtn");
var quiz = document.querySelector("#quiz");
var questions = document.querySelector("#questions");
var answers = document.querySelector("#answers");
var results = document.querySelector("#results");
var resultsText = document.querySelector("#resultsText");
var introDiv;
var intro = document.getElementById("introBox")
var quiz = document.getElementById("quizBox")
var Questions = [
    {
        title: "How would you camel case the word Little Red Riding Hood",
        choices: ["LittleredridinghooD", "littleRedRidingHood", "littleredridingHood", "LittleREDRIDINGhood"],
        answer: ["LittleRedRidingHood"]
    }, 

    {
        title: "what is the arithmitic operator for increment",
        choices: ["+", "*", "++", "/"],
        answer: ["++"] 
    }, 

    {
        title: "what is NOT a mouse event",
        choices: ["dblclick", "mousemove", "click", "mousehover"],
        answer: ["mousehover"]
    },

    {
        title: "What does DOM stand for",
        choices: ["Document Object Mark", "Development Object Modolus", "Document Object Model", "Data objective Mode"],
        answer: ["Document Object Model"]
    },

    {
        title: "What is the 'Is not equal to' symbol",
        choices: ["===", "!=", "==", "!=="],
        answer: ["!="]
    }, 
]

var intro = document.getElementById("introBox")
var quiz = document.getElementById("quizBox")
var questionsToSh
var currentIndex = 0;
 startBtn.onclick = startQuiz

function startQuiz() {
        intro.setAttribute("style", "display: none;");
        quiz.setAttribute("style", "display: block;");
    }



    function retrieveQuestion() {
        var questionToShow = questions[currentIndex]
        questionToShow.choices.forEach(function (answer){
            var answerButtons = document.createElement(button);
            answerButtons.setAttribute("class", "answer");
            answerbuttons.setAttribute("value", answer);
            answerButtons.onclick = 
        }