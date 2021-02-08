var s01 = document.querySelector('.scene01');
var s02 = document.querySelector('.scene02');
var s03 = document.querySelector('.scene03');
var s04 = document.querySelector('.scene04');
var s05 = document.querySelector('.scene05');
var s06 = document.querySelector('.scene06');
var s07 = document.querySelector('.scene07');
var s08 = document.querySelector('.scene08');
var b0101 = document.querySelector('.btn0101');
var b0201 = document.querySelector('.btn0201');
var b0301 = document.querySelector('.btn0301');
var b0304 = document.querySelector('.btn0304');
var t0201 = document.querySelector('.textbox0201');
var t0202 = document.querySelector('.textbox0202');
var t0301 = document.querySelector('.textbox0301');
var t0302 = document.querySelector('.textbox0302');
var t0303 = document.querySelector('.textbox0303');
var t0304 = document.querySelector('.textbox0304');
var t0305 = document.querySelector('.textbox0305');

var i = 0;
var x0101 = "지이잉..Zz";
function typeWriter0101() {
  if (i < x0101.length) {
    document.getElementById("typing0101").innerHTML += x0101[i];
    i++;
    setTimeout(typeWriter0101, 80);
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
    setTimeout(typeWriter0201, 80);
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
    setTimeout(typeWriter0202, 80);
  }
  else{
    b0201.style.display = 'block';
  }
}

var x0301 = "빵빵 -      ";
function typeWriter0301() {
  if (i < x0301.length) {
    document.getElementById("typing0301").innerHTML += x0301[i];
    i++;
    setTimeout(typeWriter0301, 80);
  }
  else{
    t0301.style.display = 'none';
    t0201.style.display = 'block';
    i=0;
    typeWriter0302();
  }
}
var x0302 = "어 안녕?";
function typeWriter0302() {
  if (i < x0302.length) {
    document.getElementById("typing0302").innerHTML += x0302[i];
    i++;
    setTimeout(typeWriter0302, 80);
  }
  else{
    i=0;
    typeWriter0303();
  }
}
var x0303 = "학교 가는거야?";
function typeWriter0303() {
  if (i < x0303.length) {
    document.getElementById("typing0303").innerHTML += x0303[i];
    i++;
    setTimeout(typeWriter0303, 80);
  }
  else{
    b0301.style.display = 'block';
  }
}
var x0304 = "그러게ㅎㅎ";
function typeWriter0304() {
  if (i < x0304.length) {
    document.getElementById("typing0304").innerHTML += x0304[i];
    i++;
    setTimeout(typeWriter0304, 80);
  }
  else{
    i=0;
    typeWriter0305();
  }
}
var x0305 = "나도 학교 가는 길인데 내 차로 같이 갈래?";
function typeWriter0305() {
  if (i < x0305.length) {
    document.getElementById("typing0305").innerHTML += x0305[i];
    i++;
    setTimeout(typeWriter0305, 80);
  }
  else{
    b0304.style.display = 'block';
  }
}


function scene02(){
  s01.style.display = 'none';
  s02.style.display = 'block';
  i=0;
  typeWriter0201();
}
function scene03(){
  s02.style.display = 'none';
  s03.style.display = 'block';
  i=0;
  typeWriter0301();
}

function textbox0202(){
  t0201.style.display = 'none';
  t0202.style.display = 'block';
}
function textbox0303(){
  t0302.style.display = 'none';
  t0303.style.display = 'block';
}
function textbox0304(){
  t0303.style.display = 'none';
  t0304.style.display = 'block';
  i=0;
  typeWriter0304();
}
function textbox0305(){
  t0304.style.display = 'none';
  t0305.style.display = 'block';
}

typeWriter0101();