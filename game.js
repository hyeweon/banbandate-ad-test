window.onload = function(){
    var canvas = document.getElementById("canvas");
    if(canvas.getContext){
        var draw = canvas.getContext("2d");
        
        var img = new Image();
        img.src = "testimage.jpg";
        img.onload = function(){
            //drawImage(이미지, x, y, 가로, 세로,
            draw.drawImage(img, 0,0, 360, 640);
        }
    }

    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true;
        var tyInt = setInterval(typing,100); // 반복동작 
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     }
}