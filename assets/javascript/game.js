// Variables
var computerScore = 0;
var userScore = 0;
var crystalScore = 0;
var wins = 0;
var loses = 0;
var newscore = 0;

// Functions
function computerScoreRandom() {
    computerScore = Math.floor(Math.random() * 100) + 20;
}

function crystalScoreRandom() {
    crystalScore = Math.floor(Math.random() * 11) + 1;
}

function initializeTexts() {
    $("#computerScore").text(computerScore);
    $("#userScore").text(userScore);
    $("#wins").text(wins);
    $("#loses").text(loses);
}

function initializeCrystals() {
    for (var i = 0; i < 4; i++) {
        crystalScoreRandom();
        var crystal = $("#crystal-" + (i + 1));
        crystal.attr("crystal-score", crystalScore);
    };

    crystal.html(crystalScore);

}

function counter() {
    if (userScore > computerScore) {
        loses++;
        reset();
    } else if (userScore === computerScore) {
        wins++;
        reset();
    }
}

function reset() {
    userScore = 0;
    computerScoreRandom();
    initializeTexts();
    initializeCrystals();
}

$(document).ready(function () {
    $("#start-game").on("click", function () {
        computerScoreRandom();
        initializeTexts();
        initializeCrystals();
    });
    
    $(".crystal").on("click", function () {
        userScore += parseInt($(this).attr("crystal-score"));
        $("#userScore").text(userScore);
        counter();
    });
});



  // Speudo code
// un juego que contenga 4 cristales
// la computadora tiene que generar un numero random (del 19 al 120)
// cada cristal tiene que tener un numero random del 1 al 12 solamente
// cada vez que se gane o pierda se tiene que generar de nuevo un numero random para cada cristal
// cuando hacemos click a cada cristal, se tienen que ir sumando
// la cantidad del usuario tiene que igual el resultado RANDOM que genere la computadora (del 19 al 120)
// si te pasas del total (computerRandom) es cuando pierdes
// cada juego que se gane o pierda, tiene que sumar un juego en el contador (wins or loses)