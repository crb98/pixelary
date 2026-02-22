function pageLoaded() {
  console.log("js ready");
}

pageLoaded();

const canvas = document.querySelector("#canvas");
const palette = document.querySelector("#palette");
const defaultSwatch = document.querySelector("#black");
let currentColour = getComputedStyle(defaultSwatch).backgroundColor;
let selectedSwatch = defaultSwatch;
selectedSwatch.classList.add("is-selected");

for (let i = 0; i < 25 * 25; i += 1) {
  const pixel = document.createElement("div");
  pixel.className = "pixel";
  canvas.append(pixel);
}

function paletteClick(event) {
  const swatch = event.target.closest(".colours > div");
  if (!swatch) {
    return;
  }

  if (selectedSwatch) {
    selectedSwatch.classList.remove("is-selected");
  }

  selectedSwatch = swatch;
  selectedSwatch.classList.add("is-selected");
  currentColour = getComputedStyle(swatch).backgroundColor;
}

function canvasClick(event) {
  const pixel = event.target.closest(".pixel");
  if (!pixel) {
    return;
  }

  pixel.style.backgroundColor = currentColour;
}

palette.addEventListener("click", paletteClick);
canvas.addEventListener("click", canvasClick);
