var startButton = document.querySelector('.start-button')
var timer = document.querySelector('.timer')
var question = document.querySelector('.question')
var questionContainer = document.querySelector('.question-container')
var choices = document.querySelector('.choices')

//timer starts function, questions displayed function, click event
var secondsLeft = 90;
//function
var questions1 = 'How do you alert people in JavaScript?'
var options1 = ['boolean', 'numbers', 'string', 'alert'];
var answer1 = "alert"

var questions2 = 'What is a string in code?'
var options2 = ['rope', 'words', 'thread', 'yarn'];
var answer = "words"

var questions3 = 'How do you alert people in JavaScript?'
var options3 = ['boolean', 'numbers', 'string', 'alert'];
var answer = "alert"

function startTimer() {
    //timer goes here 09 seconds left
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
    //create interval
    //and 
    console.log("startTimer")
}

function displayQuestion() {
    //display question

    questionContainer.classList.remove("hide")

    question.textContent = questions1;
    for (var i = 0; i < options1.length; i++) {
        var optionButton = document.createElement("button");
        optionButton.textContent = options1[i];
        choices.appendChild(optionButton);

        optionButton.addEventListener("click", function () {
            
            if (this.textContent === answer1) {
                console.log("correct");
            } else {
                console.log("Wrong");
            }
        });
    }
    console.log("displayQuestion");
}

startButton.addEventListener("click", function () {
    startTimer();
    displayQuestion();
})

    //display choices
    //an array of object on
    //inside each object correct choices --create button and display text on button
   // append.button on choices.variable--
   //inside forloop, create click event for answer button--check if answer if correct or not-- and wrong ones
    //display certain text on question global scope
    //medium.com for arrays/ storing local data


