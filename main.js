var gamearea = document.querySelector(".gamearea");
var startedgame = document.querySelector(".startedgame");
var resulttext = document.querySelector(".resulttext");

var myplace = document.querySelector(".myplace");
var botplace = document.querySelector(".botplace");

var selected;

function Choose(item, itemname, name, icon) {
    selected = item.className;
    console.log(selected);

    gamearea.style.display = "none";
    startedgame.style.display = "flex";

    myplace.innerHTML += `<div class="${itemname}">
        <img class="${name}" src="./images/${icon}.svg" alt="">
    </div>`;

    let rand = Math.round(Math.random() * 2);
    console.log(rand);

    if (rand == 0) {
        botplace.innerHTML += `<div class="item-paper">
        <img class="paper" src="./images/icon-paper.svg" alt="">
    </div>`;
    } else if (rand == 1) {
        botplace.innerHTML += `<div class="item-scissors">
        <img class="scissors" src="./images/icon-scissors.svg" alt="">
    </div>`;
    } else if (rand == 2) {
        botplace.innerHTML += `<div class="item-rock">
        <img class="rock" src="./images/icon-rock.svg" alt="">
    </div>`;
    }

    if ((rand == 0 && name == "paper") ||
        (rand == 1 && name == "scissors") ||
        (rand == 2 && name == "rock")) {
        resulttext.textContent = "Draw!";
    } else if ((rand == 0 && name == "scissors") ||
        (rand == 1 && name == "rock") ||
        (rand == 2 && name == "paper")) {
        resulttext.textContent = "You Win!";
    } else if ((rand == 0 && name == "rock") ||
        (rand == 1 && name == "paper") ||
        (rand == 2 && name == "scissors")) {
        resulttext.textContent = "You Lose!";
    }
}

function OnClicPlayAgain() {
    location.reload();
}