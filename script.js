const personalities = {
  A: { 
    title: "Meeting Magician", 
    description: "You're in every meeting but say nothing. Legend."
  },
  B: { 
    title: "Decksmith Extraordinaire", 
    description: "You wield PowerPoint like it’s a weapon of mass influence."
  },
  C: { 
    title: "Spreadsheet Sorcerer", 
    description: "You bend Excel to your will. Numbers fear you."
  },
  D: { 
    title: "Stealth Operator", 
    description: "Quiet. Efficient. Gone before the meeting starts."
  },
  fallback: { 
    title: "Snackroom Strategist", 
    description: "You work for snacks. You thrive in breakroom diplomacy."
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
    }
  },
  {
    text: "Someone says “Let’s take this offline.” You think:",
    answers: {
      A: "“Good, I can post about it on Teams.”",
      B: "“That’s code for ‘never speak of this again.’”",
      C: "“I’ll schedule a 45-min follow-up ASAP.”",
      D: "“Offline? Like… in person?!”"
    }
  },
  {
    text: "What do you do in a call where you’re not required to speak?",
    answers: {
      A: "Nod enthusiastically every few minutes",
      B: "Multitask like a pro — emails, chats, snack",
      C: "Take suspiciously timed bathroom breaks",
      D: "Screenshot everyone’s background for inspiration"
    }
  },
  {
    text: "Pick a snack from the office kitchen:",
    answers: {
      A: "The last donut you didn’t label",
      B: "Half a protein bar from Q3",
      C: "Lukewarm coffee",
      D: "Someone else’s leftover pad thai (oops)"
    }
  },
  {
    text: "How do we deliver Region commitment to Moc2 this time?",
    answers: {
      A: "Dashboards, dashboards, and dashboards",
      B: "By manifesting it into reality",
      C: "Recutting the forecast till it looks right",
      D: "Add “stretch target” and pray"
    }
  },
  {
    text: "You accidentally joined a call 10 minutes early. You:",
    answers: {
      A: "Panic and leave immediately",
      B: "Turn off camera and wait in silence",
      C: "Start presenting like it’s your TED Talk",
      D: "Use the time to complete RF :p"
    }
  },
  {
    text: "What’s your Teams messaging pet peeve?",
    answers: {
      A: "“Quick sync?” that’s never quick",
      B: "Getting tagged in threads with 57 messages",
      C: "“Gentle reminder 🙃”",
      D: "People replying to old threads with “Noted”"
    }
  },
  {
    text: "Choose a Team status:",
    answers: {
      A: "“Brb: Deep in snack spiral”",
      B: "“Mentally out of office”",
      C: "“Deadline mode: Do not ping”",
      D: "“Invisible (but watching)”"
    }
  },
  {
    text: "It’s 4:59 PM on Friday. Someone pings you “Quick Q?” You:",
    answers: {
      A: "Turn off notifications until Monday",
      B: "Respond with “Just sent you a calendar link!”",
      C: "Reply instantly with a fully researched answer",
      D: "Type “lol” and ghost"
    }
  },
  {
    text: "What’s your file naming system?",
    answers: {
      A: "“Final_Final_REALfinal_v6.docx”",
      B: "Date + version number + prayer",
      C: "Meticulously tagged folders",
      D: "Search bar = life"
    }
  },
  {
    text: "Choose your Teams behavior:",
    answers: {
      A: "Camera always off, mic always on",
      B: "Background: beach + vibes",