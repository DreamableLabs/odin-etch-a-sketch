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
    rows[row].classList.add('row');
    for (let col = 0; col < SQUARES_PER_SIDE; col++) {
        squares[row][col] = document.createElement('div');
        squares[row][col].classList.add('square');
        rows[row].appendChild(squares[row][col]);
    }
    grid.appendChild(rows[row]);
}
