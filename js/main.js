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
