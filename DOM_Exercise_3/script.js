//DOM, event handler, event object

const cursor = document.getElementById("circle");

// add on mouse event to the window

window.onmousemove = function(move){
  
let mousex = move.pageX;
let mousey = move.pageY;

circle.style.left = mousex + "px";
circle.style.top = mousey + "px";
  
}