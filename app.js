const container = document.querySelector("#container");

const grid = { rows: 26, col: 26 };
const squaresCount = grid.rows * grid.col;

createGrid(squaresCount);

function createGrid(sqCount) {
  for (let i = 0; i < sqCount; i++) {
    const gridItem = document.createElement("div");
    container.append(gridItem);
    // gridItem.textContent = `${i + 1}`;
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", updateBack);
  }
  container.style.setProperty(
    `grid-template-columns`,
    `repeat(${grid.col},1fr)`
  );
}

function updateBack(e) {
  const ele = e.target;
  ele.style.backgroundColor = "red";
}
