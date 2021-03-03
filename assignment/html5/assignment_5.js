function bodyLoad() {    
    var c = document.getElementById("mycanvas");     
   var draw = c.getContext("2d");  
   
   
    
   draw.beginPath();
       
   draw.strokeStyle="black";
   draw.fillStyle = "yellow";    
   draw.arc(75, 75, 50, 0, Math.PI * 2, true); 
   draw.lineWidth = 4;
   draw.stroke();   
   draw.closePath();   
        
   draw.fill();
        
    var eye = c.getContext("2d");      
    eye.moveTo(55, 50);       
    eye.beginPath();    
    eye.fillStyle = "black";    
    eye.arc(50, 50, 4, 0, Math.PI * 2, true);    
    eye.closePath();    
    eye.fill();      
    eye.moveTo(103, 49);     
    eye.beginPath();    
    eye.fillStyle = "black";    
    eye.arc(100, 50, 4, 0, Math.PI * 2, true);    
    eye.closePath();    
    eye.fill();      
   var smile = c.getContext("2d");    
   smile.moveTo(105, 75);    
   smile.beginPath();    
   smile.strokeStyle = "black";    
   smile.arc(75, 75, 20, 0, Math.PI, false);   
   smile.stroke();  
   smile.closePath();
   
       
 }  

