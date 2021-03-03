$(document).ready(function() {
	$("#cpassword").mouseover(function() {
		$("#cpassword").attr("type", "text");
	});
	$("#cpassword").mouseout(function() {
		$("#cpassword").attr("type", "password");
    });
    

    
	$('.button').click(function() {
        var name=$('#uname').val();
        var email=$('#email').val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var regEx = /^\d{10}$/;
		if(name.length == 0 ){
		    alert('enter username');
		    return false;
        }
        
        else if (!regEx.test($('#mobile').val())){
            alert("enter 10 digit mobile number");
            return false;

        }
		
        else if(!pattern.test(email)){
            alert("wrong email");
            return false;

        }
        else{
            return true;
        }
           
		
	})

    var availableTags = ['football','volleyball','cricket','baseball'
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });
      var city = ['ahmedabad','vadodara','bharuch','ankleshwar','surat','valsad','vapi','indore','nagpur'];
      $('#city').select2({
          data:city
      });

      var city = ['ahmedabad','vadodara','bharuch','ankleshwar','surat','valsad','vapi','indore','nagpur'];
				$("#city").select2({
				  data: city
				});
      

});

