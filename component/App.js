import html from "../js/core.js";
import { connect } from "../js/store.js";
import Header from "./Header.js";
import Quizs from "./Quizs.js";
import Buttons from "./Buttons.js";
function App() {
  return html` ${Header()} ${Quizs()} ${Buttons()} `;
}

export default App;
