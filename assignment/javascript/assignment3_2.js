function character(){
    var value = prompt("Please enter character");
    var str = "Cybage software pvt ltd.";
    var n = str.indexOf(value);
    if(str.indexOf(value)){
        document.getElementById("demo").innerHTML = "character "+value +" found at "+n+" postion";
    }
    else{
        document.getElementById("demo").innerHTML = "character "+value +" not found ";
    }
    document.getElementById('lower').innerHTML=str.toLowerCase();
    document.getElementById('upper').innerHTML=str.toUpperCase();
    
  }
