var timerEl = document.getElementById('timer');
var landingEl = document.getElementById('Landing-Page');
var startBtnEl = document.getElementById('start-button');
var quizEl = document.getElementById('Quiz');
var missionCompleteEl = document.getElementById('mission-complete');
var saveStatesEl = document.getElementById('save-states');
var nextBtnEl = document.getElementById('next');
var messageEl = document.getElementById('message');
var score = 0;
var initials = document.getElementById('save-area');
var scoreLineEl = document.getElementById('score');
var saveBtnEl = document.getElementById('save-button');
var leaderboardsEl = document.getElementById('save-states');
var leaderListEl = document.getElementById('leaderboard-list');


// Handle start button
startBtnEl.onclick = () =>{
    landingEl.remove();
    quizEl.style.display = "block";

    // Timer Function set for 60s. To be called after clicking Start Quiz button
    function countdown() {
        var timeLeft = 60;
        var timeInterval = setInterval(function () {
          timeLeft--;
          timerEl.innerHTML = "Time Remaining: " + timeLeft;
          if(timeLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timeInterval);
            timerEl.innerHTML = "GAME OVER";
            quizEl.remove();
            missionCompleteEl.style.display = "block";
          }
        }, 1000);
      }
    // Calling countdown function
    countdown();

}

// handle questions
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
// display questions and answer options
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

// display next question upon clicking next
    
nextBtnEl.onclick = () =>{
    if(i>2){
        timerEl.remove();
        quizEl.remove();
        missionCompleteEl.style.display = "block";
        console.log(score);
        var final = score*100 + "%"
        console.log(final);
        scoreLineEl.innerHTML = "Score: " + final;
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

//  handle saving scores
 saveBtnEl.onclick = () =>{
    var entry = initials.value;
    console.log(entry)
    localStorage.setItem("Save-State",[final + "-" + entry])
    missionCompleteEl.remove();
    leaderboardsEl.style.display = "block";
    var li = document.createElement("li");
    li.textContent = localStorage.getItem("Save-State")
    leaderListEl.appendChild(li);
 }









