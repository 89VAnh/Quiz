const init = {
  questions: [
    {
      question: "What is 2*5?",
      choices: [2, 5, 10, 15, 20],
      correctAnswer: 2,
    },
    {
      question: "What is 3*6?",
      choices: [3, 6, 9, 12, 18],
      correctAnswer: 4,
    },
    {
      question: "What is 8*9?",
      choices: [72, 99, 108, 134, 156],
      correctAnswer: 0,
    },
    {
      question: "What is 1*7?",
      choices: [4, 5, 6, 7, 8],
      correctAnswer: 3,
    },
    {
      question: "What is 8*8?",
      choices: [20, 30, 40, 50, 64],
      correctAnswer: 4,
    },
  ],
  indexQuestion: 0,
  answer: [],
};

const actions = {
  next(state, index) {
    var inputs = [...document.querySelectorAll("input[type=radio]")];
    if (
      inputs.some(function (input) {
        if (input.checked === true) {
          if (index === state.answer.length) {
            state.answer.push(input.value);
          }
        }
        return input.checked;
      })
    ) {
      ++state.indexQuestion;
      document.getElementById("next").style.display = "none";
    } else {
      alert("Chọn 1 đáp án");
    }
  },
  prev(state, index) {
    --state.indexQuestion;
  },
  start(state) {
    state.indexQuestion = 0;
    state.answer = [];
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
