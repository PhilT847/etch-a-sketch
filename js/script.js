/* script.js */

let boardSize = 16;
let penColor = "black";
let mouseDown = false;

const boardContainer = document.querySelector("#board-container");
const etchBoard = document.createElement("div");

const optionsContainer = document.querySelector("#options");
const penColorButton = document.createElement("button");
const boardSizeButton = document.createElement("button");

createOptions();
createBoard();

function createOptions() {

    penColorButton.classList.add("options-button");
    penColorButton.style.backgroundColor = "black";

    // Add background image (for rainbow when pen = random)
    penColorButton.style.backgroundImage = "none";
    penColorButton.style.backgroundSize = "cover";

    penColorButton.addEventListener("click", () => {

        toggleColor();

        if(penColor != "random") {

            penColorButton.style.backgroundColor = penColor;
            penColorButton.style.backgroundImage = "none";
        }
        else{

            penColorButton.style.backgroundImage = "url('./images/rainbow.png')";
        }        
    });

    boardSizeButton.classList.add("options-button");
    boardSizeButton.textContent = boardSize;

    boardSizeButton.addEventListener("click", () => {

        selectBoardSize();
    });

    optionsContainer.appendChild(penColorButton);
    optionsContainer.appendChild(boardSizeButton);
}

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

                if(mouseDown){

                    paint(tile);
                }
            });

            tile.addEventListener("mousedown", () => {

                paint(tile);
            });

            col.appendChild(tile);
        }
    }
}

function paint(thisTile) {

    let chosenColor = penColor;

    if(chosenColor != "random") {

        thisTile.style.backgroundColor = penColor;
    }
    else {

        thisTile.style.backgroundColor = getRandomColor();
    }
}

function toggleColor() {

    switch(penColor) {

        case "black":
            penColor = "white";
            break;
        case "white":
            penColor = "random";
            break;
        case "random":
            penColor = "black";
            break;
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

function selectBoardSize() {

    let selection = prompt("Select a size (1-100).", boardSize);

    selection = parseInt(selection);

    if(selection != boardSize) {

        if(!Number.isInteger(selection)) {

            selection = 16;
        }
        else{

            selection = Math.floor(parseInt(selection));
        }

        if(selection < 1){

            selection = 1;
        }
        else if(selection > 100) {

            selection = 100;
        }

        boardSize = selection;

        // Remove etchBoard's children and regenerate tiles
        etchBoard.replaceChildren();
        generateTiles();

        boardSizeButton.textContent = boardSize;
    }
}

// Detect whether mouse is down and pen can press
window.onmousedown = () => {

    mouseDown = true;
}

window.onmouseup = () => {

    mouseDown = false;
}