var fro = document.getElementsByClassName('hair');
var mouth = document.getElementsByClassName('smile');
var eyes = document.getElementsByClassName('eye');

mouth.addEventListener('dblclick', (event) => {
  changeMouth(event);
});
eyes.addEventListener('click', (event) => {
  changeEyes(event);
});
fro.addEventListener('keypress', (event) => {
  changeFro(event);
});

function changeMouth(event) {
  var lips = event.target;
  var color =lips.fill;
  if(color == "red") {
    lips.fill= "white";
  }
  else {
    lips.fill= "red";
  }

}

function changeEyes(event) {
  var eyeBall = event.target;
  var color =eyeBall.fill;
  if(color == "black") {
    eyeBall.fill = "violet";
  }
  else {
    eyeBall.fill= "black";
  }

}

function changeFro(event) {
  var hairs = event.target;
  var color =hairs.fill;
  if (event.key === "g"){
    hairs.fill = "green";
  }
  else if (event.key === "r"){
    hairs.fill = "red";
  }
  else if (event.key === "o"){
    hairs.fill = "orange";
  }
  else if (event.key === "y"){
    hairs.fill = "yellow";
  }
  else if (event.key === "b"){
    hairs.fill = "blue";
  }
  else if (event.key === "p"){
    hairs.fill = "purple";
  }
  else {
    hairs.fill = "red";
  }
}
