$(document).ready(function () {
    // Khi click vao login hoac sign-up thi hien ra cua so tuong ung
    $(document).on('click', '.sign-in, .sign-up', function (event) {
        if ($(this).hasClass('sign-in')) {
            $(".login").removeClass('d-none');
        }
        else if ($(this).hasClass('sign-up')) {
            $(".register").removeClass('d-none');
        }

       /* $('html, body').css({
            overflow: 'hidden',
            height  : '100%'
        });*/
    });

    // Khi an vao nut X, hoac ben ngoai popup thi se an cua so di    
    $(document).on("click", "button.close", function (event) {
        $('html, body').css({
            overflow: 'visible'
        });

        $(".login").addClass('d-none');
        $(".register").addClass('d-none');
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
                items: 2,
                margin: 15
            },
            576 : {
                items: 4,
                nav  : false,
                margin: 20
            },
            768 : {
                items: 4,
                nav  : false,
                margin: 25
            },
            992 : {
            	item: 5
            },
            1000: {
                items: 6,
                loop : false,
                margin: 30
            }
        }
    })
});