function myFunction() {
    let x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  var onresize = function(e) {
    let x = document.getElementById("mobile-menu");
    width = e.target.outerWidth;
    if(width > 950){
      x.removeAttribute("style");;
    }
 }
 window.addEventListener("resize", onresize);