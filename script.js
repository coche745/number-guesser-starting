let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    target = Math.floor(Math.random() * 10);
    return target;
  }

  const getAbsoluteDistance = (numOne, numTwo) => {
      return Math.abs(numOne - numTwo);
  }

  const alert = (guess) => {
      if (guess < 0 || guess > 9) {
          console.log('Number is out of range! Please pick a number between 0 and 9.');
          return true;
      }
      else {
          return false;
      }
  }
  
  const compareGuesses = (human, computer, target) => {
    if (alert(human) === true) {
      return;
    }
    humanDiff = getAbsoluteDistance(target, human);
    computerDiff = getAbsoluteDistance(target, computer);
    if (humanDiff <= computerDiff) {
    return true;
    } else {
    return false;
    }
  }
  
  const updateScore = (winner) => {
    if (winner === 'human' || winner === true) {
      humanScore += 1;
    } else if (winner === 'computer' || winner === false) {
      computerScore += 1;
    }
  }
  
  const advanceRound = () => {
    currentRoundNumber += 1;
  }
  
  target = generateTarget();
  console.log(target);
  winner = compareGuesses(9, 0, target);
  console.log(winner);
  updateScore(winner);
  console.log(humanScore);
  console.log(computerScore);
  advanceRound();
  console.log(currentRoundNumber);
