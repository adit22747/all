

$(document).ready(
   
    
    () => {
       
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/photos",
            type: "GET",
            dataType: "JSON",
            success: (x) => {
                for (var i = 10; i < 30; i++) {
                    var img = x[i].thumbnailUrl;
                    $("div.container").append('<section><center><img src="' + img + '"/><br><div>"' + x[i].title.substring(0,10) + '<div><button id="myBtn" onclick="func()">add to cart</button></center></section></div>');
                }
            }
        });

       

    },
   
);




function func() {
    var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}