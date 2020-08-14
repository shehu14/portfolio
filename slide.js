//getting dom elements
var hamburger = document.getElementById("hamburger");
var sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", function () {
  //addclassto enablesmooth slide animationof mobilenav
  sidebar.classList.toggle("open");
});
//changing img onmousehover
var avatar = document.getElementById("avatar");
    avatar.addEventListener("mouseover",  function() {
    
      avatar.style.backgroundImage = "url('images/IMG_5778.PNG')";
    });
    //resetting it back
    avatar.addEventListener("mouseout", function() {
      avatar.style.backgroundImage = "url('images/IMG_4980.JPG')";
    });