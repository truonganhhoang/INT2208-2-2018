$(document).ready(function() {
	$("#profile").removeClass('text-secondary').addClass('text-blue');

	$("#sign-out").click(function(event) {
		window.location.href = '1.html';
		return false;
	});

	$("div.tab").click(function(event) {
		$("div.tab").removeClass('text-blue').addClass('text-secondary');
		$(this).removeClass('text-secondary').addClass('text-blue');
		$(".tab-pane").addClass('d-none');
		var id_tab = $(this).attr("id");

		if (id_tab === "profile") {
			$(".profile").removeClass('d-none');
		}
		else if (id_tab === "settings") {
			$(".settings").removeClass('d-none');
		}
		else if (id_tab === "notifications") {
			$(".notifications").removeClass('d-none');
		}
		else if (id_tab === "feedback") {
			$(".feedback").removeClass('d-none');
		}
	});
});