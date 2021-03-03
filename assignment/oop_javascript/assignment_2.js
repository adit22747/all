function back() {
  var value = document.getElementById("edu").value;
  document.getElementById("edu").value = value.substr(0, value.length - 1);
}


function dis(val) {
  document.getElementById("edu").value += val;
}

function solve() {
  let x = document.getElementById("edu").value;
  let y = eval(x);
  document.getElementById("edu").value = y;
}

function squarefind(val) {
  var num = document.getElementById("edu").value;
  var result = Math.pow(num, val);
  document.getElementById("edu").value = result;
}

function cubefind(val) {
  var num = document.getElementById("edu").value;
  var result = Math.pow(num, val);
  document.getElementById("edu").value = result;
}

function squareroot(val) {
  var num = document.getElementById("edu").value;
  var result = Math.sqrt(num, val);
  document.getElementById("edu").value = result;
}

function clr() {
  document.getElementById("edu").value = "";
}

window.onload=()=>{
  
document.getElementById("na3").setAttribute("style","display:none"); 
document.getElementById("na").setAttribute("style","display:none");
document.getElementById("na1").setAttribute("style","display:none");
document.getElementById("na2").setAttribute("style","display:none");
document.getElementById("not").setAttribute("style","display:none");
document.getElementById("square").setAttribute("style","display:none");
document.getElementById("square1").setAttribute("style","display:none");
document.getElementById("cube").setAttribute("style","display:none");
document.getElementById("cube1").setAttribute("style","display:none");
document.getElementById("squareroot").setAttribute("style","display:none");
document.getElementById("squareroot1").setAttribute("style","display:none");
};



var display = document.getElementById("scientific");
var blank = document.getElementById("na");
var blank1 = document.getElementById("na1");
var blank3 = document.getElementById("na2");
var blank2 = document.getElementById("not");
var blank21 = document.getElementById("not1");
var Csquare = document.getElementById("square");
var Csquare1 = document.getElementById("square1");
var Ccube = document.getElementById("cube");
var Ccube1 = document.getElementById("cube1");
var Csquareroot = document.getElementById("squareroot");
var Csquareroot1 = document.getElementById("squareroot1");

display.onclick = function() {

  if (this.click) {
      blank.style["display"] = "block";
      blank1.style["display"] = "block";
      blank2.style["display"] = "block";
      blank3.style["display"] = "block";
      blank21.style["display"] = "block";
      Csquare.style["display"] = "block";
      Csquare1.style["display"] = "block";
      Ccube.style["display"] = "block";
      Ccube1.style["display"] = "block";
      Csquareroot.style["display"] = "block";
      Csquareroot1.style["display"] = "block";
  } else {
      blank.style["display"] = "none";
      blank1.style["display"] = "none";
      blank2.style["display"] = "none";
      blank3.style["display"] = "block";
      blank21.style["display"] = "none";
      Csquare.style["display"] = "none";
      Csquare1.style["display"] = "none";
      Ccube.style["display"] = "none";
      Ccube1.style["display"] = "none";
      Csquarerrot.style["display"] = "none";
      Csquarerrot1.style["display"] = "none";
  }

  document.getElementById("change").setAttribute("colspan","3");
};