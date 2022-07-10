const drawingArea = document.querySelector(".drawing-area");

let colorMode = "";
let drawingAreaDimension = 16;

function createGridSquares() {
  drawingArea.innerHTML = "";
  for (let i = 0; i < drawingAreaDimension ** 2; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.toggle("grid-square");
    gridSquare.style.width = `${100 / drawingAreaDimension}%`;
    gridSquare.style.height = `${100 / drawingAreaDimension}%`;
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
    drawingArea.appendChild(gridSquare);
  }
}

createGridSquares();

let gridSquares = document.querySelectorAll(".grid-square");
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

const dimensionSlider = document.querySelector("#dimension-slider");
const dimensionSliderLabel = document.querySelector("#dimension-slider-label");

dimensionSlider.addEventListener("input", () => {
  dimensionSliderLabel.textContent = `${dimensionSlider.value} x ${dimensionSlider.value}`;
  drawingAreaDimension = parseInt(dimensionSlider.value, 10);
  createGridSquares();
  gridSquares = document.querySelectorAll(".grid-square"); //need to reassign here so the clear button knows about the new grid squares
});
