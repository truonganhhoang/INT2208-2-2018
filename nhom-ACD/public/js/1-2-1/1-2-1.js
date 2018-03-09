$(document).ready(function() {
	$("#card").flip();

	$("#card").click(function(event) {
		$("#btn-continue").toggleClass('d-none');
		$("#flip").toggleClass('d-none');
	});

	$("#btn-continue").click(function(event) {
		window.location.href = '1-2-2.html';
         return false;
	});
});