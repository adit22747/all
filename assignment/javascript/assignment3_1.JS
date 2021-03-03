var d = new Date();
function time(){
    document.getElementById("demo").innerHTML = d;
var curHr = d.getHours()

if (curHr < 12) {
  document.write('good morning');
} else if (curHr < 18) {
    document.write('good afternoon');
} else {
    document.write('good evening');
}
}