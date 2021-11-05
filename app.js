let score1 = 0;
let score2 = 0;

function rollTheDice() {
    setTimeout(function () {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src", 
        "dice" + randomNumber1 + ".png");
        console.log(score1 + randomNumber1);

        document.querySelector(".img2").setAttribute("src", 
        "dice" + randomNumber2 + ".png")

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h2").innerHTML = "Draw!";
        } else if (randomNumber1 < randomNumber2 ) {
            document.querySelector("h2").innerHTML = "Player 2 Wins!";
        } else if (randomNumber1 > randomNumber2) {
            document.querySelector("h2").innerHTML = "Player 1 Wins!"
        }
    }, 1500)
}