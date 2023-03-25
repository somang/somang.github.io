
document.addEventListener("DOMContentLoaded", function() {
    // Add actionlistners for each navigation items
    document.getElementById("home").onclick = function() {
        console.log("home");
        document.getElementById("home_page").style.display = "block";
//         document.getElementById("about_page").style.display = "none";
        document.getElementById("cv_page").style.display = "none";
        document.getElementById("portfolio_page").style.display = "none";
        document.getElementById("portfolio_page").classList.remove("activate_portfolio_page");
//         document.getElementById("contact_page").style.display = "none";
    };

//     document.getElementById("about").onclick = function() {
//         console.log("about");
//         document.getElementById("home_page").style.display = "none";
//         document.getElementById("about_page").style.display = "block";
//         document.getElementById("cv_page").style.display = "none";
//         document.getElementById("portfolio_page").style.display = "none";
//         document.getElementById("portfolio_page").classList.remove("activate_portfolio_page");
//         document.getElementById("contact_page").style.display = "none";
//     };

    document.getElementById("cv").onclick = function() {
        console.log("cv");
        document.getElementById("home_page").style.display = "none";
//         document.getElementById("about_page").style.display = "none";
        document.getElementById("cv_page").style.display = "block";
        document.getElementById("portfolio_page").style.display = "none";
        document.getElementById("portfolio_page").classList.remove("activate_portfolio_page");
//         document.getElementById("contact_page").style.display = "none";
    };

    document.getElementById("portfolio").onclick = function() {
        console.log("portfolio");
        document.getElementById("home_page").style.display = "none";
//         document.getElementById("about_page").style.display = "none";
        document.getElementById("cv_page").style.display = "none";
        document.getElementById("portfolio_page").style.display = "flex";
        document.getElementById("portfolio_page").classList.add("activate_portfolio_page");
//         document.getElementById("contact_page").style.display = "none";
    };

//     document.getElementById("contact").onclick = function() {
//         console.log("contact");
//         document.getElementById("home_page").style.display = "none";
//         document.getElementById("about_page").style.display = "none";
//         document.getElementById("cv_page").style.display = "none";
//         document.getElementById("portfolio_page").style.display = "none";
//         document.getElementById("portfolio_page").classList.remove("activate_portfolio_page");
//         document.getElementById("contact_page").style.display = "block";
//     };

});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
