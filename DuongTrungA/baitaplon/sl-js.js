// JavaScript Document
$(document).ready(function() {
 
  $("#owl-demo-slidebar").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
	  autoplay:true,
      autoplayTimeout:200,
      singleItem:true
	   
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
  $(".next-slidebar").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev-slidebar").click(function(){
    owl.trigger('owl.prev');
  })
});
//*************************************************

$(document).ready(function() {
 
  var owl = $("#owl-demo-slide-product-promotion-tab");
 
  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next-product-new").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev-product-new").click(function(){
    owl.trigger('owl.prev');
  })

 
});
//end
//*************************************************

$(document).ready(function() {
 
  var owl = $("#owl-demo-slide-product-promotion");
 
  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next-promotion-product").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev-promotion-product").click(function(){
    owl.trigger('owl.prev');
  })

 
});
//end
//*************************************************

$(document).ready(function() {
 
  var owl = $("#owl-demo-slide-Featured-products");
 
  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next-Featured-products").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev-Featured-products").click(function(){
    owl.trigger('owl.prev');
  })

 
});
//end
//*************************************************
$(document).ready(function() {
 
  $("#owl-demo-buy-more-products").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
	  autoplay:true,
      autoplayTimeout:200,
      singleItem:true
	   
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
  $(".next-slidebar").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev-slidebar").click(function(){
    owl.trigger('owl.prev');
  })
});
//*************************************************