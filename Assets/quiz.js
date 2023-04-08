console.log("hello world from game");
// testing connection
const question = document.getElementById("question");
// changing to an array
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
// shows up as an HTML collection in console

// ! Needed:
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionsCounter = 0;
let availableQuestions = [];
// array of all the questions
let questions = [
  {
    question: "What's my middle name?",
    choice1: "Lisa",
    choice2: "uhhh...Marie?",
    choice3: "Marie by confidently",
    choice4: "Lorena-Grace",
    answer: 4,
  },
  {
    question: "What color are my eyes?",
    choice1: "hazel",
    choice2: "i don't know you",
    choice3: "blue",
    choice4: "brown",
    answer: 3,
  },
  {
    question: "What's my favorite Taylor Swift song?",
    choice1: "i literally can't choose",
    choice2: "Afterglow",
    choice3: "this is me trying",
    choice4: "illicit affairs",
    answer: 1,
  },
  {
    question: "What sport did I play in college?",
    choice1: "we aren't friends, i DON'T KNOW",
    choice2: "lacrosse",
    choice3: "swimming",
    choice4: "tennis",
    answer: 3,
  },
  {
    question: "Which bone have I broken?",
    choice1: "pinky toe",
    choice2: "spine",
    choice3: "like, i'm sorry but idk",
    choice4: "patella",
    answer: 2,
  },
  {
    question: "How many times have I seen One Direction (r.i.p) live?",
    choice1: "ten...maybe get a hobby",
    choice2: "every single show when they were on the Take Me Home tour",
    choice3: "THREE IS LUCKY BABY",
    choice4: "why would i KNOW?",
    answer: 3,
  },
  {
    question: "Guess my favorite movie!",
    choice1: "Hereditary (2018)",
    choice2: "I Love You, Man (2009)",
    choice3: "Psycho (1960)",
    choice4: "12 Angry Men (1957)",
    answer: 3,
  },
  {
    question: "What job have I NOT had?",
    choice1: "crime scene photographer",
    choice2: "lifeguard",
    choice3: "Tiff's Treats delivery driver",
    choice4: "pre-school teacher",
    answer: 1,
  },
  {
    question: "EASY ONE: What is my favorite color?",
    choice1: "pink but like the nice shade (ya know the one)",
    choice2: "jade green",
    choice3: "red",
    choice4: "powder blue",
    answer: 1,
  },
  {
    question: "How tall am I?",
    choice1: "hmmm I've never seen you?",
    choice2: "6ft(182.88cm)",
    choice3: "5'2(160.02cm)",
    choice4: "5'7(170.18cm)",
    answer: 4,
  },
];

// create constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionsCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  // using spread to copy in the questions array
  console.log(availableQuestions);
  // logged availableQuestions as the questions array -> once startGame is called
  getNewQuestion();
};

getNewQuestion = () => {
  questionsCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach( choice => {
   const number = choice.dataset['number'];
   choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    // console.log(e.target); <- checked that it was bringing up the answer clicked on
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectChoice = e.target;
    const selectAnswer = selectChoice.dataset['number'];
    console.log(selectAnswer);
    getNewQuestion();
  })
})
startGame();
