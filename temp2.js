 
var x = "누나, 너무 잘 먹었어요!!";
var i = 0; 
function typeWriter() {
  if (i < x.length) {
    document.getElementById("typing").innerHTML += x[i];    
    i++;
    //setTimeout(함수, 시간)은 해당 시간 경과후 함수를 호출
    setTimeout(typeWriter, 100);
  } 
} 
typeWriter();