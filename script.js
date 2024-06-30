let userscore = 0;
let computer = 0;

let msg = document.querySelector("#msg")

const choices = document.querySelectorAll(".choice");
const userscoreborde = document.querySelector("#user-score");
const compscoreborde = document.querySelector("#Computer-score");

const draw = (choiceid) => {
    console.log("The game is a draw");
    msg.innerText = `It's a tie! Both the computer and you chose ${choiceid}`;
}

const computerchoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const showWinner = (userwin, choiceid, computerChoice) => {
    if (userwin) {
        userscore++;
        userscoreborde.innerText = userscore;
        console.log("You win");
        msg.innerText = `You win! ${choiceid} beats ${computerChoice}`;
    } else {
        computer++;
        compscoreborde.innerText = computer;
        console.log("You lose");
        msg.innerText = `You lose! ${computerChoice} beats ${choiceid}`;
    }
}

const playgame = (choiceid) => {
    console.log("User choice = ", choiceid);
    const computerChoice = computerchoice();
    console.log("Computer choice = ", computerChoice);

    if (choiceid === computerChoice) {
        draw(choiceid);
    } else {
        let userwin = true;
        if (choiceid === "Rock") {
            userwin = computerChoice === "Scissors";
        } else if (choiceid === "Paper") {
            userwin = computerChoice === "Rock";
        } else if (choiceid === "Scissors") {
            userwin = computerChoice === "Paper";
        }
        showWinner(userwin, choiceid, computerChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        playgame(choiceid);
    });
});
