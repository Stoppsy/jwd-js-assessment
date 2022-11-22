/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers  --COMPLETED--

      2. Add an Event listener for the submit button, which will display the score and highlight  --COMPLETED--
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options). --COMPLETED--

      4. Reload the page when the reset button is clicked (hint: search window.location) --COMPLETED--

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers --COMPLETED--
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
    //Part of Task 5
    let time = setInterval(timer, 1000);
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    //TASK 3 - Add additional answers
    {
      q: 'What was the largest empire in the world?',
      o: ['Roman', 'Mongolian', 'British', 'Qing Dynasty'],
      a: 2,
    },
    {
      q: 'How many kilometers deep is the center of the Earth?',
      o: ['2900km', '3654km', '3485km', '2500km'],
      a: 0,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = 'green';
        }

        //TASK 1 = Calculate score
        if (radioElement.checked && quizItem.a === i) {
          score += 1;
        }
      }
    });
    return score;
  };

//TASK 2 - Event Listener for score display
const submission = () => {
  calculateScore();
  btnSubmit.style.display ='none';
  
  if (calculateScore(score) === 5) {
    displayScore.innerHTML = `Wow! You got a perfect score of <strong>${calculateScore()} / 5!</strong> Congratulations!`
  } else {
    displayScore.innerHTML = `Your final score is: ${calculateScore()} / 5!`
  }
}

const btnSubmit = document.querySelector('#btnSubmit');
const displayScore = document.querySelector('#score');

  btnSubmit.addEventListener('click', () => {
    submission();
  });

//TASK 4 - Reset Page
const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', () =>{
  location.reload();
});

//TASK 5 - Timer
let seconds = 60;
function timer() {
  
  if (seconds >= 60) {
    document.getElementById("time").innerHTML = "1:00";
  } else {
    document.getElementById("time").innerHTML = "0:" + seconds;
  }
  seconds--;
  if (seconds === -1) {
    clearInterval(time);
    alert("Ran out of time");
    window.location.reload();
  }
}

  // call the displayQuiz function
  displayQuiz();
});
