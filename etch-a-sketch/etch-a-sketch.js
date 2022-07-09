const drawingArea = document.querySelector(".drawing-area");

for (let i = 0; i < 16 * 16; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.classList.toggle("grid-square");
  gridSquare.style.width = `${(1 / 16) * 100}%`;
  gridSquare.style.height = `${(1 / 16) * 100}%`;
  drawingArea.appendChild(gridSquare);
}

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener("mouseover", () => {
    gridSquare.style.backgroundColor = "#000000";
  });
});

const rainbowBtn = document.querySelector("#rainbow-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const colorBtn = document.querySelector("#color-btn");

function clearDrawingArea() {
  gridSquares.forEach((gridSquare) => {
    gridSquare.style.backgroundColor = "#FFFFFF";
  });
}

const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", clearDrawingArea);
