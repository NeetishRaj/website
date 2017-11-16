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
      "https://i.imgur.com/Vf079dH.jpg",
      "https://i.imgur.com/FBkSLJQ.png"
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
    var a=document.querySelectorAll('.main');
    if(nightMode.innerHTML==="Night Mode"){
      for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor="#253b40";
        a[i].style.color="#ffea0d";
      }
      document.querySelector('.main').style.background="#031727";
      document.querySelector('.content_resize').style.backgroundColor="#253b40";
      document.querySelector('.fbg').style.background="#0a1827";
      document.querySelector('.menu_nav').style.background="#253b40";
      nightmode.style.background="linear-gradient(#031727,#211210)";
      nightmode.style.border="3px inset #122a22";
      nightmode.style.color="#fbba42";
      nightMode.innerHTML="Day Mode";
    }else{
      for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor="inherit";
        a[i].style.color="inherit";
      }
      document.querySelector('.main').style.background="#eaeaea url(./best6gallery/main_bg.gif) top repeat-x";
      document.querySelector('.content_resize').style.backgroundColor="#f6f4f4";
      document.querySelector('.fbg').style.background="#5194bf url(./best6gallery/fbg_bg.gif) top repeat-x";
      document.querySelector('.menu_nav').style.background="url(./best6gallery/menu_resize_bg.gif) top no-repeat";
      nightmode.style.background="linear-gradient(#c7c7c7,#fff)";
      nightmode.style.border="3px outset #ccc";
      nightmode.style.color="#4a4a4a";
      nightMode.innerHTML="Night Mode";
    }
  }
};


//text dazzle effect
$(document).ready(function() {
$(".focus").lettering();
resetAnimation();
});
function resetAnimation() {
  var myFocusText = $(".focus").text();
  for (var i = 1; i <= myFocusText.length; i++) {
      var randomNum = Math.random() * (2 - 0.5) + 0.5;
      $(".char" + i).css({
          animation: "textDazzle " + randomNum + "s ease-out infinite forwards alternate"
      });
  }
}
/*global jQuery */
/*!
* Lettering.JS 0.7.0
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
function injector(t, splitter, klass, after) {
  var text = t.text()
  , a = text.split(splitter)
  , inject = '';
  if (a.length) {
    $(a).each(function(i, item) {
      inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
    });
    t.attr('aria-label',text)
    .empty()
    .append(inject)

  }
}


var methods = {
  init : function() {

    return this.each(function() {
      injector($(this), '', 'char', '');
    });

  },

  words : function() {

    return this.each(function() {
      injector($(this), ' ', 'word', ' ');
    });

  },

  lines : function() {

    return this.each(function() {
      var r = "eefec303079ad17405c889e092e105b0";
      // Because it's hard to split a <br/> tag consistently across browsers,
      // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
      // (of the word "split").  If you're trying to use this plugin on that
      // md5 hash string, it will fail because you're being ridiculous.
      injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
    });

  }
};

$.fn.lettering = function( method ) {
  // Method calling logic
  if ( method && methods[method] ) {
    return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
  } else if ( method === 'letters' || ! method ) {
    return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
  }
  $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
  return this;
};

})(jQuery);
