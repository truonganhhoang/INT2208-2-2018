	$(document).ready(function(){
		$('#demo1').stopwatch().stopwatch('start');
		var steps = $('form').find(".questions");
		var count = steps.size();
		steps.each(function(i){
			hider=i+2;
			if (i == 0) { 	
	    		$("#question_" + hider).hide();
	    		createNextButton(i);
	        }
			else if(count==i+1){
				var step=i + 1;
				//$("#next"+step).attr('type','submit');
	            $("#next"+step).on('click',function(){

				   submit();

	            });
		    }
			else{
				$("#question_" + hider).hide();
				createNextButton(i);
			}

		});
	    function submit(){
		     $.ajax({
							type: "POST",
							url: "ketqua.php",
							data: $('form').serialize(),
							success: function(msg) {
							  $("#quiz_form,#demo1").addClass("hide");
							  $('#result').show();
							  $('#result').append(msg);
							}
		     });

		}
		function createNextButton(i){
			var step = i + 1;
			var step1 = i + 2;
	        $('#next'+step).on('click',function(){
	        	$("#question_" + step).hide();
	        	$("#question_" + step1).show();
	        });
		}
		setTimeout(function() {
		      submit();
		}, 1200000);
	});
