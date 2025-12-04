let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");



let count = 0;
let countGuest = 0;

function addOne() {
    count += 1
    homeScore.textContent = count
}

document.getElementById("home-btn-1").addEventListener("click", addOne);

function addTwo() {
    count += 2
    homeScore.textContent = count
}

document.getElementById("home-btn-2").addEventListener("click", addTwo);

function addThree() {
    count += 3
    homeScore.textContent = count
}

document.getElementById("home-btn-3").addEventListener("click", addThree);

function addOneGuest() {
    countGuest += 1
    guestScore.textContent = countGuest
}

document.getElementById("guest-btn-1").addEventListener("click", addOneGuest);

function addTwoGuest() {
    countGuest += 2
    guestScore.textContent = countGuest
}

document.getElementById("guest-btn-2").addEventListener("click", addTwoGuest);

function addThreeGuest() {
    countGuest += 3
    guestScore.textContent = countGuest
}

document.getElementById("guest-btn-3").addEventListener("click", addThreeGuest);

function scoreReset() {
    count = 0
    homeScore.textContent = count

    countGuest = 0
    guestScore.textContent = countGuest
}

document.getElementById("reset-btn").addEventListener("click", scoreReset);