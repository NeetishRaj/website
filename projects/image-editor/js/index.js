$(function() {
    const BLUR_CONSTANT = 0.25;
    const HUE_CONSTANT = 3.6;
    const BRIGHTNESS_CONSTANT = 3;
    const CONTRAST_CONSTANT = 3;
    const SATURATE_CONSTANT = 3;

    const GRAYSCALE = "grayscale(0%) ";
    const BLUR = "blur(0px) ";
    const BRIGHTNESS = "brightness(100%) ";
    const CONTRAST = "contrast(100%) ";
    const INVERT = "invert(0%) ";
    const OPACITY = "opacity(100%) ";
    const SATURATE = "saturate(100%) ";
    const SEPIA = "sepia(0%) ";
    const HUE_ROTATE = "hue-rotate(0deg) ";

    const OUTER_WIDTH = window.outerWidth;
    const INNER_HEIGHT = window.innerHeight;
    const CONTAINER_BORDER_WIDTH = 5;
    const SIDE_PANEL_WIDTH = 50;
    const MAX_WINDOW_WIDTH = 600;
    const HEADER_FOOTER_HEIGHT = 30;
    const CONTROL_PANEL_HEIGHT = 100;
    const IMAGE_MINUS_WIDTH = (2 * CONTAINER_BORDER_WIDTH) + SIDE_PANEL_WIDTH;
    const IMAGE_WIDTH = MAX_WINDOW_WIDTH - IMAGE_MINUS_WIDTH;
    const IMAGE_HEIGHT = INNER_HEIGHT - (2 * HEADER_FOOTER_HEIGHT + CONTROL_PANEL_HEIGHT);

    $(".container").width(OUTER_WIDTH - 2 * CONTAINER_BORDER_WIDTH);
    $(".container").height(INNER_HEIGHT);
    // console.log(IMAGE_WIDTH);
    // console.log((OUTER_WIDTH < IMAGE_WIDTH) ? (OUTER_WIDTH - SIDE_PANEL_WIDTH) : IMAGE_WIDTH);

    $("#mainImageId").width((OUTER_WIDTH < IMAGE_WIDTH) ? OUTER_WIDTH - SIDE_PANEL_WIDTH - 2 * CONTAINER_BORDER_WIDTH: IMAGE_WIDTH + 2*CONTAINER_BORDER_WIDTH);
    $("#mainImageId").height(IMAGE_HEIGHT);
    $("#mainImageId img").width((OUTER_WIDTH < IMAGE_WIDTH) ? (OUTER_WIDTH - SIDE_PANEL_WIDTH - 2 * CONTAINER_BORDER_WIDTH) : IMAGE_WIDTH + 2*CONTAINER_BORDER_WIDTH);
    $("#mainImageId img").height(IMAGE_HEIGHT);

    // $("#mainImageId").width(IMAGE_WIDTH);
    // $("#mainImageId").height(IMAGE_HEIGHT);
    // $("#mainImageId img").width(IMAGE_WIDTH);
    // $("#mainImageId img").height(IMAGE_HEIGHT);

    var imageArray = [
        "https://i.imgur.com/wQ3uqBb.jpg",
        "https://i.imgur.com/iTqQSgO.jpg",
        "https://i.imgur.com/Vu0ZS6K.jpg",
        "https://i.imgur.com/bX7iKXj.jpg",
        "https://i.imgur.com/mW0hKXZ.jpg",
        "https://i.imgur.com/iR5AD4R.jpg",
        "https://i.imgur.com/fdgsTvT.jpg",
        "https://i.imgur.com/8Zcv3z1.jpg",
        "https://i.imgur.com/Lmmq9GA.jpg",
        "https://i.imgur.com/Ng7ON5g.jpg"
    ];

    var counter = 0;
    $("#nextImage").on("click", function() {
        if (counter >= imageArray.length) {
            counter = 0;
        } else {
            $("#mainImageId img").attr("src", imageArray[counter++]);
        }
        $("#filterTypeText").html(" ");
        for (var i = 0; i < imageArray.length; i++) {
          $("<img />", {src:imageArray[i]}).appendTo("#filterTypeText");
        }
    });

    $("#default").on("click", function() {
      cssFiltersObject.setDefaultFilterValues();
      transformFunctionsObject.setDefaultTransformValues();
    });

    $("#transform").on("click", function() {
        $(".transformFunctionsContainer").css({
            "z-index": "1",
            "opacity": "1"
        });
    });
    $("#scaleY").on("click",function(){
      transformFunctionsObject.scaleY();
    });
    $("#scaleX").on("click",function (){
      transformFunctionsObject.scaleX();
    });
    $("#translate").on("click",function(){
      transformFunctionsObject.translate();
    });
    $("#rotate_left").on("click",function(){
      transformFunctionsObject.rotate_left();
    });
    $("#rotate_right").on("click",function(){
      transformFunctionsObject.rotate_right();
    });
    $("#rotate_twice").on("click",function(){
      transformFunctionsObject.rotate_twice();
    });
    $("#skewX").on("click",function(){
      transformFunctionsObject.skewX();
    });
    $("#skewY").on("click",function(){
      transformFunctionsObject.skewY();
    });
    $("#skewXY").on("click",function(){
      transformFunctionsObject.skewXY();
    });

    var objectFitmode = "cover";
    $("#objectFit").click(function(){
      // console.log("hi");
      if (objectFitmode === "cover"){
        $("#filterTypeText").html("img { object-fit: contain ;}");
        $("#fit").text("fullscreen_exit");
        $("#mainImageId img").css({
          "objectFit" : "contain"
        });
        objectFitmode = "contain";
      }else if (objectFitmode === "contain") {
        $("#filterTypeText").html("img { object-fit: fill ;}/* this is default object-fit for images*/");
        $("#fit").text("fullscreen");
        $("#mainImageId img").css({
          "objectFit" : "fill"
        });
        objectFitmode = "fill";
      }else if (objectFitmode === "fill") {
        $("#filterTypeText").html("img { object-fit: scale-down ;}");
        $("#fit").text("select_all");
        $("#mainImageId img").css({
          "objectFit" : "scale-down"
        });
        objectFitmode = "scale-down";
      }else if (objectFitmode === "scale-down") {
        $("#filterTypeText").html("img { object-fit: cover;}/*My favourite*/");
        $("#fit").text("wallpaper");
        $("#mainImageId img").css({
          "objectFit" : "cover"
        });
        objectFitmode = "cover";
      }

    });

    $("#texture").on("click", function() {
      // console.log("HI");
      $("#texturePanelContainer").css({
        "z-index" : "1",
        "opacity" : "1"
      });
    });

    //TEXTURE CLASS
    function GradientTexture(bg, bgColor, bgImage, bgSize, bgPosition) {
      this.background = bg;
      this.backgroundColor = bgColor;
      this.backgroundImage = bgImage;
      this.backgroundSize = bgSize;
      this.backgroundPosition = bgPosition;

      this.applyChangesToTexture = function(){
        $("#mainImageId, .texturePanel:last-child").css({
          "background" : this.background,
          "background-color" : this.backgroundColor,
          "background-size" : this.backgroundSize,
          "background-position" : this.backgroundPosition,
          "background-image" : this.backgroundImage
        });
        $("#mainImageId img").css({"filter" : "filter(0.7)"});

        $("#filterTypeText").html(
          "img{filter: opacity(0.7); }<br>"+
          ".container{<br>"+
          "background: "+this.background+";<br>"+
          "background-color: "+this.backgroundColor+";<br>"+
          "background-size: "+this.backgroundSize+";<br>"+
          "background-position: "+this.backgroundPosition+";<br>"+
          "background-image: "+this.backgroundImage+"; };"
        );
      };
    };

    var texture1 = new GradientTexture(
      "radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0, radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 50px 50px, radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 50px 0, radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 50px, radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 50px 0, radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 100px 50px, radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0, radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 50px 50px,linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0, linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0",
      "#300",
      " ",
      "100px 100px",
      " "
    );
    $("#texture1").click(function(){
      texture1.applyChangesToTexture();
    });
    var texture2 = new GradientTexture(
      " ",
      "#C8D3A7",
      "radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%), radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%)",
      "110px 110px",
      "0 0, 55px 55px"
    );
    $("#texture2").click(function(){
      texture2.applyChangesToTexture();
    });

    var texture3 = new GradientTexture(
      " ",
      "#556",
      "linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a), linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a)",
      "80px 140px",
      "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px"
    );
    $("#texture3").click(function(){
      texture3.applyChangesToTexture();
    });

    var texture4 = new GradientTexture(
      "linear-gradient(315deg, transparent 75%, #d45d55 0)-10px 0, linear-gradient(45deg, transparent 75%, #d45d55 0)-10px 0, linear-gradient(135deg, #a7332b 50%, transparent 0) 0 0, linear-gradient(45deg, #6a201b 50%, #561a16 0) 0 0 #561a16",
      " ",
      " ",
      "20px 20px",
      " "
    );
    $("#texture4").click(function(){
      texture4.applyChangesToTexture();
    });

    var texture5 = new GradientTexture(
      "linear-gradient(45deg, #dca 12%, transparent 0, transparent 88%, #dca 0), linear-gradient(135deg, transparent 37%, #a85 0, #a85 63%, transparent 0), linear-gradient(45deg, transparent 37%, #dca 0, #dca 63%, transparent 0) #753",
      " ",
      " ",
      "25px 25px",
      " "
    );
    $("#texture5").click(function(){
      texture5.applyChangesToTexture();
    });

    $("#about").on("click", function() {
        $("#aboutPage").css({
            "z-index": "2",
            "opacity": "1"
        });
    });

    $(".closeButton").on("click", function() {
        $(".overlay").css({
            "z-index": "-1",
            "opacity": "0"
        });
    });

    function cssFilterStringValue(str, value) {
        if (str === "hue-rotate") {
            return str + "(" + parseInt(value * HUE_CONSTANT) + "deg) ";
        } else if (str === "blur") {
            return str + "(" + parseInt(value * BLUR_CONSTANT) + "px) ";
        } else if (str === "brightness" ) {
            return str + "(" + value * BRIGHTNESS_CONSTANT + "%) ";
        } else if ( str === "contrast" ) {
            return str + "(" + value * CONTRAST_CONSTANT + "%) ";
        } else if ( str === "saturate" ) {
            return str + "(" + value * SATURATE_CONSTANT + "%) ";
        } else {
            return str + "(" + value + "%) ";
        }
    }

    var cssFiltersObject = {
        grayscale: GRAYSCALE,
        blur: BLUR,
        brightness: BRIGHTNESS,
        contrast: CONTRAST,
        invert: INVERT,
        opacity: OPACITY,
        saturate: SATURATE,
        sepia: SEPIA,
        hueRotate: HUE_ROTATE,

        changeGrayscale: function(value) {
            this.grayscale = cssFilterStringValue("grayscale", value);
            this.applyChangesToImage();
        },

        changeBlur: function(value) {
            this.blur = cssFilterStringValue("blur", value);
            this.applyChangesToImage();
        },

        changeBrightness: function(value) {
            this.brightness = cssFilterStringValue("brightness", value);
            this.applyChangesToImage();
        },

        changeContrast: function(value) {
            this.contrast = cssFilterStringValue("contrast", value);
            this.applyChangesToImage();
        },

        changeInvert: function(value) {
            this.invert = cssFilterStringValue("invert", value);
            this.applyChangesToImage();
        },

        changeOpacity: function(value) {
            this.opacity = cssFilterStringValue("opacity", value);
            this.applyChangesToImage();
        },

        changeSaturate: function(value) {
            this.saturate = cssFilterStringValue("saturate", value);
            this.applyChangesToImage();
        },

        changeSepia: function(value) {
            this.sepia = cssFilterStringValue("sepia", value);
            this.applyChangesToImage();
        },

        changeHueRotate: function(value) {
            this.hueRotate = cssFilterStringValue("hue-rotate", value);
            this.applyChangesToImage();
        },

        setDefaultFilterValues: function() {
            this.grayscale = GRAYSCALE;
            this.blur = BLUR;
            this.brightness = BRIGHTNESS;
            this.contrast = CONTRAST;
            this.invert = INVERT;
            this.opacity = OPACITY;
            this.saturate = SATURATE;
            this.sepia = SEPIA;
            this.hueRotate = HUE_ROTATE;
            this.applyChangesToImage();
        },

        applyChangesToImage: function() {
            var fullFilterString = this.grayscale +
                this.blur +
                this.brightness +
                this.contrast +
                this.invert +
                this.opacity +
                this.saturate +
                this.sepia +
                this.hueRotate;
            $("#filterTypeText").html("img { filter: " + fullFilterString + ";}");
            $("#mainImageId img").css({
              "filter": fullFilterString
            });
        }

    };

    var transformFunctionsObject = {
        scaleX : function(){
          $("#mainImageId img").css({"transform" : "scaleX(-1)"});
          $("#filterTypeText").html("img { transform: scaleX(-1);}");
        },
        scaleY : function(){
          $("#mainImageId img").css({"transform" : "scaleY(-1)"});
          $("#filterTypeText").html("img { transform: scaleY(-1);}");
        },
        translate : function(){
          $("#mainImageId img").css({"transform" : "scale(2)"});
          $("#mainImageId").css({"overflow" : "scroll"});
          $("#filterTypeText").html("img { transform: scale(2);}<br> .container img{ overflow: scroll; }");
        },
        rotate_left : function(){
          $("#mainImageId img").css({"transform" : "rotate(-90deg)"});
          $("#filterTypeText").html("img { transform: rotate(-90deg);}");
        },
        rotate_right : function(){
          $("#mainImageId img").css({"transform" : "rotate(90deg)"});
          $("#filterTypeText").html("img { transform: rotate(90deg);}");
        },
        rotate_twice : function(){
          $("#mainImageId img").css({"transform" : "rotate(180deg)"});
          $("#filterTypeText").html("img { transform: rotate(180deg);}");
        },
        skewX : function(){
          $("#mainImageId img").css({"transform" : "skewX(30deg)"});
          $("#filterTypeText").html("img { transform: skewX(30deg);}");
        },
        skewY : function(){
          $("#mainImageId img").css({"transform" : "skewY(30deg)"});
          $("#filterTypeText").html("img { transform: skewY(30deg);}");
        },
        skewXY : function(){
          $("#mainImageId img").css({"transform" : "skewX(30deg) skewY(30deg)"});
          $("#filterTypeText").html("img { transform: skewX(30deg) skewY(30deg);}");
        },
        setDefaultTransformValues : function(){
          $("#mainImageId img").css({"transform" : "none"});
          $("#filterTypeText").append("img { transform: none;}");

        }

    };

    var mode = "";
    $(".controlPanelButton").on("click", function() {
        mode = $(this).text();
        $("#filterText").text(mode);
    });

    $("#slider").on("input", function() {
        var sliderValue = $("#slider").val();
        if (mode === "Grayscale") {
            cssFiltersObject.changeGrayscale(sliderValue);
        } else if (mode === "Blur") {
            cssFiltersObject.changeBlur(sliderValue);
        } else if (mode === "Brightness") {
            cssFiltersObject.changeBrightness(sliderValue);
        } else if (mode === "Contrast") {
            cssFiltersObject.changeContrast(sliderValue);
        } else if (mode === "Invert") {
            cssFiltersObject.changeInvert(sliderValue);
        } else if (mode === "Opacity") {
            cssFiltersObject.changeOpacity(sliderValue);
        } else if (mode === "Saturation") {
            cssFiltersObject.changeSaturate(sliderValue);
        } else if (mode === "Sepia") {
            cssFiltersObject.changeSepia(sliderValue);
        } else if (mode === "RGB") {
            cssFiltersObject.changeHueRotate(sliderValue);
        }
    });
});
