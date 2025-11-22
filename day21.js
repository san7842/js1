document.getElementById("btn1").addEventListener("click",myBmr);
function myBmr(){
   let a=Number(document.getElementById("no1").value);
   let b=Number(document.getElementById("no2").value);
   let c=Number(document.getElementById("no3").value);
   let add=((10*a)+(6.25*b)-(5*c)+5);
   document.getElementById("ans").innerHTML="MyBMR:"+add;
}