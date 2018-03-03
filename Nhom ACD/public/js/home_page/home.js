$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
        loop           : true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive     : {
            0   : {
                items: 2,
                margin: 30
            },
            576 : {
                items: 3,
                nav  : false,
                margin: 50
            },
            768 : {
                items: 4,
                nav  : false,
                margin: 120
            },
            992 : {
            	item: 4,
            	margin: 120
            },
            1000: {
                items: 5,
               /* nav  : true*/
                loop : false,
                margin: 120
            }
        }
    })

    $(".row.follow .find").click(function(event) {
        $(".mask").addClass('mask-blur');
        $(".row.loading").css("display", "flex");

        $('html, body').css({
            overflow: 'hidden',
            height  : '100%'
        });
    });
});