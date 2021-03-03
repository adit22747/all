function fun(){
    var x = location.pathname;
    var y= location.href;
    var z =location.protocol;
  document.getElementById("href").innerHTML = y;
  document.getElementById("path").innerHTML = x;
  document.getElementById("protocol").innerHTML = z;
}