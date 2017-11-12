var context = document.getElementById('canvas').getContext("2d");

var clickX=new Array();
var clickY=new Array();
var clickDrag=new Array();
var paint;

function addClick(x,y,dragging){
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}
function redraw(){
  //clear the canvas
  context.clearRect(0,0,content.canvas.width,content.canvas.height);

  context.strokeStyle="#df78a1";
  context.lineJoin="round";
  context.strokeWidth=5;

  for(var i=0; i<clickX.length; i++){
    context.beginPath();

    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1],clickY[i-1]);
    }else{
      context.moveTo(clickX[i]-1,clickY[i]-1);
    }

    context.lineTo(clickX[i],clickY[i]);
    context.closePath();
    context.stroke();
  }
}
//Mouse down event
$('#canvas').mousedown(function(e){
  paint=true;
  addClick(e.pageX-this.offsetLeft,e.pageY-this.offsetTop);
  redraw();
});

//mouse move event
$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX-this.offsetLeft,e.pageY-this.offsetTop,true);
    redraw();
  }
});

//mouseup event
$('#canvas').mouseup(function(e){
  paint=false;
});

//mouse leave event
$('#canvas').mouseleave(function(e){
  paint=false;
});
