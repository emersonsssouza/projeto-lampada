let lamp = document.getElementById("lampada");
let btn = document.querySelector("btn");
let titulo = document.getElementById("titulo-lampada")
let background = document.body;

function isquebrou() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  console.log("Ligou");
  if (!isquebrou()) {
    lamp.src = "imagens/ligada.png";
    background.style.backgroundColor = "#F2A20C";
    titulo.style.color = "#000"
  }
}

function lampOff() {
  console.log("Desligou");
  if (!isquebrou()) {
    lamp.src = "imagens/desligada.png";
    background.style.backgroundColor = "#000"
  }
}

function lampBroken() {
  console.log("Quebrou");
  lamp.src = "imagens/quebrada.png";
  background.style.backgroundColor = "#000"
}



