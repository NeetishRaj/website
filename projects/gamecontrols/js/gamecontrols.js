window.onload = function(){

  var canvas = document.createElement('CANVAS');
  document.body.appendChild(canvas);

  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  var cx = canvas.getContext('2d');

  var mode;

};

function motionControls(cx){
  this.ondevicemotion = function(e){
    alpha = Math.floor(e.accelerationIncludingGravity.x  * (h - 50));
    beta = Math.floor(e.accelerationIncludingGravity.y  * (w - 50));
    box.update(alpha, beta, 50);
  }

  var box = {
    x: 0,
    y: 0,
    z: 0,

    update: function(x, y, z){
      this.x = x;
      this.y = y;
      this.z = z;
    },

    draw: function(){
      cx.fillRect(this.x, this.y, this.z, this.z);
    }
  };

  var animation = setInterval(function(){
    cx.clearRect(0,0,w,h);
    box.draw();
  }, 17);
}
