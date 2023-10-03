let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
countH = 0
countG = 0

  function randomImg() {
      if ((countH % 10 === 0 && countH > 0) || (countG % 10 === 0 && countG > 0)) {
          document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?basketball')";
      } else {
         // Set a default background image when countG or countH is not divisible by 5 or is not greater than 0
          document.body.style.backgroundImage = "url('basket.jpg')";
      }
  }

function checkPoints(){
    if (countH > countG) {
        homeEl.style.color = 'green'
        guestEl.style.color = 'red'
    } else if (countG > countH) {
        guestEl.style.color = 'green'
        homeEl.style.color = 'red'
    } else {
        guestEl.style.color = '#F94F6D'
        homeEl.style.color = '#F94F6D'
    }
}
function reset() {
    countH = 0
    countG = 0
    homeEl.textContent = countH
    guestEl.textContent = countG
    guestEl.style.color = '#F94F6D'
    homeEl.style.color = '#F94F6D'
    document.body.style.backgroundImage = "url('basket.jpg')"
    resetTimer()
    startButton.disabled = false;
    pauseButton.disabled = false;
    stopButton.disabled = false;
    resetButton.disabled = false;    
}
function addOneHome(){
    countH += 1
    homeEl.textContent = countH
}

function addTwoHome(){
    countH += 2
    homeEl.textContent = countH
}

function addThreeHome(){
    countH += 3
    homeEl.textContent = countH
}

function addOneGuest(){
    countG += 1
    guestEl.textContent = countG

}

function addTwoGuest(){
    countG += 2
    guestEl.textContent = countG
    
}

function addThreeGuest(){
    countG += 3
    guestEl.textContent = countG
    
}


        var timerInterval;
        var minutesInput = document.getElementById('min');
        var secondsInput = document.getElementById('sec');
        var startButton = document.getElementById('start');
        var pauseButton = document.getElementById('pause');
        var stopButton = document.getElementById('stop');
        var resetButton = document.getElementById('reset');
        
        startButton.addEventListener('click', startTimer);
        pauseButton.addEventListener('click', pauseTimer);
        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);
        
        function startTimer() {
            var minutes = parseInt(minutesInput.value);
            var seconds = parseInt(secondsInput.value);
            var totalSeconds = minutes * 60 + seconds;
        
            if (totalSeconds <= 0) {
                return;
            }
        
            startButton.disabled = true;
            pauseButton.disabled = false;
            stopButton.disabled = false;
            resetButton.disabled = true;
        
            timerInterval = setInterval(function () {
                minutes = Math.floor(totalSeconds / 60);
                seconds = totalSeconds % 60;
        
                minutesInput.value = minutes;
                secondsInput.value = seconds < 10 ? '0' + seconds : seconds;
        
                if (totalSeconds <= 0) {
                    clearInterval(timerInterval);
                    pauseButton.disabled = true;
                    resetButton.disabled = false;
                }
        
                totalSeconds--;
            }, 1000);
        }
        
        function pauseTimer() {
            clearInterval(timerInterval);
            startButton.disabled = false;
            pauseButton.disabled = true;
        }
        
        function stopTimer() {
            clearInterval(timerInterval);
            minutesInput.value = 0;
            secondsInput.value = '00';
            startButton.disabled = false;
            pauseButton.disabled = true;
            stopButton.disabled = true;
            resetButton.disabled = false;
        }
        
        function resetTimer() {
            clearInterval(timerInterval);
            minutesInput.value = 12;
            secondsInput.value = '00';
            startButton.disabled = false;
            pauseButton.disabled = true;
            stopButton.disabled = true;
            resetButton.disabled = true;
        }
