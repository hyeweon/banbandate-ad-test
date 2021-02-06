var p01 = document.querySelector('.scene01');
var p02 = document.querySelector('.scene02');
var b01 = document.querySelector('.btn01');

var x = "너 자전거 타고 싶다고 그랬잖아.";
var i = 0;
function typeWriter() {
  if (i < x.length) {
    document.getElementById("typing").innerHTML += x[i];
    i++;
    setTimeout(typeWriter, 100);
  }
}
function btnshow(){
  b01.style.display = 'block';
}
typeWriter();
setTimeout(btnshow, 2000);

var y = "어쩌고 저쩌고";
var j = 0;
function typeWriter02() {
  if (j < y.length) {
    document.getElementById("typing02").innerHTML += y[j];
    j++;
    setTimeout(typeWriter02, 100);
  }
}

function next01() {
	p01.style.display = 'none';
  p02.style.display = 'block';
  typeWriter02();
}