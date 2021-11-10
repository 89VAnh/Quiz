import html from "../js/core.js";
import { connect } from "../js/store.js";

function Buttons({ questions, indexQuestion }) {
  var prevBtn =
    indexQuestion > 0 && indexQuestion < questions.length ? "block" : "none";
  return html`
    <button
      id="next"
      onclick="dispatch('next',${indexQuestion});"
      style="display:${indexQuestion == questions.length && "none"}"
    >
      Next >>
    </button>
    <button
      id="prev"
      onclick="dispatch('prev',${indexQuestion})"
      style="display:${prevBtn}"
    >
      << Prev
    </button>
    <button
      id="start"
      style="display:${indexQuestion == questions.length && "block"}"
      onclick="dispatch('start')"
    >
      Start Over
    </button>
  `;
}

export default connect()(Buttons);
