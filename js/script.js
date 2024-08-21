// Global constants and vars
let squaresPerSide = 16;
const grid = document.querySelector('#grid');
const gridHeight = grid.clientHeight;
const squares = [];
const rows = [];

// Functions
function generateGridSquares() {
    const squareHeight = gridHeight / squaresPerSide;

    for (let row = 0; row < squaresPerSide; row++) {
        squares[row] = [];
        rows[row] = document.createElement('div');
        for (let col = 0; col < squaresPerSide; col++) {
            squares[row][col] = document.createElement('div');
            rows[row].appendChild(squares[row][col]);
        }
        grid.appendChild(rows[row]);
    }

    for (let row of rows) {
        row.classList.add('row');
    }

    for (let squareRow of squares) {
        for (let square of squareRow) {
            square.style.width = `${squareHeight}px`;
            square.style.height = `${squareHeight}px`;
            square.style.opacity = '0.0';
            square.classList.add('square');
            square.addEventListener('mouseover', function() {
                let opacity = parseFloat(this.style.opacity);
                let newOpacity = Math.min(opacity + 0.1, 1.0);
                this.style.opacity = `${newOpacity}`;
            });
        }
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function getSquaresPerSideFromUser() {
    let userInput = prompt('How many squares would you like per side?', 0);
    let squaresPerSideRequested = parseInt(userInput.trim(), 10);
    if (!isNaN(squaresPerSideRequested) && squaresPerSideRequested <= 100 && squaresPerSideRequested > 0) {
        squaresPerSide = squaresPerSideRequested;
        clearGrid();
        generateGridSquares();
    } else {
        alert('Invalid input! Please enter an integer value between 1 and 100.')
    }
}

// Main logic 

// Initialize grid
generateGridSquares();

// Add event listener for button click
const button = document.querySelector('#btn');
button.addEventListener('click', getSquaresPerSideFromUser);
