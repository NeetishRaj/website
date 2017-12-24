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

    const OUTER_WIDTH = window.innerWidth;
    const INNER_HEIGHT = window.innerHeight;
    const CONTAINER_BORDER_WIDTH = 5;
    const SIDE_PANEL_WIDTH = 50;
    const MAX_WINDOW_WIDTH = 600;
    const HEADER_FOOTER_HEIGHT = 30;
    const CONTROL_PANEL_HEIGHT = 100;
    const IMAGE_WIDTH = MAX_WINDOW_WIDTH - (2 * CONTAINER_BORDER_WIDTH + SIDE_PANEL_WIDTH);
    const IMAGE_HEIGHT = INNER_HEIGHT - (2 * HEADER_FOOTER_HEIGHT + CONTROL_PANEL_HEIGHT);

    $(".container").width(OUTER_WIDTH);
    $(".container").height(INNER_HEIGHT);
    // console.log(OUTER_WIDTH);
    // console.log(INNER_HEIGHT);

    $("#mainImage").width((OUTER_WIDTH < IMAGE_WIDTH) ? OUTER_WIDTH - SIDE_PANEL_WIDTH : IMAGE_WIDTH);
    $("#mainImage").height(IMAGE_HEIGHT);
    $("#mainImage img").width((OUTER_WIDTH < IMAGE_WIDTH) ? OUTER_WIDTH - SIDE_PANEL_WIDTH : IMAGE_WIDTH);
    $("#mainImage img").height(IMAGE_HEIGHT);

    var imageArray = [
        "https://i.imgur.com/wQ3uqBb.jpg",
        "https://i.imgur.com/iTqQSgO.jpg",
        "https://i.imgur.com/Vu0ZS6K.jpg",
        "https://i.imgur.com/bX7iKXj.jpg",
        "https://i.imgur.com/mW0hKXZ.jpg",
        "https://i.imgur.com/iR5AD4R.jpg",
        "https://i.imgur.com/fdgsTvT.jpg",
        "https://i.imgur.com/8Zcv3z1.jpg",
        "https://i.imgur.com/Ng7ON5g.jpg",
        "https://i.imgur.com/Lmmq9GA.jpg"
    ];

    var counter = 0;
    $("#nextImage").on("click", function() {
        if (counter >= imageArray.length) {
            counter = 0;
        } else {
            $("#mainImage img").attr("src", imageArray[counter++]);
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
      transformFunctionsObject.rotate_right();
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
            $("#mainImage img").css({
              "filter": fullFilterString
            });
        }

    };

    var transformFunctionsObject = {
        scaleX : function(){
          $("#mainImage img").css({"transform" : "scaleX(-1)"});
          $("#filterTypeText").html("img { transform: scaleX(-1);}");
        },
        scaleY : function(){
          $("#mainImage img").css({"transform" : "scaleY(-1)"});
          $("#filterTypeText").html("img { transform: scaleY(-1);}");
        },
        translate : function(){
          $("#mainImage img").css({"transform" : "scaleX(-1) scaleY(-1)"});
          $("#filterTypeText").html("img { transform: scaleX(-1) scaleY(-1);}");
        },
        rotate_left : function(){
          $("#mainImage img").css({"transform" : "rotate(-90deg)"});
          $("#filterTypeText").html("img { transform: rotate(-90deg);}");
        },
        rotate_right : function(){
          $("#mainImage img").css({"transform" : "rotate(90deg)"});
          $("#filterTypeText").html("img { transform: rotate(90deg);}");
        },
        rotate_twice : function(){
          $("#mainImage img").css({"transform" : "rotate(180deg)"});
          $("#filterTypeText").html("img { transform: rotate(180deg);}");
        },
        skewX : function(){
          $("#mainImage img").css({"transform" : "skewX(30deg)"});
          $("#filterTypeText").html("img { transform: skewX(30deg);}");
        },
        skewY : function(){
          $("#mainImage img").css({"transform" : "skewY(30deg)"});
          $("#filterTypeText").html("img { transform: skewY(30deg);}");
        },
        skewXY : function(){
          $("#mainImage img").css({"transform" : "skewX(30deg) skewY(30deg)"});
          $("#filterTypeText").html("img { transform: skewX(30deg) skewY(30deg);}");
        },
        setDefaultTransformValues : function(){
          $("#mainImage img").css({"transform" : "none"});
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
