const drawingArea = document.querySelector(".drawing-area");

let colorMode = "";

function createGridSquares(dimension) {
  for (let i = 0; i < 16 * 16; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.toggle("grid-square");
    gridSquare.style.width = `${(1 / 16) * 100}%`;
    gridSquare.style.height = `${(1 / 16) * 100}%`;
    drawingArea.appendChild(gridSquare);
  }
}

createGridSquares();

const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener("mouseover", () => {
    if (colorMode === "rainbow") {
      let randomR = Math.floor(Math.random() * 256);
      let randomG = Math.floor(Math.random() * 256);
      let randomB = Math.floor(Math.random() * 256);
      gridSquare.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (colorMode === "eraser") {
      gridSquare.style.backgroundColor = "white";
    } else {
      gridSquare.style.backgroundColor = "black";
    }
  });
});

const normalBtn = document.querySelector("#normal-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const clearBtn = document.querySelector("#clear-btn");

normalBtn.addEventListener("click", () => {
  normalBtn.classList.add("activated");
  rainbowBtn.classList.remove("activated");
  eraserBtn.classList.remove("activated");
  colorMode = "";
});

rainbowBtn.addEventListener("click", () => {
  rainbowBtn.classList.add("activated");
  normalBtn.classList.remove("activated");
  eraserBtn.classList.remove("activated");
  colorMode = "rainbow";
});

eraserBtn.addEventListener("click", () => {
  eraserBtn.classList.add("activated");
  normalBtn.classList.remove("activated");
  rainbowBtn.classList.remove("activated");
  colorMode = "eraser";
});

clearBtn.addEventListener("click", () => {
  gridSquares.forEach((gridSquare) => {
    gridSquare.style.backgroundColor = "white";
  });
});
