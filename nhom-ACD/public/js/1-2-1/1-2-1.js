$(document).ready(function() {
	$("#card").flip();

	$("#card").click(function(event) {
		$("#btn-continue").toggleClass('d-none');
		$("#flip").toggleClass('d-none');
	});
});