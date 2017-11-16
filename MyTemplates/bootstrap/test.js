//document.write("you are fucked");
window.onload=function(){
  var toggle=0;
  var a=document.querySelector('.jumbotron');
  var rotateY=0;
  a.onmousemove=function(){
    toggle=1;
    var id=setInterval(frame,50);
    var dx=1;
    function frame(){
      if(!toggle){
        clearInterval(id);
      }else{
        if(rotateY===360){
          toggle=0;
          rotateY=0;
        }
        rotateY+=dx;
        a.style.transform="rotateY("+rotateY+"deg)";
      }
    }
  }
  


  // var a=document.lastModified;
  // console.log(a);
  // var b=document.getElementById('modifiedDate');
  // b.innerHTML="Last Modified on : "+a;
  // var c=document.cokie;
  // console.log(c);
  // var d=document.URL;
  // console.log(d);
  // var e=document.baseURI;
  // console.log(e);
  // var f=document.documentMode;
  // console.log(f);
  // var g=document.documentURI;
  // console.log(g);
  // var h=document.implementation;
  // console.log(h);
  // var i=document.readyState;
  // console.log(i);
  // var j=document.strictErrorChecking;
  // console.log(j);
  // var k=document.scripts;
  // console.log(k);
  // var l=document.head;
  // console.log(l);


};
