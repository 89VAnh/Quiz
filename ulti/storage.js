const QUESTIONS_STORAGE_KEY = "QUESTIONS";
export default {
  get() {
    return JSON.parse(localStorage.getItem(QUESTIONS_STORAGE_KEY)) || [];
  },
  set(answers) {
    localStorage.setItem(QUESTIONS_STORAGE_KEY, JSON.stringify(answers));
  },
};
