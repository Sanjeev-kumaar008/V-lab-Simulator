
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "What is the need of modulation?",
    answers: {
      a: "Reduces the antenna height",
      b: "Increases the antenna height",
      c: "Short distance communication",
      d: "Increase the interference power"
    },
    correctAnswer: "a"
  },
  {
    question: "What are the types of analog modulation schemes?",
    answers: {
      a: "Phase modulation",
      b: "Frequency modulation",
      c: "Amplitude modulation",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "Identify the characteristics of Amplitude modulation?",
    answers: {
      a: "Modulating signal amplitude is varied w.r.t carrier signal",
      b: "Carrier signal amplitude is varied w.r.t modulating signal",
      c: "Modulated signal amplitude remains constant",
      d: "Modulated signal frequency and phase also varying"
    },
    correctAnswer: "b"
  },

  {
    question: "What is the bandwidth requirement of DSB-FC and SSB?",
    answers: {
      a: "fm & fm",
      b: "fm & 2fm",
      c: "4fm & 2fm",
      d: "2fm & fm"
    },
    correctAnswer: "d"
  },

  {
    question: "For under modulation, what is the value of modulation index?",
    answers: {
      a: "m= 1",
      b: "m>1",
      c: "m<1",
      d: "m=0"
    },
    correctAnswer: "c"
  },

  {
    question: "The process of retrieving modulating signal from the modulated wave is called as",
    answers: {
      a: "Modulation",
      b: "Detection",
      c: "Multiplexing",
      d: "Demultiplexing"
    },
    correctAnswer: "b"
  },

  {
    question: "The modulating signal is not preserved from the envelope of an AM signal If modulation index is",
    answers: {
      a: "greater than 1",
      b: "Less than 1",
      c: "Equal to 1",
      d: "Equal to 0"
    },
    correctAnswer: "a"
  },

  {
    question: "What is the maximum transmission efficiency of DSB-FC?",
    answers: {
      a: "44.4%",
      b: "55.5%",
      c: "33.33%",
      d: "64.44%"
    },
    correctAnswer: "c"
  },

  {
    question: "Identify the drawback of SSB modulation?",
    answers: {
      a: "Carrier to be locally generated at the receiver",
      b: "High bandwidth",
      c: "High transmit power",
      d: "Low efficiency"
    },
    correctAnswer: "a"
  },

  {
    question: "Define Modulation index of AM?",
    answers: {
      a: "Ac/Am",
      b: "Am/Ac",
      c: "2Am/Ac",
      d: "2Am/Ac"
    },
    correctAnswer: "b"
  },

  
];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
