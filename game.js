var s01 = document.querySelector('.scene01');
var s02 = document.querySelector('.scene02');
var s03 = document.querySelector('.scene03');
var s04 = document.querySelector('.scene04');
var s05 = document.querySelector('.scene05');
var s06 = document.querySelector('.scene06');
var s07 = document.querySelector('.scene07');
var s08 = document.querySelector('.scene08');
var s09 = document.querySelector('.scene09');
var s10 = document.querySelector('.scene10');
var s11 = document.querySelector('.scene11');
var s12 = document.querySelector('.scene12');
var s13 = document.querySelector('.scene13');
var s14 = document.querySelector('.scene14');
var s15 = document.querySelector('.scene15');
var s16 = document.querySelector('.scene16');
var s17 = document.querySelector('.scene17');

var b0101 = document.querySelector('.btn0101');
var b0201 = document.querySelector('.btn0201');
var b0301 = document.querySelector('.btn0301');
var b0304 = document.querySelector('.btn0304');
var b0306 = document.querySelector('.btn0306');
var b0401 = document.querySelector('.btn0401');
var b0501 = document.querySelector('.btn0501');
var b0502 = document.querySelector('.btn0502');
var b0601 = document.querySelector('.btn0601');
var b0701 = document.querySelector('.btn0701');
var b0801 = document.querySelector('.btn0801');
var b1001 = document.querySelector('.btn1001');
var b1002 = document.querySelector('.btn1002');
var b1101 = document.querySelector('.btn1101');
var b1104 = document.querySelector('.btn1104');
var b1201 = document.querySelector('.btn1201');
var b1301 = document.querySelector('.btn1301');
var b1401 = document.querySelector('.btn1401');
var b1402 = document.querySelector('.btn1402');
var b1601 = document.querySelector('.btn1601');
var b1604 = document.querySelector('.btn1604');
var b1701 = document.querySelector('.btn1701');
var b1702 = document.querySelector('.btn1702');

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
var t0501 = document.querySelector('.textbox0501');
var t0502 = document.querySelector('.textbox0502');
var t1001 = document.querySelector('.textbox1001');
var t1002 = document.querySelector('.textbox1002');
var t1101 = document.querySelector('.textbox1101');
var t1102 = document.querySelector('.textbox1102');
var t1103 = document.querySelector('.textbox1103');
var t1201 = document.querySelector('.textbox1201');
var t1301 = document.querySelector('.textbox1301');
var t1401 = document.querySelector('.textbox1401');
var t1402 = document.querySelector('.textbox1402');
var t1601 = document.querySelector('.textbox1601');
var t1602 = document.querySelector('.textbox1602');
var t1603 = document.querySelector('.textbox1603');
var t1701 = document.querySelector('.textbox1701');
var t1702 = document.querySelector('.textbox1702');

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

var x0301 = "빵빵 -        ";
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

var x0501 = "하여튼 느리다니까 ㅡㅡ   ";
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
var x0503 = "귀여우면 다냐?";
function typeWriter0503() {
  if (i < x0503.length) {
    document.getElementById("typing0503").innerHTML += x0503[i];
    i++;
    setTimeout(typeWriter0503, 80);
  }
  else{
    i=0;
    typeWriter0504();
  }
}
var x0504 = "가방이나 내놔.";
function typeWriter0504() {
  if (i < x0504.length) {
    document.getElementById("typing0504").innerHTML += x0504[i];
    i++;
    setTimeout(typeWriter0504, 80);
  }
  else{
    b0502.style.display = 'block';
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

var x1001 = "와 여기 커피향 진짜 좋아요ㅎㅎ";
function typeWriter1001() {
  if (i < x1001.length) {
    document.getElementById("typing1001").innerHTML += x1001[i];
    i++;
    setTimeout(typeWriter1001, 80);
  }
  else{
    b1001.style.display = 'block';
  }
}
var x1002 = "귀여워ㅎㅎ";
function typeWriter1002() {
  if (i < x1002.length) {
    document.getElementById("typing1002").innerHTML += x1002[i];
    i++;
    setTimeout(typeWriter1002, 80);
  }
  else{
    i=0;
    typeWriter1003();
  }
}
var x1003 = "다음에 또 사줄게";
function typeWriter1003() {
  if (i < x1003.length) {
    document.getElementById("typing1003").innerHTML += x1003[i];
    i++;
    setTimeout(typeWriter1003, 80);
  }
  else{
    b1002.style.display = 'block';
  }
}

var x1101 = "헉 누나 게임 왜 이렇게 잘해요?ㅠㅠ";
function typeWriter1101() {
  if (i < x1101.length) {
    document.getElementById("typing1101").innerHTML += x1101[i];
    i++;
    setTimeout(typeWriter1101, 80);
  }
  else{
    b1101.style.display = 'block';
  }
}
var x1102 = "아이.. 한판만 더 해봐요!";
function typeWriter1102() {
  if (i < x1102.length) {
    document.getElementById("typing1102").innerHTML += x1102[i];
    i++;
    setTimeout(typeWriter1102, 80);
  }
  else{
    b1104.style.display = 'block';
  }
}

var x1201 = "벌써 점심 먹을 시간이네..";
function typeWriter1201() {
  if (i < x1201.length) {
    document.getElementById("typing1201").innerHTML += x1201[i];
    i++;
    setTimeout(typeWriter1201, 80);
  }
  else{
    b1201.style.display = 'block';
  }
}

var x1301 = "야! 오늘은 뭐 먹을까?";
function typeWriter1301() {
  if (i < x1301.length) {
    document.getElementById("typing1301").innerHTML += x1301[i];
    i++;
    setTimeout(typeWriter1301, 80);
  }
  else{
    i=0;
    typeWriter1302();
  }
}
var x1302 = "음..";
function typeWriter1302() {
  if (i < x1302.length) {
    document.getElementById("typing1302").innerHTML += x1302[i];
    i++;
    setTimeout(typeWriter1302, 80);
  }
  else{
    b1301.style.display = 'block';
  }
}

var x1401 = "누나 저번에 밥 같이 먹기로 했잖아요   ";
function typeWriter1401() {
  if (i < x1401.length) {
    document.getElementById("typing1401").innerHTML += x1401[i];
    i++;
    setTimeout(typeWriter1401, 80);
  }
  else{
    i=0;
    typeWriter1402();
  }
}
var x1402 = "어? 그랬지~";
function typeWriter1402() {
  if (i < x1402.length) {
    document.getElementById("typing1402").innerHTML += x1402[i];
    i++;
    setTimeout(typeWriter1402, 80);
  }
  else{
    b1401.style.display = 'block';
  }
}
var x1403 = "오늘 같이 먹어요!";
function typeWriter1403() {
  if (i < x1403.length) {
    document.getElementById("typing1403").innerHTML += x1403[i];
    i++;
    setTimeout(typeWriter1403, 80);
  }
  else{
    b1402.style.display = 'block';
  }
}

var x1601 = "일단 당면이랑 치즈";
function typeWriter1601() {
  if (i < x1601.length) {
    document.getElementById("typing1601").innerHTML += x1601[i];
    i++;
    setTimeout(typeWriter1601, 80);
  }
  else{
    i=0;
    typeWriter1602();
  }
}
var x1602 = "그리고 또 뭐 넣을까?";
function typeWriter1602() {
  if (i < x1602.length) {
    document.getElementById("typing1602").innerHTML += x1602[i];
    i++;
    setTimeout(typeWriter1602, 80);
  }
  else{
    b1601.style.display = 'block';
  }
}
var x1603 = "콜 ㅋㅋ";
function typeWriter1603() {
  if (i < x1603.length) {
    document.getElementById("typing1603").innerHTML += x1603[i];
    i++;
    setTimeout(typeWriter1603, 80);
  }
  else{
    b1604.style.display = 'block';
  }
}

var x1701 = "아~ 배부르다~~   ";
function typeWriter1701() {
  if (i < x1701.length) {
    document.getElementById("typing1701").innerHTML += x1701[i];
    i++;
    setTimeout(typeWriter1701, 80);
  }
  else{
    i=0;
    typeWriter1702();
  }
}
var x1702 = "그래?";
function typeWriter1702() {
  if (i < x1702.length) {
    document.getElementById("typing1702").innerHTML += x1702[i];
    i++;
    setTimeout(typeWriter1702, 80);
  }
  else{
    i=0;
    typeWriter1703();
  }
}
var x1703 = "볶음밥까지 먹고 싶었는데 아쉽네ㅠ";
function typeWriter1703() {
  if (i < x1703.length) {
    document.getElementById("typing1703").innerHTML += x1703[i];
    i++;
    setTimeout(typeWriter1703, 80);
  }
  else{
    b1701.style.display = 'block';
  }
}
var x1704 = "무슨 소리예요!";
function typeWriter1704() {
  if (i < x1704.length) {
    document.getElementById("typing1704").innerHTML += x1704[i];
    i++;
    setTimeout(typeWriter1704, 80);
  }
  else{
    i=0;
    typeWriter1705();
  }
}
var x1705 = "볶음밥 배는 따로 있잖아요.   ";
function typeWriter1705() {
  if (i < x1705.length) {
    document.getElementById("typing1705").innerHTML += x1705[i];
    i++;
    setTimeout(typeWriter1705, 80);
  }
  else{
    i=0;
    typeWriter1706();
  }
}
var x1706 = "맞지 맞지 ~~";
function typeWriter1706() {
  if (i < x1706.length) {
    document.getElementById("typing1706").innerHTML += x1706[i];
    i++;
    setTimeout(typeWriter1706, 80);
  }
  else{
    b1702.style.display = 'block';
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
function scene08(){
  s07.style.display = 'none';
  s08.style.display = 'block';
  i=0;
  typeWriter0801();
}
function scene09(){
  s08.style.display = 'none';
  s09.style.display = 'block';
}
function scene10(){
  s09.style.display = 'none';
  s10.style.display = 'block';
  i=0;
  typeWriter1001();
}
function scene11(){
  s09.style.display = 'none';
  s11.style.display = 'block';
  i=0;
  typeWriter1101();
}
function scene12(){
  s10.style.display = 'none';
  s11.style.display = 'none';
  s12.style.display = 'block';
  i=0;
  typeWriter1201();
}
function scene13(){
  s12.style.display = 'none';
  s13.style.display = 'block';
  i=0;
  typeWriter1301();
}
function scene14(){
  s13.style.display = 'none';
  s14.style.display = 'block';
  i=0;
  typeWriter1401();
}
function scene15(){
  s14.style.display = 'none';
  s15.style.display = 'block';
}
function scene16(){
  s15.style.display = 'none';
  s16.style.display = 'block';
  i=0;
  typeWriter1601();
}
function scene17(){
  s15.style.display = 'none';
  s17.style.display = 'block';
  i=0;
  typeWriter1701();
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
function textbox0502(){
  t0501.style.display = 'none'; 
  t0502.style.display = 'block';
  i=0;
  typeWriter0503();
}
function textbox1002(){
  t1001.style.display = 'none'; 
  t1002.style.display = 'block';
  i=0;
  typeWriter1002();
}
function textbox1102(){
  t1101.style.display = 'none'; 
  t1102.style.display = 'block';
}
function textbox1103(){
  t1102.style.display = 'none'; 
  t1103.style.display = 'block';
  i=0;
  typeWriter1102();
}
function textbox1402(){
  t1401.style.display = 'none'; 
  t1402.style.display = 'block';
  i=0;
  typeWriter1403();
}
function textbox1602(){
  t1601.style.display = 'none'; 
  t1602.style.display = 'block';
}
function textbox1603(){
  t1602.style.display = 'none'; 
  t1603.style.display = 'block';
  i=0;
  typeWriter1603();
}
function textbox1702(){
  t1701.style.display = 'none'; 
  t1702.style.display = 'block';
  i=0;
  typeWriter1704();
}

typeWriter0101();