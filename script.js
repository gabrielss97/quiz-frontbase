const quizData = [
  {
    title: `Acrescente uma "tooltip" ao parágrafo abaixo com o texto "Sobre Quizcode".`,
    question: `<p ***="Sobre Quizcode">Quizcode de quiz sobre programação.</p>`,
    a: "h1",
    b: "id",
    c: "class",
    d: "title",
    correct: "d",
  },
  {
    title: `Ajuste o tamanho da imagem para 250 pixels de largura e 400 pixels de altura.`,
    question: '<img src="w3schools.jpg" width="***" height="***">',
    a: "width=250, height=250",
    b: "width=400, height=250",
    c: "width=250, height=400",
    d: "width=400, height=400",
    correct: "c",
  },
];

let quizEl = document.querySelector("#quiz");
let titleEl = document.querySelector("#title");
let questionEl = document.querySelector("#question");
let a = document.querySelector("#questionA");
let b = document.querySelector("#questionB");
let c = document.querySelector("#questionC");
let d = document.querySelector("#questionD");
const answerEls = document.querySelectorAll(".answer");
const btnEl = document.querySelector("#btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  titleEl.innerText = currentQuizData.title;
  questionEl.innerText = currentQuizData.question;
  a.innerText = currentQuizData.a;
  b.innerText = currentQuizData.b;
  c.innerText = currentQuizData.c;
  d.innerText = currentQuizData.d;
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

btnEl.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizEl.innerHTML = `
      <h2 id="result">Sua pontuação: ${score}/${quizData.length}</h2>
      <button onclick="location.reload()">Recomeçar</button>
      `;
    }
  }
});
