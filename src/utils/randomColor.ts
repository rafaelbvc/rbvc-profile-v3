const colors = [
  "lightGray",
  "mediumGray",
  "black",
  "white",
  "lightBGray",
  "golden",
  "green",
  "red",
];

const colorsHex = [
  "#FCFCFF",
  "#b6b6b6",
  "#000",
  "#FFF",
  "#D9E2E5",
  "#CAAA6C",
  "#00FF00",
  "#FFFF00",
  "#FF1999",
  "#2B6A4F",
  "#1B2A3C",
  "#4C9B45",
  "#90FFCC",
];

function getRandomColorBG() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return `transition-colors duration-500 bg-${colors[randomIndex]}`;
}

function getRandomColorItem() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return `transition-colors duration-500 text-${colors[randomIndex]}`;
}

function getRandomColorItem2() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return `transition-colors duration-500 text-${colors[randomIndex]}`;
}

function getRandomColorHex() {
  const randomIndex = Math.floor(Math.random() * colorsHex.length);
  return `${colorsHex[randomIndex]}`;
}

export { getRandomColorBG, getRandomColorItem, getRandomColorHex, getRandomColorItem2 };
