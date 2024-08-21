const SQUARES_PER_SIDE = 16;

const grid = document.querySelector('#grid');
const gridHeight = grid.offsetHeight;
console.log(gridHeight);
const squareHeight = gridHeight / SQUARES_PER_SIDE;

const squares = [];
const rows = [];
for (let row = 0; row < SQUARES_PER_SIDE; row++) {
    squares[row] = [];
    rows[row] = document.createElement('div');
    for (let col = 0; col < SQUARES_PER_SIDE; col++) {
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
        square.classList.add('square');
    }
}
