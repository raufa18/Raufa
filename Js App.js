const questions = [
  {
    question: "What is the capital of France?",
    options: ["A: Berlin", "B: Madrid", "C: Paris", "D: Rome"],
    answer: "C: Paris"
  },
  {
    question: "2 + 2 = ?",
    options: ["A: 3", "B: 4", "C: 5", "D: 6"],
    answer: "B: 4"
  },
  {
    question: "Sequence of English Alphabet",
    options: ["A: A, C, D", "B: A, F, B", "C: A, B, C", "D: C, D, E"],
    answer: "C: A, B, C"
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = `Question ${current + 1}: ${q.question}`;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  document.getElementById("message").textContent = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = function() {
      if (option === q.answer) {
        document.getElementById("message").textContent = "This answer is correct!";
        score++;
        document.getElementById("score").textContent = score;
      } else {
        document.getElementById("message").textContent = "This answer is incorrect!";
      }
      Array.from(answersDiv.children).forEach(b => b.disabled = true);
      document.getElementById("next").style.display = "inline";
    };
    answersDiv.appendChild(btn);
  });
  document.getElementById("next").style.display = "none";
}

document.getElementById("next").onclick = function() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").textContent = "Quiz Finished!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("message").textContent = `Your score: ${score} / ${questions.length}`;
    document.getElementById("next").style.display = "none";
  }
};

showQuestion();