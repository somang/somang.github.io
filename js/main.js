
document.addEventListener("DOMContentLoaded", function() {
    // Add actionlistners for each navigation items
    document.getElementById("home").onclick = function() {
        document.getElementById("home_page").style.display = "block";
        document.getElementById("cv_page").style.display = "none";
        document.getElementById("portfolio_page").style.display = "none";
        document.getElementById("portfolio_page").classList.remove("activate_portfolio_page");
        
        document.getElementById("about_page").style.display = "none";
    };

    document.getElementById("about").onclick = function() {
        document.getElementById("home_page").style.display = "none";
        document.getElementById("cv_page").style.display = "none";
        document.getElementById("portfolio_page").style.display = "none";
        document.getElementById("portfolio_page").classList.remove("activate_portfolio_page");
        
        document.getElementById("about_page").style.display = "block";
    };

    document.getElementById("cv").onclick = function() {
        document.getElementById("home_page").style.display = "none";
        document.getElementById("cv_page").style.display = "block";
        document.getElementById("portfolio_page").style.display = "none";
        document.getElementById("portfolio_page").classList.remove("activate_portfolio_page");
        
        document.getElementById("about_page").style.display = "none";
    };

    document.getElementById("portfolio").onclick = function() {
        document.getElementById("home_page").style.display = "none";
        document.getElementById("cv_page").style.display = "none";
        document.getElementById("portfolio_page").style.display = "flex";
        document.getElementById("portfolio_page").classList.add("activate_portfolio_page");
        
        document.getElementById("about_page").style.display = "none";
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
