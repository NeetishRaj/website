//code by Morpheus
window.onload = function() {
    var imgArr = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdu_u8htAKXE3QejTdvF3rUTmjISvTYW1R9FzlvsG9D3aJrB4",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9W13WPjNLAE97rYGMN2FjqLalSRaxQUvtsnd_OyakzFxgjqC",
        "http://www.color-theory-phenomena.nl/06-color-mixing/06-00-01-color-mixing-RGB.gif",
        "http://www.workwithcolor.com/cona-hue-ranges-map-02.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Color_star-en_%28tertiary_names%29.svg",
        "http://industrystandarddesign.com/wp-content/uploads/2015/08/how-to-get-brown-color.jpg",
        "https://upload.wikimedia.org/math/8/5/0/850db6c317cef61ef3544c2b4e9d2cae.png",
        "http://www.cis.upenn.edu/~cis110/12fa/hw/hw01/rgb2cmyk.png",
        "https://i.stack.imgur.com/FTH7K.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/HSV-RGB-comparison.svg/300px-HSV-RGB-comparison.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hsl-and-hsv.svg/300px-Hsl-and-hsv.svg.png"
    ];
    //HSL to RGB function by Luke McClean (Stackoverflow)
    function hslToRgb(h, s, l) {
        var r, g, b;

        if (s == 0) {
            r = g = b = l; // achromatic
        } else {
            var hue2rgb = function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    var next = document.getElementById("next");
    var images = document.querySelector("#img img");
    var imgPtr = 0;
    next.onclick = function() {
        if (imgPtr < imgArr.length) {
            images.src = imgArr[imgPtr++];
        } else {
            imgPtr = 0;
            images.src = imgArr[imgPtr++];
        }
    };
    var b = document.body;
    var mode = "RGB";
    var ipr = document.getElementById("ipr");
    var ipg = document.getElementById("ipg");
    var ipb = document.getElementById("ipb");
    var submit = document.getElementById("submit");

    var slider1 = document.getElementById("slider1");
    var slider2 = document.getElementById("slider2");
    var slider3 = document.getElementById("slider3");
    // console.log(typeof slider1.min);
    slider1.oninput = function() {
        if (mode === "RGB") {
            slider1.min = "0";
            slider1.max = "255";
            ipr.value = slider1.value;
        } else if (mode === "HSL") {
            slider1.min = "0";
            slider1.max = "360";
            ipr.value = slider1.value;
        }
    };
    slider2.oninput = function() {
        if (mode === "RGB") {
            slider2.min = "0";
            slider2.max = "255";
            ipg.value = slider2.value;
        } else if (mode === "HSL") {
            slider2.min = "0";
            slider2.max = "100";
            ipg.value = slider2.value;
        }
    };
    slider3.oninput = function() {
        if (mode === "RGB") {
            slider3.min = "0";
            slider3.max = "255";
            ipb.value = slider3.value;
        } else if (mode === "HSL") {
            slider3.min = "0";
            slider3.max = "100";
            ipb.value = slider3.value;
        }
    };
    // if(slider1.oninput){
    //   console.log("RealTimeChange");
    // }

    submit.onclick = function() {
        if (mode === "RGB") {
            if (ipr.value > 255 || ipr.value < 0) {
                alert("Red value should be between 0 to 255");
            } else if (ipg.value > 255 || ipg.value < 0) {
                alert("GREEN value must be between 0 to 255");
            } else if (ipb.value > 255 || ipb.value < 0) {
                alert("BLUE value must be between 0 and 255");

            } else {
                var clr = "";
                clr = "rgb(" + ipr.value + "," + ipg.value + "," + ipb.value + ")";
                b.style.background = clr;

                var hex = document.getElementById("hex");
                var hr = parseInt(ipr.value).toString(16);
                var hg = parseInt(ipg.value).toString(16);
                var hb = parseInt(ipb.value).toString(16);
                // console.log(hr+hg+hb);
                if (ipr.value <= 15 && ipg.value <= 15 && ipb.value <= 15) {
                    hr = "0" + hr;
                    hg = "0" + hg;
                    hb = "0" + hb;
                } else if (ipr.value <= 15 && ipg.value <= 15) {
                    hr = "0" + hr;
                    hg = "0" + hg;
                } else if (ipr.value <= 15 && ipb.value <= 15) {
                    hr = "0" + hr;
                    hb = "0" + hb;
                } else if (ipg.value <= 15 && ipb.value <= 15) {
                    hb = "0" + hb;
                    hg = "0" + hg;
                } else if (ipr.value <= 15) {
                    hr = "0" + hr;
                } else if (ipg.value <= 15) {
                    hg = "0" + hg;
                } else if (ipb.value <= 15) {
                    hb = "0" + hb;
                }
                hex.textContent = " # " + hr + " " + hg + " " + hb + " ";
                var post = document.querySelector(".post");
                setTimeout(function() {
                    post.style.animation = "posts 3s 0.6s 2 alternate forwards";
                }, 300);
                post.style.animation = "none";
            }
        } else if (mode === "HSL") {
            if (ipr.value > 360 || ipr.value < 0) {
                alert("HUE value should be between 0 to 360");
            } else if (parseInt(ipg.value) > 100 || parseInt(ipg.value) < 0) {
                alert("SATURATION value must be between 0% to 100%");
            } else if (parseInt(ipb.value) > 100 || parseInt(ipb.value) < 0) {
                alert("LIGHTNESS value must be between 0% to 100%");

            } else {
                var clr = "";
                clr = "hsl(" + ipr.value + "," + ipg.value + "%," + ipb.value + "%)";
                b.style.background = clr;

                var rgbArr = hslToRgb(ipr.value / 360, ipg.value / 100, ipb.value / 100);
                //console.log(rgbArr[0]+"\t"+rgbArr[1]+"\t"+rgbArr[2]);
                var hex = document.getElementById("hex");
                var hr = parseInt(rgbArr[0]).toString(16);
                var hg = parseInt(rgbArr[1]).toString(16);
                var hb = parseInt(rgbArr[2]).toString(16);

                if (rgbArr[0] <= 15 && rgbArr[1] <= 15 && rgbArr[2] <= 15) {
                    hr = "0" + hr;
                    hg = "0" + hg;
                    hb = "0" + hb;
                } else if (rgbArr[0] <= 15 && rgbArr[1] <= 15) {
                    hr = "0" + hr;
                    hg = "0" + hg;
                } else if (rgbArr[0] <= 15 && rgbArr[2] <= 15) {
                    hr = "0" + hr;
                    hb = "0" + hb;
                } else if (rgbArr[1] <= 15 && rgbArr[2] <= 15) {
                    hb = "0" + hb;
                    hg = "0" + hg;
                } else if (rgbArr[0] <= 15) {
                    hr = "0" + hr;
                } else if (rgbArr[1] <= 15) {
                    hg = "0" + hg;
                } else if (rgbArr[2] <= 15) {
                    hb = "0" + hb;
                }
                hex.textContent = " # " + hr + " " + hg + " " + hb + " ";
                var post = document.querySelector(".post");
                setTimeout(function() {
                    post.style.animation = "posts 3s 0.6s 2 alternate forwards";
                }, 300);
                post.style.animation = "none";
            }
        }
    };
    var dig = document.getElementById("dig");
    var img = document.getElementById("img");
    dig.onclick = function() {
        img.style.transform = "scale(1.0)";
    };
    var close = document.getElementById("close");
    close.onclick = function() {
        img.style.transform = "scale(0)";
    };
    var rand = document.getElementById("rand");
    rand.onclick = function() {
        if (mode === "RGB") {
            ipr.value = Math.floor(Math.random() * 256);
            ipg.value = Math.floor(Math.random() * 256);
            ipb.value = Math.floor(Math.random() * 256);
            slider1.value = ipr.value;
            slider2.value = ipg.value;
            slider3.value = ipb.value;
        } else if (mode === "HSL") {
            ipr.value = Math.floor(Math.random() * 360);
            ipg.value = Math.floor(Math.random() * 100);
            ipb.value = Math.floor(Math.random() * 100);
            slider1.value = ipr.value;
            slider2.value = ipg.value;
            slider3.value = ipb.value;
        }
    };
    var sch = document.getElementById('switch');
    var ip1 = document.getElementById('ip1');
    var ip2 = document.getElementById('ip2');
    var ip3 = document.getElementById('ip3');
    var h2 = document.querySelector('h2');
    var ipbg = document.querySelectorAll('.ip');
    var notesRGB = document.getElementById("notesRGB");
    var notesHSL = document.getElementById("notesHSL");

    sch.onclick = function() {
        if (sch.value == "HSL/HSV mode") {
            mode = "HSL";
            alert("In HSL mode the 3 parameters are\n1.Hue (0-360 degree) defines color on color wheel\n2.Saturation (0-100%) defines Gray shade strength or intensity of color\n3.Lightness (0-100%) defines lightness\n\nExample-\ncolor:hsl(320, 70%, 20%)\n\nRefer Diagrams for HUE color wheel;");
            sch.value = "RGB mode";
            ip1.textContent = "HUE";
            ip2.textContent = "SATURATION";
            ip3.textContent = "LIGHTNESS";
            h2.textContent = "Test your color in hsl() format,(0 to 360 deg, 0-100%, 0-100%)";
            // ipbg[0].style.background = "linear-gradient(270deg,blue,green,red)";
            // ipbg[1].style.background = "linear-gradient(270deg,#444, #aaa)";
            // ipbg[2].style.background = "linear-gradient(270deg,#000,#fff)";
            ipr.style.background = "linear-gradient(270deg,blue,green,red)";
            ipg.style.background = "linear-gradient(270deg,#444, #aaa)";
            ipb.style.background = "linear-gradient(270deg,#000,#fff)";
            ipb.style.color = "black";
            slider1.style.background = "linear-gradient(90deg,#f00 0%,#0f0 33.33%,#00f  66.66%, #f00 100%)";
            // var saturation = "hsl("++",100%,50%)";
            slider2.style.background = "linear-gradient(90deg,#555,#aaa)";
            slider3.style.background = "linear-gradient(270deg,#fff,#000000)";

            notesHSL.style.display = "block";
            notesRGB.style.display = "none";

        } else {
            mode = "RGB";
            alert("In RGB mode the 3 parameters are\n1.Red (0-255) in decimal\n2.Green (0-255) in decimal\n3.Blue (0-255) in decimal\n\nNote that in Hexadecimal representation of rgb color we convert 0-255 decimal to 00-ff hexadecimal for each color\n\nExample-\n color:rgb(45,250,180);");
            sch.value = "HSL/HSV mode";
            ip1.textContent = "RED";
            ip2.textContent = "GREEN";
            ip3.textContent = "BLUE";
            h2.textContent = "Test your color in rgb() format, values between 0 to 255";
            // ipbg[0].style.background = "linen";
            // ipbg[1].style.background = "linen";
            // ipbg[2].style.background = "linen";
            ipr.style.background = "#f00";
            ipg.style.background = "#0f0";
            ipb.style.background = "#00f";
            ipb.style.color = "white";
            slider1.style.background = "linear-gradient(90deg,#000,#ff0000)";
            slider2.style.background = "linear-gradient(90deg,#000,#00ff00)";
            slider3.style.background = "linear-gradient(90deg,#000,#0000ff)";
            notesHSL.style.display = "none";
            notesRGB.style.display = "block";
        }
    };

    var cnameArr = {
        Honeydew: "#F0FFF0",
        HotPink: "#FF69B4",
        IndianRed: "#CD5C5C",
        Indigo: "#4B0082",
        Ivory: "#FFFFF0",
        Linen: "#FAF0E6",
        Magenta: "#FF00FF",
        Maroon: "#800000",
        MediumAquamarine: "#66CDAA",
        MediumBlue: "#0000CD",
        MintCream: "#F5FFFA",
        MistyRose: "#FFE4E1",
        Moccasin: "#FFE4B5",
        NavajoWhite: "#FFDEAD",
        PaleTurquoise: "#AFEEEE",
        PaleVioletRed: "#DB7093",
        PapayaWhip: "#FFEFD5",
        PeachPuff: "#FFDAB9",
        Peru: "#CD853F"
    };
    var cNameUl = document.querySelector('#colorNames ul');
    for (let key in cnameArr) {
        var li = document.createElement("LI");
        var colorName = document.createTextNode(key);
        var colorValue = document.createTextNode(cnameArr[key]);
        var cbox = document.createElement("SPAN");
        cbox.setAttribute("ID", "cbox");
        //var attr = document.createAttribute("ID");
        cbox.appendChild(colorValue);
        li.appendChild(colorName);
        li.appendChild(cbox);
        cNameUl.appendChild(li);

        li.style.background = cnameArr[key];

        li.addEventListener("click", function() {
            document.body.style.background = cnameArr[key];
        }, false);
        //console.log(cnameArr[key]);
    }

};
