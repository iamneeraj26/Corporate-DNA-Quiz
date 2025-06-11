const personalities = {
  A: { 
    title: "Meeting Magician", 
    description: "You're in every meeting but say nothing. Legend.", 
    image: "images/meeting-magician.jpg" 
  },
  B: { 
    title: "Decksmith Extraordinaire", 
    description: "You wield PowerPoint like it’s a weapon of mass influence.", 
    image: "images/decksmith.jpg" 
  },
  C: { 
    title: "Spreadsheet Sorcerer", 
    description: "You bend Excel to your will. Numbers fear you.", 
    image: "images/spreadsheet-sorcerer.jpg" 
  },
  D: { 
    title: "Stealth Operator", 
    description: "Quiet. Efficient. Gone before the meeting starts.", 
    image: "images/stealth-operator.jpg" 
  },
  fallback: { 
    title: "Snackroom Strategist", 
    description: "You work for snacks. You thrive in breakroom diplomacy.", 
    image: "images/snackroom-strategist.jpg" 
  }
};

const questions = [
  {
    text: "How do you usually start your workday?",
    answers: {
      A: "Catching up on 173 Team notifications",
      B: "Triple espresso and calendar denial",
      C: "Updating the master spreadsheet",
      D: "Already in a meeting… since 7:45 AM"
    },
    background: "images/schrute-farms.jpg"
  },
  {
    text: "Someone says “Let’s take this offline.” You think:",
    answers: {
      A: "“Good, I can post about it on Teams.”",
      B: "“That’s code for ‘never speak of this again.’”",
      C: "“I’ll schedule a 45-min follow-up ASAP.”",
      D: "“Offline? Like… in person?!”"
    },
    background: "images/conference-room.jpg"
  },
  {
    text: "What do you do in a call where you’re not required to speak?",
    answers: {
      A: "Nod enthusiastically every few minutes",
      B: "Multitask like a pro — emails, chats, snack",
      C: "Take suspiciously timed bathroom breaks",
      D: "Screenshot everyone’s background for inspiration"
    },
    background: "images/warehouse.jpg"
  },
  {
    text: "Pick a snack from the office kitchen:",
    answers: {
      A: "The last donut you didn’t label",
      B: "Half a protein bar from Q3",
      C: "Lukewarm coffee",
      D: "Someone else’s leftover pad thai (oops)"
    },
    background: "images/break-room.jpg"
  },
  {
    text: "How do we deliver Region commitment to Moc2 this time?",
    answers: {
      A: "Dashboards, dashboards, and dashboards",
      B: "By manifesting it into reality",
      C: "Recutting the forecast till it looks right",
      D: "Add “stretch target” and pray"
    },
    background: "images/reception.jpg"
  },
  {
    text: "You accidentally joined a call 10 minutes early. You:",
    answers: {
      A: "Panic and leave immediately",
      B: "Turn off camera and wait in silence",
      C: "Start presenting like it’s your TED Talk",
      D: "Use the time to complete RF :p"
    },
    background: "images/parking-lot.jpg"
  },
  {
    text: "What’s your Teams messaging pet peeve?",
    answers: {
      A: "“Quick sync?” that’s never quick",
      B: "Getting tagged in threads with 57 messages",
      C: "“Gentle reminder 🙃”",
      D: "People replying to old threads with “Noted”"
    },
    background: "images/accounting.jpg"
  },
  {
    text: "Choose a Team status:",
    answers: {
      A: "“Brb: Deep in snack spiral”",
      B: "“Mentally out of office”",
      C: "“Deadline mode: Do not ping”",
      D: "“Invisible (but watching)”"
    },
    background: "images/sales.jpg"
  },
  {
    text: "It’s 4:59 PM on Friday. Someone pings you “Quick Q?” You:",
    answers: {
      A: "Turn off notifications until Monday",
      B: "Respond with “Just sent you a calendar link!”",
      C: "Reply instantly with a fully researched answer",
      D: "Type “lol” and ghost"
    },
    background: "images/kitchen.jpg"
  },
  {
    text: "What’s your file naming system?",
    answers: {
      A: "“Final_Final_REALfinal_v6.docx”",
      B: "Date + version number + prayer",
      C: "Meticulously tagged folders",
      D: "Search bar = life"
    },
    background: "images/server-room.jpg"
  },
  {
    text: "Choose your Teams behavior:",
    answers: {
      A: "Camera always off, mic always on",
      B: "Background: beach + vibes",
      C: "Uses “🙃” emoji to express existential dread",
      D: "Accidentally screen shares personal tab"
    },
    background: "images/bullpen.jpg"
  },
  {
    text: "You describe your job as:",
    answers: {
      A: "Herding cats with Wi-Fi",
      B: "Managing chaos using spreadsheets",
      C: "Translating vague ideas into action",
      D: "Constantly muting and unmuting"
    },
    background: "images/party-room.jpg"
  },
  {
    text: "A fire breaks out (figuratively) in a project. You:",
    answers: {
      A: "Make memes about it",
      B: "Add more conditional formatting",
      C: "Lead a triage war room",
      D: "Silently observe from the shadows"
    },
    background: "images/vending-machine.jpg"
  },
  {
    text: "What’s your reaction to an all-hands invite?",
    answers: {
      A: "Popcorn ready 🍿",
      B: "“Do I need to talk?”",
      C: "“Could’ve been an email.”",
      D: "“Yay! More slides!” (sarcastically)"
    },
    background: "images/elevator.jpg"
  },
  {
    text: "You’re best known on the team for:",
    answers: {
      A: "Dropping hilarious reactions in chat",
      B: "Meeting notes so detailed it’s scary",
      C: "Saying “Let’s circle back” 400x",
      D: "Wearing the same hoodie in every call"
    },
    background: "images/lobby.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const quizBody = document.getElementById("quiz-body");
  const welcomeScreen = document.getElementById("welcome-screen");
  const questionScreen = document.getElementById("question-screen");
  const resultScreen = document.getElementById("result-screen");
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionTitle = document.getElementById("question-title");
  const questionText = document.getElementById("question-text");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const progressBar = document.getElementById("progress-bar");
  const resultImage = document.getElementById("result-image");

  let currentQuestion = 0;
  let answers = [];
  let selectedAnswer = null;

  // Debug: Check if elements are found
  if (!quizBody || !welcomeScreen || !questionScreen || !resultScreen || !startBtn || !nextBtn || !restartBtn) {
    console.error("One or more DOM elements not found");
  }

  // Start quiz
  startBtn.addEventListener("click", () => {
    try {
      welcomeScreen.classList.add("hidden");
      questionScreen.classList.remove("hidden");
      quizBody.style.backgroundImage = "url('images/dunder-mifflin.jpg')";
      loadQuestion();
    } catch (e) {
      console.error("Error starting quiz:", e);
    }
  });

  // Load question
  function loadQuestion() {
    try {
      if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionTitle.textContent = `Question ${currentQuestion + 1}/15`;
        questionText.textContent = q.text;
        answerButtons.forEach((btn, index) => {
          const answerKey = String.fromCharCode(65 + index); // A, B, C, D
          btn.textContent = `${answerKey}) ${q.answers[answerKey]}`;
          btn.classList.remove("selected");
        });
        progressBar.style.width = `${((currentQuestion + 1) / 15) * 100}%`;
        try {
          quizBody.style.backgroundImage = `url('${q.background}')`;
        } catch (e) {
          console.warn(`Background image ${q.background} not found, using fallback`);
          quizBody.style.backgroundImage = "url('images/dunder-mifflin.jpg')";
        }
        nextBtn.disabled = true;
        selectedAnswer = null;
      } else {
        showResult();
      }
    } catch (e) {
      console.error("Error loading question:", e);
    }
  }

  // Handle answer selection
  answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      try {
        answerButtons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedAnswer = btn.dataset.answer;
        nextBtn.disabled = false;
      } catch (e) {
        console.error("Error selecting answer:", e);
      }
    });
  });

  // Handle next button
  nextBtn.addEventListener("click", () => {
    try {
      if (selectedAnswer) {
        answers.push(selectedAnswer);
        localStorage.setItem("quizAnswers", JSON.stringify(answers));
        currentQuestion++;
        loadQuestion();
      }
    } catch (e) {
      console.error("Error on next button click:", e);
    }
  });

  // Show result
  function showResult() {
    try {
      if (answers.length === 15) {
        questionScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        quizBody.style.backgroundImage = "url('images/dunder-mifflin-office.jpg')";
        const counts = answers.reduce((acc, answer) => {
          acc[answer] = (acc[answer] || 0) + 1;
          return acc;
        }, {});
        const maxCount = Math.max(...Object.values(counts));
        const mostFrequent = Object.keys(counts).find(key => counts[key] === maxCount) || "fallback";
        document.getElementById("result-title").textContent = personalities[mostFrequent].title;
        document.getElementById("result-description").textContent = personalities[mostFrequent].description;
        resultImage.src = personalities[mostFrequent].image;

        // Store result anonymously
        let results = JSON.parse(localStorage.getItem("quizResults")) || {};
        results[mostFrequent] = (results[mostFrequent] || 0) + 1;
        localStorage.setItem("quizResults", JSON.stringify(results));

        // Clear answers
        localStorage.removeItem("quizAnswers");
      } else {
        alert("Please complete all 15 questions!");
        currentQuestion = answers.length;
        loadQuestion();
      }
    } catch (e) {
      console.error("Error showing result:", e);
    }
  }

  // Restart quiz
  restartBtn.addEventListener("click", () => {
    try {
      resultScreen.classList.add("hidden");
      welcomeScreen.classList.remove("hidden");
      quizBody.style.backgroundImage = "url('images/dunder-mifflin.jpg')";
      currentQuestion = 0;
      answers = [];
      selectedAnswer = null;
    } catch (e) {
      console.error("Error restarting quiz:", e);
    }
  });

  // Handle summary page
  const passwordScreen = document.getElementById("password-screen");
  const statsScreen = document.getElementById("stats-screen");
  const submitPassword = document.getElementById("submit-password");
  const adminPassword = document.getElementById("admin-password");

  if (submitPassword) {
    submitPassword.addEventListener("click", () => {
      try {
        if (adminPassword.value === "dundermifflin") {
          passwordScreen.classList.add("hidden");
          statsScreen.classList.remove("hidden");
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
        } else {
          alert("Incorrect password!");
        }
      } catch (e) {
        console.error("Error loading stats:", e);
      }
    });
  }
});