window.onload = function(){
        var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var j=0;

for(i=20;i<90;i=i+10)
{
ctx.beginPath();
ctx.arc(100, 100,i, Math.PI, 2 * Math.PI,false);

 ctx.lineWidth = 10;
        ctx.strokeStyle = colors[j];
  		
        ctx.lineCap = "round";

ctx.stroke();
j++;
ctx.closePath();
}

var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
    var img = document.getElementById("skills");
    var img1 = document.getElementById("oip");
    var img2 = document.getElementById("download");
   ctx.drawImage(img, 20, 20,250,150)
   ctx.drawImage(img1, 300, 20,300,150)
   ctx.drawImage(img2, 600, 20,300,150)
};