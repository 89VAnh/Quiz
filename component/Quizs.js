import html from "../js/core.js";
import { connect } from "../js/store.js";

function Quizs({ questions, indexQuestion, answer }) {
  if (indexQuestion < questions.length) {
    return html`
      <div id="quiz" class="question${indexQuestion + 1}">
        <h2>Question ${indexQuestion + 1}:</h2>
        ${questions[indexQuestion].question}

        <div>
          ${questions[indexQuestion].choices.map(
            (choice, i) =>
              html`
              <div class="form-answer">
                   <input type="radio" name="answer" id="${i}" value="${i}" ${
                answer[indexQuestion] == i && "checked"
              }></input>
                   <label for="${i}">${choice}</label>
                 </div>`
          )}
        </div>
      </div>
    `;
  } else {
    var score = 0;
    for (var key of answer) {
      if (answer[key] == questions[key].correctAnswer) {
        ++score;
      }
    }

    return html` <div id="quiz">
      You got ${score} questions out of ${questions.length} right!!!
    </div>`;
  }
}

export default connect()(Quizs);
