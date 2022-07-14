console.log("This is to show that the Javascript page is registering.")
boxheight = 100
boxwidth = 100

var gridsquare = document.createElement("CANVAS")
var gridsquareinfo = gridsquare.getContext("2d")
gridsquare.width  = boxwidth
gridsquare.height = boxheight
gridsquare.style.border = "thin dotted red"
gridsquareinfo.beginPath()
gridsquareinfo.rect(0, 0,boxwidth, boxheight)
gridsquareinfo.fill()
document.body.appendChild(gridsquare);

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    gridsquare.width = window.innerWidth
    gridsquare.height = window.innerHeight
    // true for mobile device
    console.log("mobile device");
  }else{
    // false for not mobile device
    console.log("not mobile device");
  }