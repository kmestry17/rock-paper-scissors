const readlineSync = require('readline-sync');

//function to generate the computer choice
function generateComputerChoice() {
    
    //make a list of available choices
    const choices = ['rock','paper','scissors'];
    //generate a random number for the choices
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

//to return the winner
function determineWinner(userChoice, computerChoice) {

    if (userChoice == computerChoice) {
        return 'It\'s a tie!'
    } else if (
        (userChoice == 'rock' && computerChoice == 'scissors') ||
        (userChoice == 'scissors' && computerChoice == 'paper') ||
        (userChoice == 'paper' && computerChoice == 'rock')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }

}

function playGame() {
    console.log('Let\'s play Rock, Paper, Scissors!\n');
    //get the user input
    const userChoice = readlineSync.question('Enter your choice (rock, paper, or scissors): ').toLowerCase();
    
    //check invalid choice
    if (userChoice != 'rock' || 
        userChoice != 'paper' ||  
        userChoice != 'scissors') {
            
        console.log('Invalid response!');
        return
    }

    const computerChoice = generateComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

module.exports = {
    playGame
};