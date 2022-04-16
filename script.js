const rock = "Rock";
const scissors = "Scissors";
const paper = "Paper";
let answerUser;
let answerComputer;
let confirmRound;

function capitalize(str)
{
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return str;
}

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
    answerUser = capitalize(prompt(`Choose one ${rock}, ${paper} or ${scissors}`));
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
    alert(message);
}


function game()
{
    alert("Welcome to rock paper and scissors!!!");
    let scoreUser = 0;
    let scoreComputer = 0;

    for(let i = 0; i < 5; i++)
    {
        playRound();
        if(confirmRound === 1 || confirmRound === 4)
        {
            i--
            alert("No one gets points!!")
        }
        else if(confirmRound === 2)
        {
            scoreComputer += 1;
            alert(`Computer score: ${scoreComputer} You score: ${scoreUser}`);
        }
        
        else if(confirmRound === 3)
        {
            scoreUser += 1;
            alert(`Computer score: ${scoreComputer} User score: ${scoreUser}`);
        }

        if(scoreUser == 3)
        {
            alert("Congratulations You Win!!!");
            break;
        }
        else if(scoreComputer == 3)
        {
            alert("Sorry You lost.....");
            break;
        }   
        confirmRound = 0;
    }
}

game();