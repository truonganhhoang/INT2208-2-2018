$(document).ready(function () {
    // Khi click vao login hoac sign-up thi hien ra cua so tuong ung
    $(document).on('click', 'header .sign-in, header .sign-up', function (event) {
        var view_width = $(window).width();
        if (view_width < 768) {
            $("header .navigation").css("display", "none");
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

        $(".mask").addClass('mask-blur');

        $('html, body').css({
            overflow: 'hidden',
            height  : '100%'
        });
    });

    // Khi an vao nut X, hoac ben ngoai popup thi se an cua so di    
    $(document).on("click", ".cancel, .mask", function (event) {
        $('html, body').css({
            overflow: 'visible'
        });

        $(".mask").removeClass('mask-blur');

        var view_width = $(window).width();
        if (view_width < 768) {
            $("header .navigation").css("display", "flex");
            $(".intro").css("display", "block");

            if ($(this).hasClass('mask')) {
                $(".popup-login").css("display", "none");
                $(".popup-signup").css("display", "none");
            }
            else if ($(this).hasClass('cancel-log')) {
                $(".popup-login").css("display", "none");
            }
            else {
                $(".popup-signup").css("display", "none");
            }
        }
        else {
            if ($(this).hasClass('mask')) {
                if ($(".popup-login").hasClass('alert-popup')) {
                    $(".popup-login").removeClass('alert-popup');
                }
                else if ( $(".popup-signup").hasClass('alert-popup')) {
                    $(".popup-signup").removeClass('alert-popup');
                }
            }
            else if ($(this).hasClass('cancel-log')) {
                $(".popup-login").removeClass('alert-popup');
            }
            else {
                $(".popup-signup").removeClass('alert-popup');
            }
        }
    });

    $("button.button-login").click(function(event) {
         window.location.href = 'home.html';
         return false;
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