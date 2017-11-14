window.onload=function(){
  //general purpose click counter
  var count=(function(){
    var counter=0;
    return function(){return counter+=1;};
  })();

  //Image toggle function
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

  //Night mode function for blog
  var nightMode=document.getElementById('nightmode');
  nightMode.onclick=function(){
    var a=document.querySelectorAll('.main .article, .main .sidebar');
    if(nightMode.innerHTML==="Night Mode"){
      for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor="#253b40";
        a[i].style.color="#ffea0d";
      }
      document.querySelector('.main').style.backgroundColor="#031727";
      document.querySelector('.content_resize').style.backgroundColor="#253b40";
      document.querySelector('.header').style.backgroundColor="#0a1827";
      document.querySelector('.fbg_resize').style.backgroundColor="#0a1827";
      nightmode.style.background="linear-gradient(#031727,#211210)";
      nightmode.style.border="3px inset #122a22";
      nightmode.style.color="#fbba42";
      nightMode.innerHTML="Day Mode";
    }else{
      for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor="inherit";
        a[i].style.color="inherit";
      }
      document.querySelector('.main').style.backgroundColor="inherit";
      document.querySelector('.content_resize').style.backgroundColor="inherit";
      document.querySelector('.header').style.backgroundColor="inherit";
      document.querySelector('.fbg_resize').style.backgroundColor="inherit";
      nightmode.style.background="linear-gradient(#c7c7c7,#fff)";
      nightmode.style.border="3px outset #ccc";
      nightmode.style.color="#4a4a4a";
      nightMode.innerHTML="Night Mode";
    }
  }
};
