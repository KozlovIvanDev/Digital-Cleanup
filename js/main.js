$(window).on("load", function () {

    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(650);
    });

})

// var headerHeight = $('header').outerHeight();

// $(".nav__link").click(function (e) {


//     var linkHref = $(this).attr('href');

//     $('html, body').animate({
//         scrollTop: $(linkHref).offset().top - headerHeight
//     }, 1000);

//     e.preventDefault();
// });
// (function () {
//     var throttle = function (type, name, obj) {
//         var obj = obj || window;
//         var running = false;
//         var func = function () {
//             if (running) { return; }
//             running = true;
//             requestAnimationFrame(function () {
//                 obj.dispatchEvent(new CustomEvent(name));
//                 running = false;
//             });
//         };
//         obj.addEventListener(type, func);
//     };
//     throttle("scroll", "optimizedScroll");
// })();

var logofaces = document.getElementById("logofaces")

// to use the script *without* anti-jank, set the event to "scroll" and remove the anonymous function.

window.addEventListener("optimizedScroll", function () {
    logofaces.style.transform = "rotate(" + window.pageYOffset + "deg)";
});




var year = new Date().getFullYear();

var date = `Copyright &copy; <a class="lets-a" href="https://letsdoitukraine.org/">Let's do it, Ukraine!</a> ${year}. All Rights Reserved.`;

document.getElementsByClassName('copyright_date')[0].innerHTML = date;