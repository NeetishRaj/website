window.onload=function(){
  var canvas=document.getElementById('canvas');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  var c=canvas.getContext('2d');

  //adding event listener for mousemove event
  var mouse={
    x:undefined,
    y:undefined
  }
  window.addEventListener('mousedown',
    function(event){
      mouse.x=event.x;
      mouse.y=event.y;
    });

  function MyLine(x1,y1,x2,y2,width){
    this.sign=1;
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
    this.width=width;

    this.draw=function(){
      c.beginPath();
      //c.moveTo(mouse.x,mouse.y);
      c.moveTo(this.x1,this.y1)
      c.lineTo(this.x2,this.y2-50);
      c.lineTo(this.x1,this.y2+50);
      c.lineTo(this.x1,this.y2)
      c.strokeStyle="rgb(200,250,230)";
      c.lineWidth=this.width;
      c.stroke();
    }

    this.update=function(){

      if(this.y1 > innerHeight || this.y1 < 0){
        this.y1=0;
        this.y2=0;
      }
      if(this.x1>innerWidth){
        this.sign=-1;
      }else if(this.x1<0){
        this.sign=1;;
      }
      if(this.x1-mouse.x<50 && this.y1-mouse.y<20  || this.x1-mouse.x >-50 && this.y1-mouse.y<20 ){
        this.x1=mouse.x;
      }
      this.y1+=1;
      this.y2+=1;
      this.x1+=this.sign*10;

      this.draw();
    }
  }
  var lines=[];
  for (var i = 0; i < 10; i++) {
    var x1=Math.floor(Math.random()*(innerWidth/2));
    var x2=Math.floor(Math.random()*(innerWidth/2))+(innerWidth/2);
    var y=Math.floor(Math.random()*innerHeight);
    lines.push(new MyLine(x1,y,innerWidth/2,y,1));
  }


  function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (var i = 0; i < lines.length; i++) {
      lines[i].update();
    }
  }
  animate();
}
