$(document).ready(function(){

	$('#submit').click(function(){

		var fullname = $('#fullname').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var birthday = $('#birthday').val();
		var sex = $('#sex').val();
		if(fullname==''||email==''||phone==''||birthday==''|| sex=='') {
			$('#response').html('<span class="text-danger">All feilds are required</span>');
		}
		else
		{  
			$.ajax({  
				url:"general.php",  
				method:"POST",  
				data:$('#submit_form').serialize(),  
				beforeSend:function(){  
					$('#response').html('<span class="text-info">Loading response...</span>');  
				},  
				success:function(data){  
					$('form').trigger("reset");  
					$('#response').fadeIn().html(data);  
					setTimeout(function(){  
						$('#response').fadeOut("slow");  
					}, 5000);  
				}  
			});  
		} 
	});
});