var x = "너 자전거 타고 싶다고 그랬잖아.";
var i = 0; 
function typeWriter() {
  if (i < x.length) {
    document.getElementById("typing").innerHTML += x[i];    
    i++;
    setTimeout(typeWriter, 100);
  } 
} 
typeWriter();