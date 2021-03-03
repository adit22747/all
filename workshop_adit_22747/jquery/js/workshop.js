$(document).ready(
    ()=>{
        $('#search').on("keyup",function() {
            var value = $(this).val().toLowerCase();
            //console.log(value);
            $("#value tr").filter(function() {
                console.log("The value is" + $(this).text());
               console.log($(this).text().toLowerCase().indexOf(value));
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
        });
    }
);