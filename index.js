var readlineSync= require("readline-sync")
var score=0
var userName =readlineSync.question("What is your name? ")
console.log("Welcome ", userName)
function play(question,answer)
  { var userAnswer= readlineSync.question(question)
  if (userAnswer==answer)
  {  console.log("You are right ")
  score+=1}
else{ console.log("You are wrong ")
    score-=1}
  
console.log ("You scored "+ score)
console.log("-------------")
  console.log("Total score is: "+score)}



// objects
var questionOne= 
{
    question: "How many days are there in a week? " ,
  answer: 7,
  }
var questionTwo=
  { question: "How many hours are there in a day? ",
  answer: 24,}
   var questionThree=

  { question: "A leap year consists of how many days? ",
 answer: 366,}
var questionFour=
  { question: "What comes once in a year and twice in a week? ",
  answer: "e",}
   var questionFive=

  { question:"What is at the end of the rainbow? ",
  answer: "w",}
var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive]
for (var i=0;i<questions.length;i++)
  {var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)}