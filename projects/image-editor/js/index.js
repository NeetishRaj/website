$(function() {
    const BLUR_CONSTANT = 0.25;
    const HUE_CONSTANT = 3.6;
    const OUTER_WIDTH = window.outerWidth;
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
    console.log(OUTER_WIDTH);
    console.log(INNER_HEIGHT);
    // $("#mainImage img").width((OUTER_WIDTH-60)>(MAX_WINDOW_WIDTH-60)?(MAX_WINDOW_WIDTH-60):OUTER_WIDTH-6);
    $("#mainImage").width((OUTER_WIDTH < IMAGE_WIDTH) ? OUTER_WIDTH - SIDE_PANEL_WIDTH : IMAGE_WIDTH);
    $("#mainImage").height(IMAGE_HEIGHT);
    $("#mainImage img").width((OUTER_WIDTH < IMAGE_WIDTH) ? OUTER_WIDTH - SIDE_PANEL_WIDTH : IMAGE_WIDTH);
    $("#mainImage img").height(IMAGE_HEIGHT);
    // $("#mainImage").css({width:OUTER_WIDTH+"px"});

    function cssFilterStringValue(str, value) {
        if (str === "hue-rotate") {
            return str + "(" + parseInt(value * HUE_CONSTANT) + "deg)";
        } else if (str === "blur") {
            return str + "(" + parseInt(value * BLUR_CONSTANT) + "px)";
        } else if (str === "grayscale") {
            return str + "(" + value + "%)";
        } else {
            return str + "(" + value + "%)";
        }
    }

    var grayscale = "grayscale(0%) ";
    var blur = "blur(0px) ";
    var brightness = "brightness(100%) ";
    var contrast = "contrast(100%) ";
    var invert = "invert(0%) ";
    var opacity = "opacity(100%) ";
    var saturate = "saturate(0%) ";
    var sepia = "sepia(0%) ";
    var hueRotate = "hue-rotate(0deg)";

    function cssFilterStringList(str, value) {

        switch (str) {
            case "grayscale":
                grayscale = cssFilterStringValue(str, value);
                console.log("itsswitch gray");
                break;
            case "blur":
                blur = cssFilterStringValue(str, value);
                console.log("itsswitch blur");
                break;
            case "brightness":
                brightness = cssFilterStringValue(str, value);
                break;
            case "contrast":
                contrast = cssFilterStringValue(str, value);
                break;
            case "invert":
                invert = cssFilterStringValue(str, value);
                break;
            case "opacity":
                opacity = cssFilterStringValue(str, value);
                break;
            case "saturate":
                saturate = cssFilterStringValue(str, value);
                break;
            case "sepia":
                sepia = cssFilterStringValue(str, value);
                break;
            case "hue-rotate":
                hueRotate = cssFilterStringValue(str, value);
                break;
            default:
                break;
        }

        return grayscale + blur + brightness + contrast + invert + opacity + saturate + sepia + hueRotate;
    }

    // console.log(cssFilterStringValue(grayscale,59));


    $(".controlPanelButton").on("click", function() {
        $("#filterText").text($(this).text());
        var controlPanelButton = this;

        if ($(this).text() === "Grayscale") {
            $("#slider").on("input", function() {
                $("#mainImage img").css({
                    "filter": cssFilterStringList("grayscale", $("#slider").val())
                });
            });
        } else if ($(this).text() === "Invert") {
            $("#slider").on("input", function() {
                $("#mainImage img").css({
                    "filter": cssFilterStringList("invert", $("#slider").val())
                });
            });
        } else if ($(this).text() === "Brightness") {
            $("#slider").on("input", function() {
                $("#mainImage img").css({
                    "filter": cssFilterStringList("brightness", $("#slider").val())
                });
            });
        } else if ($(this).text() === "Opacity") {
            $("#slider").on("input", function() {
                $("#mainImage img").css({
                    "filter": cssFilterStringList("opacity", $("#slider").val())
                });
            });
        } else if ($(this).text() === "Saturation") {
            $("#slider").on("input", function() {
                $("#mainImage img").css({
                    "filter": cssFilterStringList("saturate", $("#slider").val())
                });
            });
        } else if ($(this).text() === "Sepia") {
            $("#slider").on("input", function() {
                $("#mainImage img").css({
                    "filter": cssFilterStringList("sepia", $("#slider").val())
                });
            });
        } else if ($(this).text() === "RGB Tone") {
            $("#slider").on("input", function() {
                $("#mainImage img").css({
                    "filter": cssFilterStringList("hue-rotate", $("#slider").val())
                });
            });
        } else if ($(this).text() === "Contrast") {
            $("#slider").on("input", function() {
                $("#mainImage img").css({
                    "filter": cssFilterStringList("contrast", $("#slider").val())
                });
            });
        } else if ($(this).text() === "Blur") {
            $("#slider").on("input", function() {
                $("#mainImage img").css({
                    "filter": cssFilterStringList("blur", $("#slider").val())
                });
            });
        }
    });


});
