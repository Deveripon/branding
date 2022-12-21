$(document).ready(function () {
    $(".slider").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        loop: true,
        autoWidh: true,
        /* smartSpeed: 700,
        fluidSpeed: 700, */
        autoplaySpeed: 3000,

    });
})
$(document).ready(function () {
    $(".author-qoutes").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        loop: true,
        autoWidh: true,
        smartSpeed: 700,
        fluidSpeed: 700,
        autoplaySpeed: 3000,

    });
})
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})