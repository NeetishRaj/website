/*var person=function(n,l,a){
	this.name=n;
	this.lname=l;
	this.age=a;
	this.fname=function(){
		return this.name+this.lname;
	};
}
 var human={
	 weight:23,
	 height:2,
	 func:function(){
		 return this;
	 }
 }
 console.log(human.func());
var meta={
	weight:100,
	height:10
}
console.log(human.func.call(meta));
var colg=Math.floor(Math.random()*255);
var colr=Math.floor(Math.random()*255);
var colb=Math.floor(Math.random()*255);
var colorstr="rgb("+colr+","+colg+","+colb+")";
console.log(colorstr);*/
function myValue(n){
  var local=n;
  return function(){ return local;};
}
var v1=myValue(1);
var v2=myValue(2);
console.log(v1,typeof v1);
console.log(v1(10));
get
