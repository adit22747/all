function add(){
var p = document.createElement("p");
var text = document.createTextNode("This is new.");
p.appendChild(text);
var main = document.getElementById("div");
main.appendChild(p);
}