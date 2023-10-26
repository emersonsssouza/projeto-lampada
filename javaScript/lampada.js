let lamp = document.getElementById("lampada");
let btn = document.querySelector("btn");

function isquebrou() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  console.log("Ligou");
  if (!isquebrou()) {
    lamp.src = "imagens/ligada.png";
  }
}

function lampOff() {
  console.log("Desligou");
  if (!isquebrou()) {
    lamp.src = "imagens/desligada.png";
  }
}

function lampBroken() {
  console.log("Quebrou");
  lamp.src = "imagens/quebrada.png";
}
