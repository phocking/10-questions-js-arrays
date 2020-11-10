//questions
const questions = [
["Who painted the Mona Lisa?", "Leonardo Da Vinci"],
["How many valves does the heart have?", "4"],
["In Harry Potter, what is the name of The Weasley's house?",  "The Burrow"],
["What does He stand for on the periodic table?", "Helium"],
["Who did Anne Hathaway play in Les Miserables?", "Fantine"],
["How many minutes in a game of rugby league?", "80"],
["Which city had the first ever fashion week?", "New York"],
["What is the largest country in the world?", "Russia"],
["Who plays Delboy Trotter in Only Fools And Horses?", "David Jason"],
["What nut is in the middle of a Ferrero Rocher?", "Hazelnut"]
];

let score = 0;
let incorrectAnswers = [];
const main = document.getElementById('main');
let html = '';

//check if question matches answer by looping through array
    for (let i = 0; i < questions.length; i ++) {

      let question = questions[i][0];
      let answer = questions[i][1];
      let response = prompt(question);

      if (response.toUpperCase() === answer.toUpperCase()) {
        score += 1;

      } else {
        incorrectAnswers.push(question); //push incorrect input to incorrectAnswers array
      }

    }
console.log(incorrectAnswers);
//function to get and display answers that were answered incorrectly
function getListItems(arr) {
  let listItems = '';
  for (let i = 0; i < arr.length; i++) {
    listItems += `<li>${arr[i]}</li>`;
  }
  return listItems;
}
html = `<h2>You answered ${score} questions correctly!</h2>
         <h3>Here are the questions you answered incorrectly:</h3>
         <ol>${getListItems(incorrectAnswers)}</ol>`;

main.innerHTML = html;
