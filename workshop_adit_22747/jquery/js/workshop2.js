$(document).ready(function() {
var flag=0;    
	$("#show").click(function() {
        if(flag==0){
            $("#password").attr("type", "text");
            flag=1;
        }
        
       else{
        $("#password").attr("type", "password");
        flag=0;
       }
       
    });

    
    
	
});