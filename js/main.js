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