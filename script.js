const container = document.querySelector(".container");
createGrid(16);

function createGrid(gridSize) {
    container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 30px); grid-template-rows: repeat(${gridSize}, 30px);`);
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        let cell = document.createElement("div");
        cell.classList.add('cell');
        container.appendChild(cell);
    }  
}




