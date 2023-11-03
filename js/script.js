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

            tile.addEventListener("mouseover", () => {
                tile.style.backgroundColor = getRandomColor();
            });

            col.appendChild(tile);
        }
    }
}

function getRandomColor() {

    let fullColor = "rgb(";

    let randomR = Math.random() * 256;
    let randomG = Math.random() * 256;
    let randomB = Math.random() * 256;

    fullColor += randomR + ", ";
    fullColor += randomG + ", ";
    fullColor += randomB + ")";

    return fullColor;
}