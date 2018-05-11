/**
 * Created by Administrator on 01/06/2017.
 */
$(document).ready(function () {

    $('#owl-1').owlCarousel({
        loop: true,
        autoplay: true,
        center:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            }
        }
    });
    $('#owl-11').owlCarousel({
         loop: true,
      
        center:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            }
        }
    });
    $('#owl-19').owlCarousel({
         loop: true,
      
        center:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            }
        }
    });
     $('#owl-12').owlCarousel({
        
        center:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            }
        }
    });
     
     $(".click").click(function(){  
        $(".box").slideToggle(); 
 });
    $('.owl_control_left_0').click(function () {



        $('#owl-1').trigger('prev.owl.carousel', [300]);

//                    owl.trigger('prev.owl.carousel');

    });

    $('.owl_control_right_0').click(function () {

        console.log('dkm');

//                    owl.trigger('next.owl.carousel');

        $('#owl-1').trigger('next.owl.carousel', [300])

    });

    $('#owl-2').owlCarousel({
        margin:15,
        loop: true,
        // autoplay: true,
        // center:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    })
    $('.owl_control--left-2').click(function () {
        $('#owl-2').trigger('prev.owl.carousel', [300]);
    });

    $('.owl_control--right-2').click(function () {
        $('#owl-2').trigger('next.owl.carousel', [300])
    });
    $('#owl-3').owlCarousel({
        margin:15,
        loop: true,
        // autoplay: true,
        // center:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    })
    $('#owl-4').owlCarousel({
        margin:15,
        loop: true,
        // autoplay: true,
        // center:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    })
    $('#owl-5').owlCarousel({
        loop: true,
         //autoplay: true,
        // autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 2
            }
        }
    });
 $('.owl_control--left-5').click(function () {
        $('#owl-5').trigger('prev.owl.carousel', [300]);
    });

    $('.owl_control--right-5').click(function () {
        $('#owl-5').trigger('next.owl.carousel', [300])
    });

    $('#owl-9').owlCarousel({
        loop: true,
        margin:20,
        // autoplay: true,
        // center:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    })

});


$(document).ready(function () {
    var owl = $('#owl-single');
    owl.owlCarousel({
        margin:15,
        loop: true,
        // autoplay: true,
        // center:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    })
    $('.owl_control--left_single').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });
    $('.owl_control--right_single').click(function () {
        owl.trigger('next.owl.carousel', [300])
    });
});

$(document).ready(function () {

    // $('.bar_cart .cart').hover(function(){
    //     $('.bar_cart ul').show('slow');
    // },function(){
    //     $('.bar_cart ul').hide('slow');
    // });
    $('.bar_cart .cart').hover(function(){
        $('.bar_cart ul').show('slow');
    });
    $('.bar_cart ul').mouseleave(function(){
        $('.bar_cart ul').hide('slow');
    });


    /**

     * Created by Administrator on 18/05/2017.

     */

    $(document).ready(function () {

        $('.class_the_ul').children('li').addClass('level0');

        $('li.level0.menu-item-has-children').children('ul.sub-menu').addClass('level0');

        $('ul.level0').children('li').addClass('level1');

        $('li.level1.menu-item-has-children').children('ul.sub-menu').addClass('level1');

        $('ul.level1').children('li').addClass('level2');

        $('li.level0.menu-item-has-children').append('<em class="level0">+</em>');

        $('li.level1.menu-item-has-children').append('<em class="level1">+</em>');

        $('#btn-mobile').click(function () {

            console.log('dkm');

            $('.menu-mobile').toggle(500)

        });



        $('em.level0').click(function () {

            // console.log('dkm');

            $(this).prev().toggle(500)

        });

        $('em.level1').click(function () {

            $(this).prev().toggle(500)

        });



    });



});

$(document).ready(function () {
    var owl = $('#owl-7');
    owl.owlCarousel({
        loop: true,
        margin:30,
        // autoplay: true,
        // center:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    })
    $('.owl_control--left').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('.owl_control--right').click(function () {
        owl.trigger('next.owl.carousel', [300])
    });
});

$(document).ready(function () {

    $('#owl-8').owlCarousel({
        loop: true,
        margin:30,
        // autoplay: true,
        // center:true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    })
    $('.owl_control--left-8').click(function () {
        $('#owl-8').trigger('prev.owl.carousel', [300]);
    });

    $('.owl_control--right-8').click(function () {
        $('#owl-8').trigger('next.owl.carousel', [300])
    });
});
$(document).ready(function(){
  $('#tab1').zoom();
  $('#tab2').zoom();
  $('#tab3').zoom();
  $('#tab4').zoom();
  $('#tab5').zoom();
  $( "#mega-menu-item-177 " ).append( "<p class='wr'><i class='fa fa-angle-down xamlong' ></i></p>" );

});
$(document).ready(function(){
    $('.chitiet-sp').affix({offset: {top: 300} }); 
});
