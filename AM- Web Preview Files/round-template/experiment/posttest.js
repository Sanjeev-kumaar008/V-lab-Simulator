
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
      question: "The frequency and amplitude of the carrier signal should be _______ compared to baseband signal",
      answers: {
        a: "Greater than",
        b: "Less than",
        c: "Equal to",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Point the condition to be satisfied for modulation without any distortion in practice",
      answers: {
        a: "m=1",
        b: "m<1",
        c: "m>1",
        d: "m=0"
      },
      correctAnswer: "b"
    },
    {
      question: "How do you eliminate the occurrence of carrier signal in the generation of DSB-SC waveform?",
      answers: {
        a: "Multiplying carrier and modulating signal",
        b: "Adding carrier and modulating signal",
        c: "Subtracting modulating signal from the carrier signal",
        d: "Adding the mean value of modulating and carrier signals"
      },
      correctAnswer: "a"
    },

    {
      question: "Which among the following modulation technique is more efficient?",
      answers: {
        a: "DSB-FC",
        b: "DSB-SC",
        c: "SSB-SC",
        d: "Both B&C"
      },
      correctAnswer: "c"
    },


    {
      question: "How do you retrieve the modulating signal from DSB-FC signal?",
      answers: {
        a: "Balanced modulator",
        b: "Switching modulator",
        c: "Envelope detector",
        d: "Square law modulator"
      },
      correctAnswer: "c"
    },
    {
      question: "The DSB-FC spectrum consists of",
      answers: {
        a: "Upper sideband only",
        b: "Lower sideband only",
        c: "Carrier frequency only",
        d: "All of the above"
      },
      correctAnswer: "d"
    },

    {
      question: "Identify the modulation scheme that uses more bandwidth and transmitted power?",
      answers: {
        a: "DSB-FC",
        b: "DSB-SC",
        c: "SSB-SC",
        d: "Both A&B"
      },
      correctAnswer: "a"
    },

    {
      question: "Calculate the total transmitted power of DSB-FC modulated signal with the carrier power of 8 W and modulation index of 0.5",
      answers: {
        a: "4W",
        b: "9W",
        c: "7W",
        d: "8W"
      },
      correctAnswer: "b"
    },

    {
      question: "The modulating signal frequency and the carrier frequency of an AM broadcast station are 5KHz & 20KHz respectively. Calculate the upper & lower sideband frequencies and the total bandwidth",
      answers: {
        a: "20KHz, 30KHZ, 5KHz",
        b: "10KHz, 5KHz, 10KHz",
        c: "25KHz, 15KHz, 10KHz",
        d: "40KHz, 20KHz, 5KHz"
      },
      correctAnswer: "c"
    },

    {
      question: "Find the total modulation Index of AM system when a carrier wave is modulated by two modulating signals with modulation indices 0.4 and 0.3",
      answers: {
        a: "0.3",
        b: "0.4",
        c: "0.25",
        d: "0.5"
      },
      correctAnswer: "d"
    },



    
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
