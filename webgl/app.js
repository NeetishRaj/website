var initDemo = function(){
  console.log("its working");

  const canvas = document.querySelector("#game");

  //get webGL context
  var gl = canvas.getContext("webgl");


  //Fall back context for IE and edge
  if(!gl){
    console.log("webGL not supported falling back to experimental-webgl");
    var gl = canvas.getContext("experimental-webgl");
  }

  //Still not supported that means CANVAS not supported
  if(!gl){
    console.log("Browser does not suppport web-GL and even the fall back experimental-webgl");
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0,0, window.innerWidth, window.innerHeight);

  gl.clearColor(0.75, 0.85, 0.8, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


};
