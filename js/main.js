$(document).ready(function() {
    "use strict"
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
    });
    /*$('.text').typed({
        strings: ["first sentenece .", "second sentenece !!"],
    });*/
    var typed = new Typed('.text', {
        strings: ['<strong>first</strong> <strong class="primary">sentenece .</strong>', '<strong>second </strong> <strong class="primary">sentenece !!</strong>'],
        //smartBackspace: true, // Default value
        loop: true,
        typeSpeed: 60,
    });
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass('secondary');
        } else {
            if ($("nav").hasClass('secondary')) {
                $("nav").removeClass('secondary');
            }
        }
    });
    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
    });
    $('#team-members').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $("#reviews-content").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        look: true,
        smartSpeed: 700,
        autoPlayHoverPause: true

    });
    $('.count').counterUp({
        delay: 10,
        time: 3000
    });
    /**********services******************/
    $(".accordian-container").click(function() {
        $(".accordian-container").children(".body").slideUp();
        $(".accordian-container").removeClass("active");
        $(".accordian-container").children(".head").children("span").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
        $(this).children(".body").slideDown();
        $(this).addClass("active");
        $(this).children(".head").children("span").removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
    });

});