let gridSize = 16;
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
        let tmp = null;
        do {
            tmp = prompt("Enter the new grid size (1-100)", "64");
            if (tmp === null) return;
            if (+tmp < 1) {
                alert("That is not a valid grid size!");
            }
            else if (+tmp > 100) {
                alert("Too large for your browser to handle.");
            } else if (isNaN(+tmp)) {
                alert("That is not even a number!")
            } else gridSize = +tmp;
        } while (isNaN(+tmp) || +tmp < 1 || +tmp > 100);
        clearGrid();
    }
});
grid.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("cells")) return;
    e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
});

createGrid();