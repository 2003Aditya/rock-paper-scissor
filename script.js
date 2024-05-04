console.log('hello world');
console.log(509 + 24)
console.log((12 + 3 + 13 + 13) / 43)


function game() {

  var humanScore = 0;
  var computerScore = 0;

  /* let answer = parseInt(prompt("please enter the number you want to print"))
  
  for (let i = 0; i <= answer; i++) {
    if (i % 3 == 0) {
      console.log('fizz');
    } else if (i % 5 == 0) {
      console.log('buzz');
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log('buzfiz')
    }
  
  
    console.log(i)
  } */

  function getHumanChoice() {
    let humanChoice = (prompt("write rock paper or scissor..")).toLowerCase();

    while (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissor') {
      alert("please enter right value");
      humanChoice = prompt("write rock, paper or scissor").toLowerCase();
    }
    return humanChoice;
  }
  function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissor";

    }

  }

  function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
      console.log("It's a Tie!")
    } else if (
      (humanChoice === 'rock' && compChoice === 'scissor') ||
      (humanChoice === 'paper' && compChoice === 'rock') ||
      (humanChoice === 'scissor' && compChoice === 'paper')
    ) {
      console.log(`you won! ${humanChoice} beats ${compChoice}`)
      humanScore++;
      console.log(`your score: ${humanScore}`);
    } else {
      console.log(`you lose! ${humanChoice} and computer won! ${compChoice}`)
      computerScore++;
      console.log(`computer score: ${computerScore}`);
    }
  }

  for (let round = 1; round < 5; round++) {
    console.log("");
    console.log(`Round ${round}`);
    const humanChoice = getHumanChoice();
    const compChoice = getComputerChoice();
    console.log(`your choice: ${humanChoice}`);
    console.log(`computer choice: ${compChoice}`);

  }
  const humanChoice = getHumanChoice();
  const compChoice = getComputerChoice();
  console.log("computer choice:", compChoice);
  console.log("your choice:", humanChoice);
  playRound(humanChoice, compChoice);
}
game();
