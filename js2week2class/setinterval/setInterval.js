
let i=1;
function clickButton1(){
    console.log("clicked");
        const clearIntervalId=setInterval(()=>{
            if(i<=10){
           let spanTag = document.querySelector("span");
            spanTag.innerHTML = i++;  
            }
            else
            clearInterval(clearIntervalId);        

        },1000)
}

document.querySelector("#button").addEventListener("click",clickButton1);