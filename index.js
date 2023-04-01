var randomNumber1=Math.floor(Math.random()*6)+1;
var randdiceimg1="dice"+randomNumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute('src',randdiceimg1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randdiceimg2="dice"+randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randdiceimg2);

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player1 wins";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player2 wins";
else
document.querySelector("h1").innerHTML="Its A Draw";
