window.onload=function(){
  var count=(function(){
    var counter=0;
    return function(){return counter+=1;};
  })();
  document.getElementById('gallerybutton').onclick=function(){
    var imgArr=[
      "https://i.imgur.com/raBDN34.jpg",
      "https://i.imgur.com/CeTYZUT.jpg",
      "https://i.imgur.com/98k8W3h.jpg",
      "https://i.imgur.com/8RUrUkf.jpg",
      "https://i.imgur.com/EBpygpr.jpg",
      "https://i.imgur.com/JfWtRtt.jpg",
      "https://i.imgur.com/YFaALSt.png",
      "https://i.imgur.com/GtRVZHC.jpg",
      "https://i.imgur.com/k8Ohqll.png",
      "https://i.imgur.com/Zx8OPvB.png",
      "https://i.imgur.com/38QsBeI.jpg",
      "https://i.imgur.com/0R0cMTp.jpg",
      "https://i.imgur.com/Vf079dH.jpg"
    ];
    var c=count();
    var arrLen=imgArr.length;
    var anchors=document.querySelectorAll('.col.c1 a');
    var images=document.querySelectorAll('.col.c1 img');
    var image=Array.from.images;
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].href=imgArr[(6*c+i)%imgArr.length];
      images[i].src=imgArr[(6*c+i)%imgArr.length];
    }
    console.log(c);
  };
  console.log("button");
};
