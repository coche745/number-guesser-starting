let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generates a random target for the game
const generateTarget = () => {
    target = Math.floor(Math.random() * 10);
    return target;
  }

  // finds the difference between two numbers, will use to find difference between target and computer and human guesses
  const getAbsoluteDistance = (numOne, numTwo) => {
      return Math.abs(numOne - numTwo);
  }

  // alerts the player if they have input a number that is out of range from 0 to 9.
  const alert = (guess) => {
      if (guess < 0 || guess > 9) {
          console.log('Number is out of range! Please pick a number between 0 and 9.');
          return true;
      }
      else {
          return false;
      }
  }
  
  // returns true if human is closer, false if computer is closer.
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
  
  // adds 1 point to either human or computer score depending on who's guess was closer.
  const updateScore = (winner) => {
    if (winner === 'human' || winner === true) {
      humanScore += 1;
    } else if (winner === 'computer' || winner === false) {
      computerScore += 1;
    }
  }
  
  // adds 1 to the round.
  const advanceRound = () => {
    currentRoundNumber += 1;
  }
  
  target = generateTarget();
  console.log(target);

  /* code to test functions, you can uncomment, and run this code in a terminal, but it will slightly mess up 
  the score of the game if you play it on the browser, so make sure to comment it again */

  /* winner = compareGuesses(9, 0, target);
  console.log(winner);
  updateScore(winner);
  console.log(humanScore);
  console.log(computerScore); */

  advanceRound();
  console.log(currentRoundNumber);