$(function(){
  const LOADER_TIME = 5000;
  const PARA_TIME = 4000;
  const THEME_TIME = 4000;
  const SHOW_HIDE_GAP  = 4000;
  const FADE_ALLOWANCE = 300;

  imageArray = [
    "https://i.imgur.com/20AzGUM.jpg",
    "https://i.imgur.com/LqGWygY.jpg",
    "https://i.imgur.com/NtID6gM.png",
    "https://i.imgur.com/D4pcvzm.png",
    "https://i.imgur.com/gcQn5bn.png",
    "https://i.imgur.com/XfVH7XM.jpg"
  ];
  //
  $(".container, .imageContainer, #bgImage").width(window.innerWidth);
  $(".container, .imageContainer, #bgImage").height(window.innerHeight);
  $("#bgImage").height("auto");
  setTimeout(function(){
    $(".entry").fadeOut(300);
    var themeDelay = 0;

    for (var i = 0; i < $(".story").length; i++) {

      showTheme(i ,themeDelay);
      for (var j = 0; j < $(".story:eq("+i+") p").length; j++) {
        showPara(i, j, themeDelay);
        removePara(i, j, themeDelay + SHOW_HIDE_GAP);
        themeDelay += PARA_TIME;
        // console.log(themeDelay);
      }
      themeDelay += THEME_TIME;
      removeTheme(i, themeDelay + SHOW_HIDE_GAP);
    }
    function showPara(i, j, timeDelay){
      setTimeout(function(){
        // console.log("show para "+j);
        $(".story:eq("+ i +") p:eq("+ j +")").css({"display" : "block"});
        // $(".story:eq("+ i +") p:eq("+ j +")").fadeIn();

      },timeDelay);
    }
    function removePara(i, j, timeDelay){
      setTimeout(function(){
        // console.log("romoved para "+j);
        $(".story:eq("+ i +") p:eq("+ j +")").css({"display" : "none"});
        // $(".story:eq("+ i +") p:eq("+ j +")").fadeOut()

      },timeDelay);
    }
    function showTheme(i, timeDelay){
      setTimeout(function(){
        // console.log("show theme "+i);
        $("#bgImage").attr("src",imageArray[i+1]);
        $(".story:eq("+ i +")").css({"display" : "block" });
      },timeDelay);
    }
    function removeTheme(i, timeDelay){
      setTimeout(function(){
        // console.log("remove theme "+i);
        $(".story:eq("+ i +")").css({"display" : "none" });
      },timeDelay);
    }


  },LOADER_TIME);
});
