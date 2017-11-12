var canvas=document.getElementById('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');
// //line
// c.beginPath()
// c.moveTo(1000,10);
// for(var i=0;i<200;i++){
//   c.lineTo(1000-2*i,10+3*i);
//   c.lineTo(1000-5*i,10+2*i);
// }
// c.strokeStyle="#ad8ada"
// c.stroke();
// c.closePath();
//
// //rectangle
// c.fillStyle="#67a588";
// for(var i=0;i<20;i++){
//   c.fillRect(100+100*i,100+11*i,1400,10);
//   c.fillRect(100+11*i,100+50*i,10,1400);
// }
//
// //arc/circles
//
// for(var i=0;i<10;i++){
//     c.beginPath();
//   var x=Math.random()*window.innerWidth;
//   var y=Math.random()*window.innerHeight;
//   var colg=Math.floor(Math.random()*255);
//   var colr=Math.floor(Math.random()*255);
//   var colb=Math.floor(Math.random()*255);
//   var colorstr="rgb("+colr+","+colg+","+colb+")";
//   c.arc(x+2*i,y+2*i,50+5*i,0,Math.PI*2,false);
//   c.strokeStyle=colorstr;
//   c.lineWidth=10;
//   c.stroke();
// }
//
// c.closePath();


function Ball(x,y,r,dx,dy,colorstr){
  this.x=x;
  this.y=y;
  this.r=r;
  this.dx=dx;
  this.dy=dy;
  this.colorstr=colorstr;

  this.draw=function(){
    c.beginPath();
    c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
    c.strokeStyle=this.colorstr;
    c.lineWidth=10;
    c.stroke();
  }

  this.update=function(){
    if((this.x+this.r > innerWidth)||(this.x-this.r < 0)){
      this.dx=-this.dx;
    }
    if((this.y+this.r > innerHeight)||(this.y-this.r < 0)){
      this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
  }
}

//var c1=new Ball(200,200,50,8,8);

var ballArray=[];
for(var i=0;i<100;i++){
  var r=Math.random()*100;
  var x=Math.random()*window.innerWidth;
  var y=Math.random()*window.innerHeight;
  var dx=(Math.random()-0.5)*8;
  var dy=(Math.random()-0.5)*8;
  var colg=Math.floor(Math.random()*255);
  var colr=Math.floor(Math.random()*255);
  var colb=Math.floor(Math.random()*255);
  var colorstr="rgb("+colr+","+colg+","+colb+")";
  ballArray.push(new Ball(x,y,r,dx,dy,colorstr));

}


function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);

  for (var i = 0; i < ballArray.length; i++) {
    ballArray[i].update()
  }
}
animate();
