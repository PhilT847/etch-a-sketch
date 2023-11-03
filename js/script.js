/* script.js */
let boardSize = 16;

const boardContainer = document.querySelector("#board-container");
const etchBoard = document.createElement("div");

createBoard();

function createBoard() {

    etchBoard.classList.add("etchBoard");

    boardContainer.appendChild(etchBoard);

    generateTiles();
}

function generateTiles() {

    for(let i = 0; i < boardSize; i++) {

        const col = document.createElement("div");
        col.classList.add("column");
        etchBoard.appendChild(col);

        for(let j = 0; j < boardSize; j++) {

            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.style.aspectRatio = "1/1";
            col.appendChild(tile);
        }
    }
}