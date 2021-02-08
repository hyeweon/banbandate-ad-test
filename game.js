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
var b0306 = document.querySelector('.btn0306');
var b0401 = document.querySelector('.btn0401');
var b0501 = document.querySelector('.btn0501');
var b0601 = document.querySelector('.btn0601');
var t0201 = document.querySelector('.textbox0201');
var t0202 = document.querySelector('.textbox0202');
var t0301 = document.querySelector('.textbox0301');
var t0302 = document.querySelector('.textbox0302');
var t0303 = document.querySelector('.textbox0303');
var t0304 = document.querySelector('.textbox0304');
var t0305 = document.querySelector('.textbox0305');
var t0306 = document.querySelector('.textbox0306');
var t0401 = document.querySelector('.textbox0401');
var t0402 = document.querySelector('.textbox0402');

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
var x0306 = "그래 먼저 갈게 ~";
function typeWriter0306() {
  if (i < x0306.length) {
    document.getElementById("typing0306").innerHTML += x0306[i];
    i++;
    setTimeout(typeWriter0306, 80);
  }
  else{
    b0306.style.display = 'block';
  }
}

var x0401 = "오늘도 예쁘네";
function typeWriter0401() {
  if (i < x0401.length) {
    document.getElementById("typing0401").innerHTML += x0401[i];
    i++;
    setTimeout(typeWriter0401, 80);
  }
  else{
    b0401.style.display = 'block';
  }
}

var x0501 = "하여튼 느리다니까 ㅡㅡ";
function typeWriter0501() {
  if (i < x0501.length) {
    document.getElementById("typing0501").innerHTML += x0501[i];
    i++;
    setTimeout(typeWriter0501, 80);
  }
  else{
    i=0;
    typeWriter0502();
  }
}
var x0502 = "ㅁ..뭐 뭐!!";
function typeWriter0502() {
  if (i < x0502.length) {
    document.getElementById("typing0502").innerHTML += x0502[i];
    i++;
    setTimeout(typeWriter0502, 80);
  }
  else{
    b0501.style.display = 'block';
  }
}

var x0601 = "아~ 진짜 지루했어 ㅠ-ㅠ";
function typeWriter0601() {
  if (i < x0601.length) {
    document.getElementById("typing0601").innerHTML += x0601[i];
    i++;
    setTimeout(typeWriter0601, 80);
  }
  else{
    i=0;
    typeWriter0602();
  }
}
var x0602 = "드디어 오늘 수업 끝! 동방에나 가볼까?";
function typeWriter0602() {
  if (i < x0602.length) {
    document.getElementById("typing0602").innerHTML += x0602[i];
    i++;
    setTimeout(typeWriter0602, 80);
  }
  else{
    b0601.style.display = 'block';
  }
}

var x0701 = "나 지금 커피 사러 갈건데 같이 갈래?";
function typeWriter0701() {
  if (i < x0701.length) {
    document.getElementById("typing0701").innerHTML += x0701[i];
    i++;
    setTimeout(typeWriter0701, 80);
  }
  else{
    b0701.style.display = 'block';
  }
}

var x0801 = "누나 같이 게임할래요?";
function typeWriter0801() {
  if (i < x0801.length) {
    document.getElementById("typing0801").innerHTML += x0801[i];
    i++;
    setTimeout(typeWriter0801, 80);
  }
  else{
    b0801.style.display = 'block';
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
function scene04(){
  s03.style.display = 'none';
  s04.style.display = 'block';
  i=0;
  typeWriter0401();
}
function scene05(){
  s03.style.display = 'none';
  s05.style.display = 'block';
  i=0;
  typeWriter0501();
}
function scene06(){
  s04.style.display = 'none';
  s05.style.display = 'none';
  s06.style.display = 'block';
  i=0;
  typeWriter0601();
}
function scene07(){
  s06.style.display = 'none';
  s07.style.display = 'block';
  i=0;
  typeWriter0701();
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
function textbox0306(){
  t0305.style.display = 'none';
  t0306.style.display = 'block';
  i=0;
  typeWriter0306();
}
function textbox0402(){
  t0401.style.display = 'none';
  t0402.style.display = 'block';
}

typeWriter0101();