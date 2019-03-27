const divFromJs = document.createElement('div');
divFromJs.innerHTML="from Js file";
divFromJs.setAttribute("id",'fromJS');
document.body.appendChild(divFromJs);
divFromJs.style.backgroundColor = 'red';


const changeText = document.createElement("button");
changeText.innerText = "clickme";
document.body.appendChild(changeText);
changeText.addEventListener("click", ()=>{
document.querySelector("#fromJS").innerHTML="button is clicked"
})



const text1 = document.createElement("input");
document.body.appendChild(text1);

const bt1 = document.createElement("button");
bt1.innerText = "check age";
document.body.appendChild(bt1);



const para= document.createElement("p");
para.innerText = "";
document.body.appendChild(para);



bt1.addEventListener("mouseover",()=>{
    const age= document.querySelector("input").value;
    if(age>18){
        document.querySelector("p").innerHTML="you r eligible";
    }
    else{
        document.querySelector("p").innerHTML="sorry,you r not eligible"
    }
})




