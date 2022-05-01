const rock = "Rock";
const scissors = "Scissors";
const paper = "Paper";
let answerUser;
let answerComputer;
let confirmRound;
let scoreUser = 0;
let scoreComputer = 0;
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const divResult = document.getElementById('container-result');
const divResultOne = document.createElement('div');
const divResultTwo = document.createElement('div');


function computerPlay()
{
    let number = Math.floor(Math.random() * 3);
    if(number === 1)
    {
        answerComputer = rock;
    }
    else if(number === 2)
    {
        answerComputer = scissors;
    }
    else
    {
        answerComputer = paper;
    }
    return answerComputer;
}

function playRound()
{
    let message;
    answerComputer = computerPlay();

    if(answerComputer == answerUser)
    {
        message = "This is a tie";
        confirmRound = 1; 
    }
    else if(answerComputer == rock && answerUser == scissors || answerComputer == paper && answerUser == rock || answerComputer == scissors && answerUser == paper )
    {
        message = "Computer win!!";
        confirmRound = 2;
    }
    else if(answerComputer == scissors && answerUser == rock || answerComputer == rock && answerUser == paper || answerComputer == paper && answerUser == scissors)
    {
        message = "You Win!!";
        confirmRound = 3;
    }
    else
    {
        message = "Do you want hackme?"
        confirmRound = 4;
    }

    divResultOne.textContent = message;
    divResult.appendChild(divResultOne);
    game();
}
    
function capitalize(str)
{
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return str;
}

function game()
{
    let messageTwo;

     if(confirmRound === 2)
    {
        scoreComputer += 1;
        messageTwo = `Computer score: ${scoreComputer} You score: ${scoreUser}`;
    }
    
    else if(confirmRound === 3)
    {
        scoreUser += 1;
        messageTwo = `Computer score: ${scoreComputer} User score: ${scoreUser}`;
    }
    else
    {
        messageTwo = `Computer score: ${scoreComputer} User score: ${scoreUser}`;
    }

    if(scoreUser == 5)
    {
        messageTwo = "Congratulations You Win!!!";
        scoreComputer = 0;
        scoreUser = 0;
    }
    else if(scoreComputer == 5)
    {
        messageTwo = "Sorry You lost.....";
        scoreComputer = 0;
        scoreUser = 0;
    }   
    confirmRound = 0;
    divResultTwo.textContent = messageTwo;
    divResult.appendChild(divResultTwo)
    
}


btnRock.addEventListener('click', () =>{
    answerUser = rock;
    playRound();
});

btnPaper.addEventListener('click', () =>{
    answerUser = paper;
    playRound();
});

btnScissors.addEventListener('click', () =>{
    answerUser = scissors;
    playRound();
});

/*function game()
{
    let scoreUser = 0;
    let scoreComputer = 0;
    let messageTwo;

    for(let i = 0; i < 5; i++)
    {

        playGame();
        if(confirmRound === 1 || confirmRound === 4)
        {
            i--
            messageTwo = "No one gets points!!";
        }
        else if(confirmRound === 2)
        {
            scoreComputer += 1;
            messageTwo = `Computer score: ${scoreComputer} You score: ${scoreUser}`;
        }
        
        else if(confirmRound === 3)
        {
            scoreUser += 1;
            messageTwo = `Computer score: ${scoreComputer} User score: ${scoreUser}`;
        }

        if(scoreUser == 3)
        {
            messageTwo = "Congratulations You Win!!!";
            break;
        }
        else if(scoreComputer == 3)
        {
            messageTwo = "Sorry You lost.....";
            break;
        }   
        confirmRound = 0;
        console.log(messageTwo)
        divResultTwo.textContent = messageTwo;
        divResult.appendChild(divResultTwo);
    }
};*/