console.log('hello world from game');
// testing connection
const question = document.getElementById('question');
// changing to an array
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);
// shows up as an HTML collection in console

// ! Needed:
let currentQuestion = {};
let acceptingAnswers = true;
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
    choice4: "Lorena-Grace"
    answer: 4
  }
  {
    question: "What color are my eyes?",
    choice1: "blue",
    choice2: "i don't know you",
    choice3: "hazel",
    choice4: "brown"
    answer: 
  }
  {
    question: "",
    choice1: "",
    choice2: "uhhh...Marie?",
    choice3: "",
    choice4: ""
    answer: 
  }
  {
    question: "",
    choice1: "",
    choice2: "uhhh...Marie?",
    choice3: "",
    choice4: ""
    answer: 
  }
  {
    question: "",
    choice1: "",
    choice2: "uhhh...Marie?",
    choice3: "",
    choice4: ""
    answer: 
  }
  {
    question: "",
    choice1: "",
    choice2: "uhhh...Marie?",
    choice3: "",
    choice4: ""
    answer: 
  }
  {
    question: "",
    choice1: "",
    choice2: "uhhh...Marie?",
    choice3: "",
    choice4: ""
    answer: 
  }
  {
    question: "",
    choice1: "",
    choice2: "uhhh...Marie?",
    choice3: "",
    choice4: ""
    answer: 
  }
  {
    question: "",
    choice1: "",
    choice2: "uhhh...Marie?",
    choice3: "",
    choice4: ""
    answer: 
  }
  {
    question: "",
    choice1: "",
    choice2: "uhhh...Marie?",
    choice3: "",
    choice4: ""
    answer: 
  }
]