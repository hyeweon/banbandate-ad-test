var s01 = document.querySelector('.scene01');
var s02 = document.querySelector('.scene02');
var b0101 = document.querySelector('.btn0101');
var b0201 = document.querySelector('.btn0201');
var t0201 = document.querySelector('.textbox0201');
var t0202 = document.querySelector('.textbox0202');

var i = 0;
var x0101 = "지이잉..Zz";
function typeWriter0101() {
  if (i < x0101.length) {
    document.getElementById("typing0101").innerHTML += x0101[i];
    i++;
    setTimeout(typeWriter0101, 100);
  }
  else{
    b0101.style.display = 'block';
  }
}

var x0201 = "너 학교 가고 있어?";
function typeWriter0201() {
  if (i < x0201.length) {
    document.getElementById("typing0201").innerHTML += x0201[i];
    i++;
    setTimeout(typeWriter0201, 100);
  }
  else{
    i=0;
    typeWriter0202();
  }
}

var x0202 = "편의점 앞으로 와. 같이 가자";
function typeWriter0202() {
  if (i < x0202.length) {
    document.getElementById("typing0202").innerHTML += x0202[i];
    i++;
    setTimeout(typeWriter0202, 100);
  }
  else{
    b0201.style.display = 'block';
  }
}

function textbox0202(){
  t0201.style.display = 'none';
  t0202.style.display = 'block';
}

function scene02(){
  s01.style.display = 'none';
  s02.style.display = 'block';
  i=0;
  typeWriter0201();
}

typeWriter0101();

var y = "어쩌고 저쩌고";
var j = 0;
function typeWriter02() {
  if (j < y.length) {
    document.getElementById("typing02").innerHTML += y[j];
    j++;
    setTimeout(typeWriter02, 100);
  }
}