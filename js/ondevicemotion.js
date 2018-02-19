<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="author" content="Morpheus">
    <meta name="description" content="paint app">
    <title>Device Orientation</title>
    <style media="screen">
    /* Created by Morpheus */

    body {
        display:block;
        position:fixed ;
        width:100vw;
        height:100vh;
        margin:0;
        padding:0;
    }
    canvas{
        /*width:100vw;
        height:100vh;*/
        background: linen;
    }
    </style>
  </head>
  <body>
    <canvas id="canvas"></canvas>
    <script>
    // Created by Morpheus

    window.onload = function (){

        var c = document.querySelector("#canvas");
        var cx = c.getContext("2d");

        var w = window.innerWidth;
        var h = window.innerHeight;
        c.width = w;
        c.height = h;
        var alpha, beta, gamma;

        cx.fillStyle = "red";
        cx.fillRect(50,50,100,100);

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

    </script>
  </body>
</html>
