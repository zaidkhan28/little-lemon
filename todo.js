const inputbox = document.getElementById('input-btn')
const list = document.getElementById("contener")


function handel(){
    if(inputbox.value==""){
        alert("Write something")
    }else{
    let Li = document.createElement("li")
    Li.innerHTML=inputbox.value;
    list.appendChild(Li)
    let span = document.createElement("span")
    span.innerHTML="\u00d7"
    Li.appendChild(span)
    }
inputbox.value="";
}

list.addEventListener("click",function(e){
   if(e.target.tagName==="LI"){
    e.target.classList.toggle("chick");
   } 
   else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
   }
 },false)