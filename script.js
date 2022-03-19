let color = "rgb(100, 148, 202)";

function populateBoard(gridSize) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let amount = gridSize * gridSize;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "rgb(209, 183, 183)";
        board.appendChild(square);  /// if does not work try: board.insertAdjacentElemnent("beforeend, square");
    }
}

populateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        populateBoard(input);
    } else {
        alert("Please enter number betwee 2-100!");
    }
}

function colorSquare() {
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(userChoice) {
    color = userChoice;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "rgb(209, 183, 183)");
}