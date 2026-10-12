let gridSize = 64;
const gridWidth = 560;
const grid = document.querySelector("#grid");
const header = document.querySelector("#header");

function createGrid() {
    grid.style.display = "flex";
    grid.style.flexDirection = "column";

    for (let i = 1; i <= gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("rows");
        row.style.display = "flex";
        row.style.flex = "1";
        grid.appendChild(row);
        for (let j = 1; j <= gridSize; j++) {
            const cell = document.createElement("div");
            cell.style.flex = "1 0";
            cell.classList.add("cells");
            row.appendChild(cell);
        }
    }
}
function clearGrid() {
    const rows = grid.querySelectorAll(".rows");
    rows.forEach((row) => grid.removeChild(row));
    createGrid();
}
function randomColor() {
    return Math.floor(Math.random() * 256);
}

header.addEventListener("click", (e) => {
    if (e.target.id === "clear") clearGrid();
    else if (e.target.id === "resize") {
        gridSize = +prompt("Enter the new grid size", "64");
        while (gridSize < 1) {
            gridSize = +prompt("Re-enter a valid grid size", "1");
        }
        while (gridSize > 100) {
            gridSize = +prompt("Too large for your browser to handle. Re-enter", "100");
        }
        clearGrid();
    }
});
grid.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
});

createGrid();