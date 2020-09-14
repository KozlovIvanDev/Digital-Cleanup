$(window).on("load", function () {

    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(650);
    });

})

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    });
});
var headerHeight = $('header').outerHeight();

$(".nav__link").click(function (e) {

    $(this).addClass('current').siblings().removeClass('current')

    var linkHref = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();
});
(function () {
    var throttle = function (type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function () {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle("scroll", "optimizedScroll");
})();

var logofaces = document.getElementById("logofaces")

// to use the script *without* anti-jank, set the event to "scroll" and remove the anonymous function.

window.addEventListener("optimizedScroll", function () {
    logofaces.style.transform = "rotate(" + window.pageYOffset + "deg)";
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});


var year = new Date().getFullYear();

var date = `Copyright &copy; Let's do it, Ukraine! ${year}. All Rights Reserved.`;

document.getElementsByClassName('copyright_date')[0].innerHTML = date;