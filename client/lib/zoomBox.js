const $ = require('jquery');

function imageZoom(imgID, resultID, toggle) {
  // Taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_image_zoom
  // because why should I recreate the wheel?
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  lens.style.width = "100px";
  lens.style.height = "100px";
  lens.style.position = "absolute";
  lens.style.border = "1px solid white";
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  // console.log(lens.offsetWidth, lens.offsetHeight);
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  result.style.borderRadius = "50%";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  result.addEventListener("click", () => {
    // console.log('You clicked me!');
    // console.log(toggle);
    toggle();
  });
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    // x = pos.x - (lens.offsetWidth / 2) + img.width;
    x = pos.x - (lens.offsetWidth / 2);
    // console.log(x);
    y = pos.y - (lens.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    // console.log('Initial:', x, cx, pos);
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens.style.left = (x + (img.width / 2)) + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    // console.log('Multiples:', cx, cy);
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    result.style.left = (x + (img.width / 2)) + "px";
    result.style.top = y + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

export default imageZoom;