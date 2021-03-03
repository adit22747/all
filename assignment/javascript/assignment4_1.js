var temp=0;
var arr1 = Array();
function add()
{
 arr1[temp] = document.getElementById("text1").value;
 temp++;
 document.getElementById("text1").value = "";
}
function display()
{
    var result ="<br.";
  for (var x=0; x<arr1.length; x++)
   {
     result += arr1[x] + "<br/>";
   }
   document.getElementById("output").innerHTML = result;
}