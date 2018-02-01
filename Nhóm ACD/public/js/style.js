$(document).ready(function() {
	$(document).on('click', 'header .sign-in', function(event) {
		var view_width = $(window).width();
		if (view_width < 768) {
			$("header").css("display", "none");
			$(".intro").css("display", "none");
			$(".popup-login").css("display", "block");
		}
		else {
			$(".popup-login").addClass('alert-popup');
		}
		
		$('html, body').css({
            overflow: 'hidden',
    		height: '100%'
		});
	});

	$(document).on("click", ".cancel", function(event) {
		$('html, body').css({
            overflow: 'visible'
		});

		var view_width = $(window).width();
		if (view_width < 768) {
			$("header").css("display", "block");
			$(".intro").css("display", "block");
			$(".popup-login").css("display", "none");
		}
		else {
			$(".popup-login").removeClass('alert-popup');
		}
		
	});
});