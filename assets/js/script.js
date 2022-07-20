// Declaring variables 
var timerEl = document.getElementById('timer');
var landingEl = document.getElementById('Landing-Page');
var startBtnEl = document.getElementById('start-button');
var quizEl = document.getElementById('Quiz');
var missionCompleteEl = document.getElementById('mission-complete');
var saveStatesEl = document.getElementById('save-states');
var nextBtnEl = document.getElementById('next');
var messageEl = document.getElementById('message');
var initials = document.getElementById('save-area');
var scoreLineEl = document.getElementById('score');
var saveBtnEl = document.getElementById('save-button');
var leaderboardsEl = document.getElementById('save-states');
var leaderListEl = document.getElementById('leaderboard-list');
var playAgainEl = document.getElementById('play-again');
var score = 0;

// create timer variable
var timeInterval = null;

// create a function to display and add functionality to timer
function countdown() {
    if (timeInterval == null) {
        var timeLeft = 30;

        timeInterval = setInterval(function () {
            timeLeft--;
            timerEl.innerHTML = "Time Remaining: " + timeLeft;
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);
        timeInterval = null;
        quizEl.style.display = "none";
        missionCompleteEl.style.display = "block";
      }
    }, 1000);
    }
}

//stop the timer when quiz is completed
function stop() {
    clearInterval(timeInterval);
    timeInterval = null;
}


// Handle start button
startBtnEl.onclick = () =>{
    landingEl.style.display = "none";
    quizEl.style.display = "block";
    
// Calling countdown function
countdown();
}

// Create an array of questions and give objects properties
var questions = [
    {   
        question:"Commonly used data types DO NOT include:" ,
        choices:["strings","booleans","alerts","numbers"],
        answer:"alerts"
    },

    {   
        question:"The condition in an if/else statement is enclosed with:" ,
        choices:["quotes","curly brackets","parenthesis","square brackets"],
        answer:"parenthesis"
    },
    {   
        question:"Arrays in Javascript can be used to store:" ,
        choices:["numbers and strings","other arrays","booleans","all of the above"],
        answer:"all of the above"
    },
    {   
        question:"String values must be enclosed within what when being assigned to variables?" ,
        choices:["commas","curly brackets","quotes","parenthesis"],
        answer:"quotes"
    },
]
// create variables for questions and option elements
var questionEl = document.getElementById('question');
var option1El = document.getElementById('option-1');
var option2El = document.getElementById('option-2');
var option3El = document.getElementById('option-3');
var option4El = document.getElementById('option-4');


// setting initial question
var i = 0;
function setQuestion() {
questionEl.innerHTML = questions[i].question;
option1El.innerHTML = questions[i].choices[0];
option2El.innerHTML = questions[i].choices[1];
option3El.innerHTML = questions[i].choices[2];
option4El.innerHTML = questions[i].choices[3];
}
// call function to set the initial question
setQuestion();

// handle next button
nextBtnEl.onclick = () =>{
    // handles next button on last question
    if(i>2){
        timerEl.style.display = "none";
        stop();
        quizEl.style.display = "none";
        missionCompleteEl.style.display = "block";
        console.log(score);
        var final = score*100 + "%"
        console.log(final);
        scoreLineEl.innerHTML = "Score: " + final;

    // display next question upon clicking next
    } else{
        i++;
        console.log(i);
        console.log(questions[i].answer);
        messageEl.innerHTML = ""
        setQuestion();
        option1El.disabled = false;
        option2El.disabled = false;
        option3El.disabled = false;
        option4El.disabled = false;
    }
}

console.log(option1El.innerHTML);

// handling answer selection & storing score
option1El.onclick = () =>{
    // add to score if correct
    if(option1El.innerHTML === questions[i].answer) {
        messageEl.innerHTML = "Correct!";
        score+=.25
    } else{
        messageEl.innerHTML = "Wrong";
    }
    option2El.disabled = true;
    option3El.disabled = true;
    option4El.disabled = true;
    console.log(questions[i].answer);
 }
 option2El.onclick = () =>{
    // add to score if correct
    if(option2El.innerHTML === questions[i].answer) {
        messageEl.innerHTML = "Correct!";
        score+=.25
    } else{
        messageEl.innerHTML = "Wrong";
    }
    option1El.disabled = true;
    option3El.disabled = true;
    option4El.disabled = true;
 }
 option3El.onclick = () =>{
    // add to score if correct
    if(option3El.innerHTML === questions[i].answer) {
        messageEl.innerHTML = "Correct!";
        score+=.25
    } else{
        messageEl.innerHTML = "Wrong";
    }
    option2El.disabled = true;
    option1El.disabled = true;
    option4El.disabled = true;
 }
 option4El.onclick = () =>{
    // add to score if correct
    if(option4El.innerHTML === questions[i].answer) {
        messageEl.innerHTML = "Correct!";
        score+=.25
    } else{
        messageEl.innerHTML = "Wrong";
    }
    option2El.disabled = true;
    option3El.disabled = true;
    option1El.disabled = true;
 }

//  handle saving scores and displaying in list
 saveBtnEl.onclick = () =>{
    var entry = initials.value;
    var final = score*100 + "%"
    console.log(entry);
    localStorage.setItem("Save-State",[final + "-" + entry]);
    missionCompleteEl.style.display = "none";
    leaderboardsEl.style.display = "block";
    var li = document.createElement("li");
    li.textContent = localStorage.getItem("Save-State")
    leaderListEl.appendChild(li);

    // Convert list  into an array to be stored in local storage and calling functions to form array
    var listItems = document.getElementById('leaderboard-list').getElementsByTagName('li'),
    scoreArray = map(listItems, getText);

    // create a function to map list of scores into an array
    function map(arrayLike, fn) {
        var ret = [], i = -1, len = arrayLike.length;
        while (++i < len) ret[i] = fn(arrayLike[i]);
        return ret;
    }
        localStorage.setItem("savedArray",JSON.stringify(scoreArray));

    // function to get the text to be put into array
    function getText(node) {
        if (node.nodeType === 3) return node.data;
        var txt = '';
        if (node = node.firstChild) do {
            txt += getText(node);
        } while (node = node.nextSibling);
        return txt;
    }
    localStorage.setItem("savedArray",JSON.stringify(scoreArray));
    // call init function
    init();
 }
// create init function to display stored array upon refreshing page
function init() {
    var storedScores = JSON.parse(localStorage.getItem("savedArray"));
    if (storedScores !== null) {
        scoreArray = storedScores
    }

    // function to make initial stored array into a list to be displayed on leaderboards
    function initList(array) {
            let list = null;
            for (let i = array.length - 1; i >= 0; i--) {
                list = { value: array[i], rest: list };
            }
            return list;
        }
        console.log(initList(storedScores));

}

// handle play again button to restart the game with a new countdown
 playAgainEl.onclick = () =>{
    score = 0;
    i = 0;
    messageEl.innerHTML = "";
    option1El.disabled = false;
    option2El.disabled = false;
    option3El.disabled = false;
    option4El.disabled = false;
    leaderboardsEl.style.display = "none";
    quizEl.style.display = "block";
    setQuestion();
    timerEl.style.display = "block";
    countdown();
 }









