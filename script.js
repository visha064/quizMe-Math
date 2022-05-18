let count = 1;
let correct=0;
let no=0;
let marks =0;
let ques=["If X=1 and Y=2 then Z equals if Z=X+Y ","What is the LCM of 12 and 15","what is the the HCF of 12 and 15","what is the Square root of 9","What is the Cube root of 8"];
let options=[[3,1,5,6],[12,60,50,64],[5,3,6,7],[2,4,5,3],[2,1,4,3],[]];
let key=[3,60,3,3,2];
document.querySelector(".question").textContent="Question"+count+" : "+ques[no];
count++;
for(let i=0;i<4;i++){
    document.querySelector(".op"+(i+1)).textContent=options[no][i];
}
const opt = document.querySelectorAll(".op");
function nxtQues(){
    if(count == 6){
        document.querySelector(".paper").innerHTML="your score <br> "+marks+"/5";
        return;
    }
    no++;
    document.querySelector(".question").textContent="Question"+count+" : "+ques[no];
    document.querySelector(".score span").textContent=marks;
    count++;
        for(let i=0;i<4;i++){
            document.querySelector(".op"+(i+1)).textContent=options[no][i];
        }
}
function right(k){
    
    k.style.backgroundImage= "url('glitter.gif')";
    document.querySelector(".answer").style.backgroundImage= "url('glitter.gif')";
    document.querySelector(".answer").style.color="yellow";
    document.querySelector(".answer").textContent="Correct Answer"+" : "+(correct>1?correct>2?"Excellent":"bravo":"good");
  setTimeout(function(){
   nxtQues();
   k.style.backgroundImage= "";
   document.querySelector(".answer").style.backgroundImage= "";
   k.style.backgroundColor="lightblue";
   document.querySelector(".answer").style.backgroundColor="white";
    document.querySelector(".answer").textContent="";
  },2000);
  

}
function wrong(k){
    // k.
    k.style.backgroundColor="red";
    document.querySelector(".answer").textContent="Wrong Answer";
    document.querySelector(".answer").style.backgroundColor="red";
    document.querySelector(".answer").classList.add("glow");
    setTimeout(function(){
      
        nxtQues();
        document.querySelector(".answer").classList.remove("glow");
        k.style.backgroundColor="lightblue";
        document.querySelector(".answer").style.backgroundColor="white";
    document.querySelector(".answer").textContent="";
       },2000);
}
for (let j=0;j<opt.length;j++){
    opt[j].addEventListener("click",function(evt){
        if(options[no][j]==key[no]){
            console.log(true);
            marks++;
            correct++;
            right(opt[j]);

        }else{
            correct=0;
            console.log(false);
            wrong(opt[j]);
        }
        
    });
}


