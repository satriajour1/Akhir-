const userChcList = document.getElementsByClassName("user-rps-ico")
const choice = ['Rock', 'Paper', 'Scissors']
var userID;

class Result {
    getResult(userPick, compPick) {
        if (userPick === compPick) {
            console.log('Draw')
            return "Draw"

        } else if (userPick > compPick) {
            if (userPick === 2 && compPick === 0) {
                console.log('COM WIN')
                return "Lose"
            } else {
                console.log('PLAYER 1 WIN')
                return "Win"
            }

        } else if (userPick < compPick) {
            if (userPick === 0 && compPick === 2) {
                console.log('PLAYER 1 WIN')
                return "Win"
            } else {
                console.log('COM WIN')
                return "Lose"
            }
        }
    }
}

class ViewResult extends Result {
    showResult(res) {
        const logText = document.getElementById("log-txt");
        const logCont = document.getElementById("container-log");

        switch (res) {
            case ("Win"):
                logText.innerHTML = "PLAYER 1 <br> WINN"
                logCont.style.backgroundColor = "#4C9654";
                logText.style.color = "white";
                logText.style.fontSize = "38px";
                logCont.style.transform = "rotate(330deg)";
                break;
            case ("Lose"):
                logText.innerHTML = "COM <br> WIN"
                logCont.style.backgroundColor = "#4C9654";
                logText.style.color = "white";
                logText.style.fontSize = "38px";
                logCont.style.transform = "rotate(330deg)";

                break;
            case ("Draw"):
                logText.innerHTML = "DRAW"
                logCont.style.backgroundColor = "#035B0C";
                logText.style.color = "white";
                logText.style.fontSize = "38px";
                logCont.style.transform = "rotate(330deg)";

                break;
        }
    }
}

function startGame() {
    for (let i = 0; i < userChcList.length; i++) {
        userChcList[i].addEventListener("click", () => {
            userID = i;
            playGame();
        })
    }
}

function playGame() {
    const userIco = document.querySelectorAll(".user-rps-ico")
    const compIco = document.querySelectorAll(".comp-rps-ico")

    const result = new Result();
    const viewResult = new ViewResult();

    let userChc = choice[userID]
    console.log('PLAYER 1 choose ' + userChc)

    let compID = Math.floor(Math.random() * 3)

    let compChc = choice[compID]
    console.log('COM choose ' + compChc)


    userIco[userID].style.backgroundColor = "#C4C4C4";
    compIco[compID].style.backgroundColor = "#C4C4C4";

    viewResult.showResult(result.getResult(userID, compID));

    endGame();

    document.getElementById("refresh-btn").onclick = refreshGame;
}

function endGame() {
    for (let i = 0; i < userChcList.length; i++) {
        userChcList[i].replaceWith(userChcList[i].cloneNode(true))
    }
}

function refreshGame() {
    // location.reload();

    const userIco = document.querySelectorAll(".user-rps-ico")
    const compIco = document.querySelectorAll(".comp-rps-ico")
    const logText = document.getElementById("log-txt");
    const logCont = document.getElementById("container-log");

    logText.innerHTML = "VS"
    logCont.style.backgroundColor = "";
    logText.style.color = "#BD0000";
    logText.style.fontSize = "144px";
    logCont.style.transform = "rotate(0deg)";
    userIco.forEach(item => {
        item.style.backgroundColor = "";
    })
    compIco.forEach(item => {
        item.style.backgroundColor = "";
    })
    userID = undefined;
    console.clear();
    startGame();
}

startGame();