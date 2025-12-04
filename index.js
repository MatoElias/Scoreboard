let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let count = 0
let countGuest = 0

function addOne() {
    count += 1
    homeScore.textContent = count
}

function addTwo() {
    count += 2
    homeScore.textContent = count
}

function addThree() {
    count += 3
    homeScore.textContent = count
}

function addOneGuest() {
    countGuest += 1
    guestScore.textContent = countGuest
}

function addTwoGuest() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function addThreeGuest() {
    countGuest += 3
    guestScore.textContent = countGuest
}

function scoreReset() {
    count = 0
    homeScore.textContent = count

    countGuest = 0
    guestScore.textContent = countGuest
}