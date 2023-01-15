let color = "black";
let board = document.querySelector(".board");
let gridItems = board.querySelectorAll("div");

function createBoard(size) {
  //similar to creating holder[]
  gridItems.forEach((div) => div.remove()); //remove all items so we can add new items
  board.style.setProperty(`grid-template-columns`, `repeat(${size},1fr)`);
  board.style.setProperty(`grid-template-rows`, `repeat(${size},1fr)`);

  let totalSize = size * size;

  for (let i = 0; i < totalSize; i++) {
    let gridItem = document.createElement("div");
    gridItem.style.backgroundColor = "lightblue";
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", changeColor);
    board.insertAdjacentElement("beforeend", gridItem);
  }
}

createBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    createBoard(input);
  } else {
    console.log("number should be between 2 and 100");
  }
}

function changeColor() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(
      (this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`)
    );
  } else {
    this.style.backgroundColor = color;
  }
}

//click button to change color value
function changeColorBtn(choice) {
  color = choice;
}
