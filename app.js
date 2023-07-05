const container = document.querySelector(".container");
const unSplash = "https://source.unsplash.com/random/";
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unSplash}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

//To style the heading 
document.getElementById("heading").style.textAlign = "center";
document.getElementById("heading").style.fontSize = "28px";
document.getElementById("heading").style.textDecorationLine = "underline";
document.getElementById("heading").style.color = "blueviolet";
