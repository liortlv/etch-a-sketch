let color = "rgb(100, 148, 202)"; // initial color when mouseover
populateBoard(16);

// Populate the board with nxn (gridSize x gridSize) squares
function populateBoard(gridSize) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "rgb(209, 183, 183)";
        board.appendChild(square);
    }
}

// Called when user change the board size input
function changeBoardSize(userInput) {
    if (userInput >= 2 && userInput <= 100) {
        populateBoard(userInput);
    } else {
        alert("Please enter number betwee 2-100!");
    }
}

// Called when mouseover to change the current object color
function colorSquare() {
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

// Called when user clicked a color change button
function changeColor(userChoice) {
    color = userChoice;
}

// Resets the board to the initial color
function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "rgb(209, 183, 183)");
}