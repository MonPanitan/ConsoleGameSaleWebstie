function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}