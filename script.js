let homeScore = 0;
let guestScore = 0;
const homeScoreboard = document.getElementById("home-scoreboard");
const guestScoreboard = document.getElementById("guest-scoreboard");
const buttons = document.querySelectorAll("#btn");
const timer = document.querySelector(".timer");
let timerSeconds = 60;
const newGameBtn = document.querySelector(".new-game-btn");

function addOneToHome() {
    homeScore++;
    homeScoreboard.textContent = homeScore;
}

function addTwoToHome() {
    homeScore += 2;
    homeScoreboard.textContent = homeScore;
}

function addThreeToHome() {
    homeScore += 3;
    homeScoreboard.textContent = homeScore;
}

function addOneToGuest() {
    guestScore++;
    guestScoreboard.textContent = guestScore;
}

function addTwoToGuest() {
    guestScore += 2;
    guestScoreboard.textContent = guestScore;
}

function addThreeToGuest() {
    guestScore += 3;
    guestScoreboard.textContent = guestScore;
}

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        if (event.target.value === "One Home") {
            addOneToHome();
        } else if (event.target.value === "Two Home") {
            addTwoToHome();
        } else if (event.target.value === "Three Home") {
            addThreeToHome();
        } else if (event.target.value === "One Guest") {
            addOneToGuest();
        } else if (event.target.value === "Two Guest") {
            addTwoToGuest();
        } else if (event.target.value === "Three Guest") {
            addThreeToGuest();
        };
    });
});

newGameBtn.addEventListener("click", function() {
    homeScore = 0;
    homeScoreboard.textContent = homeScore;
    guestScore = 0;
    guestScoreboard.textContent = guestScore;
});