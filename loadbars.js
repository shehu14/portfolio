//exitindicator
var i = 0;
//needed torun after 1 s..cosofpage animation
setTimeout(move,1000);
var id;
    //get dom elements
    var webdevelement = document.querySelector(".webdevbar");
    var uidevelement = document.querySelector(".uidevbar");
    var width = 0;
function move() {
  if (i === 0) {
    i = 1;

    //increasethe width every 10ms
     id = setInterval(increase, 10);
  }
}

function increase() {
      if (width >= 60) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        //update domvisual and text
        webdevelement.style.width = width + "%";
        uidevelement.style.width = width + "%";
        webdevelement.innerHTML =width  + "%";
       uidevelement.innerHTML = width  + "%";
      }
    }