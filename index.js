var rand1 = Math.floor(Math.random() * 6)+1;
var rand2 = Math.floor(Math.random() * 6)+1;
var rimg= "dice"+rand1+".png";
var rimg2= "dice"+rand2+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",rimg);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",rimg2);
if(rand1 > rand2)
{
  document.querySelector("h1").innerHTML='Player 1 Wins!'
}
if(rand1<rand2)
{
  document.querySelector("h1").innerHTML='Player 2 Wins!'
}
if(rand1 == rand2)
{
  document.querySelector("h1").innerHTML='DRAW!'
}
