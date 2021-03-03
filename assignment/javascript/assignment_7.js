// window.onload = () =>{
//     var h1=document.getElementById('date');
//     var dat =new Date();
//     var month = dat.getMonth();
//     var day = dat.getDate();
//     var year = dat.getFullYear();
//     h1.setAttribute("max",year+'-'+month+'-'+day);
// };
window.onload = () => {
	//timer
	var minutesLabel = document.getElementById("minutes");
	var secondsLabel = document.getElementById("seconds");
	var totalSeconds = 0;
	setInterval(setTime, 1000);

	function setTime() {
		++totalSeconds;
		secondsLabel.innerHTML = pad(totalSeconds % 60);
		minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
	}

	function pad(val) {
		var valString = val + "";
		if (valString.length < 2) {
			return "0" + valString;
		} else {
			return valString;
		}
	}
	var checkbox = document.getElementById("read");
	var box = document.getElementById("fav");
	var box1 = document.getElementById("fav1");
	checkbox.onclick = function () {
		if (this.checked) {
			box.style["display"] = "block";
			box1.style["display"] = "block";
		} else {
			box.style["display"] = "none";
			box1.style["display"] = "none";
		}
    };
    
    
};

function fun() {
    var d = new Date();
            var x = document.getElementById("date").value.toString();
            var xx = x.split("-");
            var dd = d.getDate();
            var mm = d.getMonth();
mm++;
            var yy = d.getFullYear();
            
            //   alert( d.toISOString().toString()); 
            // if(xx[0]>dd && xx[1]>=mm && xx[2]>=yy)
            // {
            //     alert("You can only choose past date");
            // return false;
            // }
            if(xx[2]>yy)
            {
                final=1;
                alert("Please enter a valid date");
                return false;
            } 
            else if(xx[2]<yy){
                   
            }
            else{
                if(xx[1]>mm){
                    final=1;
                    alert("Please enter a valid date");
                    return false;
                }
                else if(xx[1]<=mm){
                    if(xx[0]<=dd){
                       
                    }
                    else{
                         alert("Please enter a valid date");
                        final=1;
                         return false;
                    }
                }
                else{
                    
                }
            }
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	if (fname == "" || lname == "" || email == "") {
		document.getElementById('fname').style.borderColor = "red";
		document.getElementById('lname').style.borderColor = "red";
		document.getElementById('email').style.borderColor = "red";
		alert("you have not entered firstname or lastname or email");
		return false;
	}
	
};

function fun1() {
	var b = document.getElementById("date");
	var f = b.value;
	var w = document.getElementById("warning");

	var ff = f.toString();
	var n = ff.length;
	if ((ff.charCodeAt(n - 1) > 47 && ff.charCodeAt(n - 1) < 58) || ff.charCodeAt(n - 1) == 45) {
		//  alert(n);
		w.hidden = true;
	} else {


		//b.style.border=" 2px solid red";

		var gg = ff.replace(ff.charAt(n - 1), '');
		b.value = gg;
		w.hidden = false;

	}
}