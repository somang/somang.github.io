document.addEventListener("DOMContentLoaded", function(){

    // Add actionlistners for each navigation items
    document.getElementById("home").onclick = function(){
    };


});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

