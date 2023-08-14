// Assignment code here

const questionElement = document.getElementById('question');
const choicesForm = document.getElementById('choices');
const startButton = document.getElementById('startButton');
const timerElement = document.getElementById('timer');
const timeLeftElement = document.getElementById('timeLeft');
const highScoreElement = document.getElementById('highScore');
const highScoreForm = document.getElementById('highScoreForm');
const initialsInput = document.getElementById('initials');
const submitScoreButton = document.getElementById('submitScore');

let timeLeft = 30; // Initial time in seconds
let intervalId = null; // Store the interval ID
let score = 0; // Current score

const questions = [
  {
    question: 'What is 2 + 2?',
    choices: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
    correctChoice: 'B'
  },
  // Add more questions here
];

let currentQuestionIndex = 0;

function displayQuestion() {
  questionElement.textContent = questions[currentQuestionIndex].question;
  choicesForm.innerHTML = '';
  for (const choice of questions[currentQuestionIndex].choices) {
    const choiceElement = document.createElement('label');
    choiceElement.innerHTML = `<input type="radio" name="choice" value="${choice[0]}"> ${choice}<br>`;
    choicesForm.appendChild(choiceElement);
  }
}

function startTimer() {
  startButton.disabled = true;
  intervalId = setInterval(function() {
    timeLeft--;
    timeLeftElement.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(intervalId);
      questionElement.textContent = 'Time is up!';
      choicesForm.innerHTML = '';
      showHighScoreForm();
    }
  }, 1000);
}

function showHighScoreForm() {
  highScoreForm.style.display = 'block';
  initialsInput.focus();
}

function submitHighScore() {
  const initials = initialsInput.value;
  const highScoreText = score > 0 ? `High Score: ${score}` : 'No High Score';
  highScoreElement.textContent = highScoreText;
  highScoreForm.style.display = 'none';
  initialsInput.value = '';
  startButton.disabled = false;
}

startButton.addEventListener('click', function() {
  score = 0;
  highScoreElement.textContent = 'High Score: 0';
  displayQuestion();
  startTimer();
});

choicesForm.addEventListener('submit', function(event) {
  event.preventDefault();
  clearInterval(intervalId);
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (selectedChoice) {
    if (selectedChoice.value === questions[currentQuestionIndex].correctChoice) {
      questionElement.textContent = 'Correct!';
      score += 10; // Add 10 points for correct answer
    } else {
      questionElement.textContent = 'Incorrect!';
      timeLeft -= 5; // Subtract 5 seconds for incorrect answer
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
      startTimer();
    } else {
      questionElement.textContent = 'Test is over!';
      choicesForm.innerHTML = '';
      showHighScoreForm();
    }
  }
});

highScoreForm.addEventListener('submit', function(event) {
  event.preventDefault();
  submitHighScore();
});
