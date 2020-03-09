var fro = document.getElementById('h');
var mouth = document.getElementById('s');
var leftEyes = document.getElementById('left');
var rightEyes = document.getElementById('right');

fro.addEventListener('keypress', (event) => {
  changeFro(event)
});
mouth.addEventListener('dblclick', (event) => {
  changeMouth(event)
});
leftEyes.addEventListener('click', (event) => {
  changeLeftEyes(event)
});
rightEyes.addEventListener('click', (event) => {
  changeRightEyes(event)
});


function changeMouth(event) {
  var lips = event.target;
  var color =lips.style.fill;
  if(color == "red") {
    lips.style.fill= "white";
  }
  else {
    lips.style.fill= "red";
  }

}

function changeLeftEyes(event) {
  var leftEyeBall = event.target;
  var color =leftEyeBall.style.fill;
  if(color == "black") {
    leftEyeBall.style.fill = "purple";
  }
  else {
    leftEyeBall.style.fill= "black";
  }

}

function changeRightEyes(event) {
  var rightEyeBall = event.target;
  var color =rightEyeBall.style.fill;
  if(color == "black") {
    rightEyeBall.style.fill = "purple";
  }
  else {
    rightEyeBall.style.fill= "black";
  }

}

function changeFro(event) {
  var hairs = fro
  var color = hairs.style.fill;
  if (event.key == "g"){
    color = "green";
  }
  else if (event.key == "r"){
    color = "red";
  }
  else if (event.key == "o"){
    color = "orange";
  }
  else if (event.key == "y"){
   color = "yellow";
  }
  else if (event.key == "b"){
    color = "blue";
  }
  else if (event.key == "p"){
    color = "purple";
  }
  else {
    color = "red";
  }
}
