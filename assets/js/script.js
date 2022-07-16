var timerEl = document.getElementById('timer');
var landingEl = document.getElementById('Landing-Page');
var startBtnEl = document.getElementById('start-button');
var quizEl = document.getElementById('Quiz');


// Handle start button
startBtnEl.onclick = () =>{
    landingEl.remove();
    quizEl.style.display = "block";

    // Timer Function set for 60s. To be called after clicking Start Quiz button
    function countdown() {
        var timeLeft = 4;
        var timeInterval = setInterval(function () {
          timeLeft--;
          timerEl.innerHTML = "Time Remaining: " + timeLeft;
          if(timeLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timeInterval);
            timerEl.innerHTML = "GAME OVER";
          }
        }, 1000);
      }
    // Calling countdown function
    countdown();

}
