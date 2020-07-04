var but=document.querySelectorAll(".pink");
var r=document.querySelector("#red");

var colors=[];
function ansGenerator(num)
{
return colors[Math.floor(Math.random()*(num))]; 
 }
 
 function colorGenerator(num) {
for(var i=0;i<num;i++)
{
var rv =Math.floor(Math.random() *256); 
var gv =Math.floor(Math.random() *256); 
var bv =Math.floor(Math.random() *256); 
	colors[i]="rgb(" + rv + ", " + gv + ", " + bv + ")"; 
} }
function colorAdder(num) { 
for(var i=0;i<num;i++)
{
but[i].style.background=colors[i];
but[i].addEventListener("click",function(){
				if(this.style.background==ans)
				{
                   for(var i=0;i<num;i++)
			       {
			       	but[i].style.background=ans;
                    }
                    document.querySelector("#ansd").textContent="correct";
				}
				else
				{
					this.style.background="black";
					document.querySelector("#ansd").textContent="try again";
				}	
			
		})
	}
}
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var ns=6;
easy.addEventListener("click",function(){
ns=3;
this.style.background="darkgreen";
hard.style.background="#28a745";
colorGenerator(ns);
 ans=ansGenerator(ns);
 r.textContent=ans;
 document.querySelector("#ansd").textContent="";
 for(var i=0;i<6;i++)
 {
 	if(i<ns) {
 	but[i].style.background=colors[i]; }
 	else  {
 		but[i].classList.add("d-none");
 	}
 }

})
hard.addEventListener("click",function(){
colorGenerator(6);
 ans=ansGenerator(6);
 r.textContent=ans; ns=6;
 this.style.background="darkgreen";
easy.style.background="#28a745";
document.querySelector("#ansd").textContent="";
 for(var i=0;i<6;i++)
 {
 	but[i].classList.remove("d-none");
 	but[i].style.background=colors[i];
 }	
})

var n = document.querySelector("#nwe");
n.addEventListener("click",function(){
	colorGenerator(6);
 ans=ansGenerator(6);
 r.textContent=ans;
 document.querySelector("#ansd").textContent="";
 for(var i=0;i<6;i++)
 {
 	but[i].classList.remove("d-none");
 	but[i].style.background=colors[i];
 }
})

colorGenerator(ns);
var ans=ansGenerator(ns);
r.textContent=ans;
colorAdder(ns);