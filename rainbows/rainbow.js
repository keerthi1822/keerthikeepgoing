/* let x=Math.floor(Mathrandom()*1000);
let y=-100; */


/* c.width = window.innerWidth;
c.height = window.innerHeight; */
function rainbow(){
let i=0;
let rainbowInterval = setInterval(()=>{
let c = document.createElement("canvas");

let margin = Math.floor(Math.random() * 900);

let ctxV = c.getContext("2d");

ctxV.beginPath();
ctxV.arc( 150, 75, 50,Math.PI, 2 * Math.PI);
ctxV.lineWidth = 5;
ctxV.strokeStyle = "#EE82EE";
ctxV.stroke();
document.body.appendChild(c);
c.style = `margin-left:${margin}px;transform : translateY(-200px);`;

let ctxI = c.getContext("2d");
ctxI.beginPath();
ctxI.arc(150, 75, 45,Math.PI, 2 * Math.PI);
ctxI.lineWidth = 5;
ctxI.strokeStyle = "#4B0082";
ctxI.stroke();

let ctxB = c.getContext("2d");
ctxB.beginPath();
ctxB.arc(150, 75, 40,Math.PI, 2 * Math.PI);
ctxB.lineWidth = 5;
ctxB.strokeStyle = "#0000FF";
ctxB.stroke();

let ctxG = c.getContext("2d");
ctxG.beginPath();
ctxG.arc(150, 75, 35,Math.PI, 2 * Math.PI);
ctxG.lineWidth = 5;
ctxG.strokeStyle = "#008000";
ctxG.stroke();

let ctxY = c.getContext("2d");
ctxY.beginPath();
ctxY.arc(150, 75, 30, Math.PI, 2 * Math.PI);
ctxY.lineWidth = 5;
ctxY.strokeStyle = "#FFFF00";
ctxY.stroke();

let ctxO = c.getContext("2d");
ctxO.beginPath();
ctxO.arc(150, 75, 25,Math.PI, 2 * Math.PI);
ctxO.lineWidth = 5;
ctxO.strokeStyle = "#FFA500";
ctxO.stroke();

let ctxR = c.getContext("2d");
ctxR.beginPath();
ctxR.arc(150, 75, 20,Math.PI, 2 * Math.PI);
ctxR.lineWidth = 5;
ctxR.strokeStyle = "#FF0000";
ctxR.stroke();

     
setTimeout(()=>{
    c.style = `margin-left:${margin}px;transform : translateY(720px);`;
},1000)
i++;
if(i>10){
    clearInterval(rainbowInterval);
    translateImages();
}

},700);
}

 rainbow();

 function translateImages(){
    const HYFImages = [
        "marie.jpg",
        "marta.jpg",
        "lucky.JPG",
        "zaki.jpg",
        "abed.jpg",
        "christopher.jpg",
        "benjamin.jpg",
        "HYFgrouppic.jpg",
        "alicia.jpg",
        "younes.jpg"
      ];
      const body = document.querySelector("body");
      let i = 0;
      
      let imgInterval = setInterval(() => {
        const img = document.createElement("img");
        //img.style.marginTop = "-800px";
      
       
        let style =  window.getComputedStyle(body);
        let margin = Math.floor(Math.random() * 900);
        img.src = HYFImages[Math.floor(Math.random() * 10)];
        document.body.appendChild(img);
        img.style = `margin-left:${margin}px;transform : translateY(-1000px)`;
      
        setTimeout(() => {
          img.style = `margin-left:${margin}px;transform : translateY(1000px);`;
        }, 500);
        i++;
        if(i>2){
            clearInterval(imgInterval);
            rainbow();
        }
      }, 500);
 }
