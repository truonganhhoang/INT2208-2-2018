$(document).ready(function () {
    $(document).on('click', 'header .sign-in, header .sign-up', function (event) {
        var view_width = $(window).width();
        if (view_width < 768) {
            $("header").css("display", "none");
            $(".intro").css("display", "none");
            if ($(this).hasClass('sign-in')) {
                $(".popup-login").css("display", "block");
            }
            else {
                $(".popup-signup").css("display", "block");
            }
        }
        else {
            if ($(this).hasClass('sign-in')) {
                $(".popup-login").addClass('alert-popup');
            }
            else {
                $(".popup-signup").addClass('alert-popup');
            }
        }

        $('html, body').css({
            overflow: 'hidden',
            height  : '100%'
        });
    });

    $(document).on("click", ".cancel", function (event) {
        $('html, body').css({
            overflow: 'visible'
        });

        var view_width = $(window).width();
        if (view_width < 768) {
            $("header").css("display", "block");
            $(".intro").css("display", "block");

            if ($(this).hasClass('cancel-log')) {
                $(".popup-login").css("display", "none");
            }
            else {
                $(".popup-signup").css("display", "none");
            }
        }
        else {
            if ($(this).hasClass('cancel-log')) {
                $(".popup-login").removeClass('alert-popup');
            }
            else {
                $(".popup-signup").removeClass('alert-popup');
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop           : true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive     : {
            0   : {
                items: 2
            },
            576 : {
                items: 4,
                nav  : false
            },
            768 : {
                items: 4,
                nav  : false
            },
            992 : {
            	item: 5
            },
            1000: {
                items: 6,
               /* nav  : true*/
                loop : false,
                margin: 20
            }
        }
    })
});