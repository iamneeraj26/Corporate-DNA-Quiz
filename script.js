const personalities = {
  A: { title: "Meeting Magician", description: "You're in every meeting but say nothing. Legend." },
  B: { title: "Decksmith Extraordinaire", description: "You wield PowerPoint like it’s a weapon of mass influence." },
  C: { title: "Spreadsheet Sorcerer", description: "You bend Excel to your will. Numbers fear you." },
  D: { title: "Stealth Operator", description: "Quiet. Efficient. Gone before the meeting starts." },
  fallback: { title: "Snackroom Strategist", description: "You work for snacks. You thrive in breakroom diplomacy." }
};

document.addEventListener("DOMContentLoaded", () => {
  const answerButtons = document.querySelectorAll(".answer-btn");
  const nextButton = document.querySelector(".next-btn");

  // Load answers from localStorage
  let answers = JSON.parse(localStorage.getItem("quizAnswers")) || [];

  // Handle answer selection
  answerButtons.forEach(button => {
    button.addEventListener("click", () => {
      answers.push(button.dataset.answer);
      localStorage.setItem("quizAnswers", JSON.stringify(answers));
      if (nextButton) nextButton.classList.add("active");
    });
  });

  // Display result on result.html
  if (document.getElementById("result-title")) {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});
    const maxCount = Math.max(...Object.values(counts));
    const mostFrequent = Object.keys(counts).find(key => counts[key] === maxCount) || "fallback";
    document.getElementById("result-title").textContent = personalities[mostFrequent].title;
    document.getElementById("result-description").textContent = personalities[mostFrequent].description;

    // Store result anonymously
    let results = JSON.parse(localStorage.getItem("quizResults")) || {};
    results[mostFrequent] = (results[mostFrequent] || 0) + 1;
    localStorage.setItem("quizResults", JSON.stringify(results));

    // Clear answers for next quiz
    localStorage.removeItem("quizAnswers");
  }

  // Display statistics on summary.html
  if (document.getElementById("stats-list")) {
    const results = JSON.parse(localStorage.getItem("quizResults")) || {};
    const total = Object.values(results).reduce((sum, count) => sum + count, 0);
    const statsList = document.getElementById("stats-list");
    Object.keys(personalities).forEach(key => {
      const count = results[key] || 0;
      const percentage = total ? ((count / total) * 100).toFixed(2) : 0;
      const li = document.createElement("li");
      li.textContent = `${personalities[key].title}: ${percentage}%`;
      statsList.appendChild(li);
    });
  }
});