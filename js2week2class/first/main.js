
function clickButton1(){
    console.log("clicked");
    setTimeout(() => {
       const spanTag = document.querySelector("span");
       spanTag.innerHTML = "after 2 seconds";

    },2000)
    
}

document.querySelector("#button").addEventListener("click",clickButton1);