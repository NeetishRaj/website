"use strict"

var gl, fallingRect, timer, score = 0, missed = 0;

var initDemo = function() {
  console.log("working fine");

  if(!(gl = getRenderingContext())){
    console.log("webGL Context not returned");
    return;
  }

  gl.enable(gl.SCISSOR_TEST);

  document.querySelector("canvas").addEventListener("click", clickEvent, false);
  fallingRect = new Rectangle();
  timer = setTimeout(drawAnimation, 17);
};

function drawAnimation(){
  gl.scissor(fallingRect.position[0],
    fallingRect.position[1],
    fallingRect.size[0],
    fallingRect.size[1]);

  gl.clear(gl.COLOR_BUFFER_BIT);

  fallingRect.position[1] -= fallingRect.velocity;
  if (fallingRect.position[1] < 0) {
    missed++;
    console.log("missed : "+missed);
    fallingRect = new Rectangle();
  }

  timer = setTimeout(drawAnimation, 17);
}

function clickEvent(evt){
  var position = [evt.pageX - evt.target.offsetLeft,
    gl.drawingBufferHeight - (evt.pageY - evt.target.offsetTop)];

  var diffPos = [ position[0] - fallingRect.position[0],
        position[1] - fallingRect.position[1] ];
    if ( diffPos[0] >= 0 && diffPos[0] < fallingRect.size[0]
        && diffPos[1] >= 0 && diffPos[1] < fallingRect.size[1] ){
      score++;
      console.log("SCORE : "+score);
      fallingRect = new Rectangle();
    }
}


function Rectangle(){
  var rect = this;

  rect.size = [20 + Math.random() * 60, 20 + Math.random() * 60]
  rect.position =[Math.random() * gl.drawingBufferWidth - rect.size[0],
    gl.drawingBufferHeight];
  rect.color = getRandomColors();
  rect.velocity = 1.0 + Math.random()*8.0;

  gl.clearColor(rect.color[0], rect.color[1], rect.color[2], 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

function getRenderingContext(){
  var canvas = document.querySelector("CANVAS");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if(!gl) {
    console.log("webGL not supported");
  }
  else{
    console.log("getRenderingContext() called and context returned");
  }

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  return gl;
}

function getRandomColors(){
  return [Math.random(), Math.random(), Math.random()];
}
