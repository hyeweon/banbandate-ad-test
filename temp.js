var x = "어쩌고 저쩌고";
var i = 0;
var typing = document.getElementById("typing");
function typeWriter() {
  if (i < x.length) {
    typing.innerHTML += x[i];
    i++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();
