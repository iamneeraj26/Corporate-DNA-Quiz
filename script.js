const questions = [
  {
    q: "How do you usually start your workday?",
    a: ["Catching up on 173 Team notifications", "Triple espresso and calendar denial", "Updating the master spreadsheet", "Already in a meeting... since 7:45 AM"]
  },
  {
    q: "Someone says “Let’s take this offline.” You think:",
    a: ["Good, I can post about it on Teams.", "That’s code for ‘never speak of this again.’", "I’ll schedule a 45-min follow-up ASAP.", "Offline? Like... in person?!"]
  },
  {
    q: "What’s your spirit tool?",
    a: ["Docs with anonymous otters", "The Team mute button", "PivotTable", "Post-it wall of chaos"]
  }
];
const results = [
  { title: "The Meeting Phantom", desc: "You exist mostly in calendar invites and blurry thumbnails." },
  { title: "Spreadsheet Sensei", desc: "You believe Excel is the fifth element." },
  { title: "GIF Guru", desc: "You speak fluent reaction GIFs. Emotions are for memes." },
  { title: "Calendar Juggler", desc: "Your life is scheduled in 15-min increments." },
  { title: "Snack Strategist", desc: "You always know what’s in the pantry—even in other departments." }
];
const bgImages = [
  'url("https://source.unsplash.com/1600x900/?office")',
  'url("https://source.unsplash.com/1600x900/?funny,work")',
  'url("https://source.unsplash.com/1600x900/?coworking")',
  'url("https://source.unsplash.com/1600x900/?workspace")'
];

let current = 0, answers = [], bgIndex = Math.floor(Math.random() * bgImages.length);
document.body.style.backgroundImage = bgImages[bgIndex];

function showQuestion(index) {
  const container = document.getElementById('question-screen');
  const q = questions[index];
  container.innerHTML = `
    <h2>Q${index + 1}. ${q.q}</h2>
    ${q.a.map((opt, i) => `<button onclick="answer(${i})">${String.fromCharCode(65+i)}) ${opt}</button>`).join("<br>")}
  `;
}

function answer(i) {
  answers.push(i);
  current++;
  if (current < questions.length) {
    showQuestion(current);
  } else {
    calculateResult();
  }
}

function calculateResult() {
  const sum = answers.reduce((a, b) => a + b, 0);
  const result = results[sum % results.length];
  document.getElementById('question-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';
  document.getElementById('result-title').textContent = result.title;
  document.getElementById('result-description').textContent = result.desc;
}
showQuestion(current);
