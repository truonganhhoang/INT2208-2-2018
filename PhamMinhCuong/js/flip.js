$(document).ready(function() {
	// chức năng flip
	$ ( "#card" ).flip ();
	$ (".card-gird").flip ();
	$ ( ".card-quiz" ).flip ();
	// hết chức năng flip

//----------------------------------------------------------------------------------------------------
	// CÁC CHỨC NĂNG TRONG QUẦN LESSONS

	// chức năng form1
	$(".card-quiz-1").click(function(){
	    $(".button1").show();
	});

	$(".next-form1").click(function(){
	    $("#form1").hide();
	    $("#form2").show();
	});

	// chức năng form2

	$(".card-quiz-2").click(function(){
	    $(".button2").show();
	});

	$(".back-form2").click(function(){
	    $("#form1").show();
	    $("#form2").hide();
	});

	$(".next-form2").click(function(){
	    $("#form2").hide();
	    $('#form3').show();
	});

	// chức năng form3

	$(".button-answer-1").click(function(){
	    alert("Wrong !!");
	    $("#form3").hide();
	    $("#form1").show();
	});

	$(".button-answer-2").click(function(){
	    alert("Right !!");
	    $('.button-answer-2').removeClass('btn-outline-primary');
	    $('.button-answer-2').addClass('btn-success');
	    $(".button-answer-1").prop('disabled', true);
	    $(".button-answer-2").prop('disabled', true);
	    $(".button-answer-3").prop('disabled', true);
	    $(".button3").show();
	});

	$(".button-answer-3").click(function(){
	    alert("Wrong !!");
	    $("#form3").hide();
	    $("#form1").show();
	});

	$(".next-form3").click(function(){
	    $("#form3").hide();
	    $('#form4').show();
	});

	// chức năng form 4

	$(".card-quiz-4").click(function(){
	    $(".button4").show();
	});

	$(".next-form4").click(function(){
	    $("#form4").hide();
	    $("#form5").show();
	});

	// chức năng form5

	$(".card-quiz-5").click(function(){
	    $(".button5").show();
	});

	$(".back-form5").click(function(){
	    $("#form4").show();
	    $("#form5").hide();
	});

	$(".next-form5").click(function(){
	    $("#form5").hide();
	    $('#form6').show();
	});

	// chức năng form 6

	$(".button-answer-4").click(function(){
	    alert("Wrong !!");
	    $("#form6").hide();
	    $("#form4").show();
	});

	$(".button-answer-5").click(function(){
	    alert("Right !!");
	    $('.button-answer-5').removeClass('btn-outline-primary');
	    $('.button-answer-5').addClass('btn-success');
	    $(".button-answer-4").prop('disabled', true);
	    $(".button-answer-5").prop('disabled', true);
	    $(".button-answer-6").prop('disabled', true);
	    $(".button6").show();
	});

	$(".button-answer-6").click(function(){
	    alert("Wrong !!");
	    $("#form6").hide();
	    $("#form4").show();
	});

	$(".next-form6").click(function(){
	    $("#form6").hide();
	    $('#form7').show();
	});

//------------------------------------------------------------------------------------------
});
 