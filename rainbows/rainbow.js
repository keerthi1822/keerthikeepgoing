/* let x=Math.floor(Mathrandom()*1000); */

const body = document.querySelector("body");
let count=0;
let i = 0;
/* c.width = window.innerWidth;
c.height = window.innerHeight; */
function rainbow() {
  
    let rainbowInterval = setInterval(() => {
      let c = document.createElement("canvas");

      let margin = Math.floor(Math.random() * 900);

      let ctxV = c.getContext("2d");

      ctxV.beginPath();
      ctxV.arc(150, 75, 50, Math.PI, 2 * Math.PI);
      ctxV.lineWidth = 5;
      ctxV.strokeStyle = "#EE82EE";
      ctxV.stroke();
      document.body.appendChild(c);
      c.style = `margin-left:${margin}px;transform : translateY(-500px);`;

      let ctxI = c.getContext("2d");
      ctxI.beginPath();
      ctxI.arc(150, 75, 45, Math.PI, 2 * Math.PI);
      ctxI.lineWidth = 5;
      ctxI.strokeStyle = "#4B0082";
      ctxI.stroke();

      let ctxB = c.getContext("2d");
      ctxB.beginPath();
      ctxB.arc(150, 75, 40, Math.PI, 2 * Math.PI);
      ctxB.lineWidth = 5;
      ctxB.strokeStyle = "#0000FF";
      ctxB.stroke();

      let ctxG = c.getContext("2d");
      ctxG.beginPath();
      ctxG.arc(150, 75, 35, Math.PI, 2 * Math.PI);
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
      ctxO.arc(150, 75, 25, Math.PI, 2 * Math.PI);
      ctxO.lineWidth = 5;
      ctxO.strokeStyle = "#FFA500";
      ctxO.stroke();

      let ctxR = c.getContext("2d");
      ctxR.beginPath();
      ctxR.arc(150, 75, 20, Math.PI, 2 * Math.PI);
      ctxR.lineWidth = 5;
      ctxR.strokeStyle = "#FF0000";
      ctxR.stroke();

      setTimeout(() => {
        c.style = `margin-left:${margin}px;transform : translateY(720px);`;
      }, 900);  
      i++;
      if(i === 9){
        body.style = `background-image:url('nowruz7.jpg');background-size:cover;
        height:100%;width:100%;`;
        body.innerHTML = ` <div id="image">
        <p id="nowruz" style = "float:right;">Happy <br> NowRuz </p>`;
      }
      if(i === 16){
        body.style = `background-image:url('holicolors.jpg');`;
        body.innerHTML = ` <div id="image" >
        <p id="and">
        AND <br> Happy Holi
      </p>
      </div>`;
      }
      if(i === 23){
         body.style = `background-image:url('holiHYF.jpg');`;
        body.innerHTML = ` <div id="image">
        <p id="thanks">Thanks!!</p>
      </div>`;
      /*  c.style.visibility="hidden"; */
      }
  }, 900);

}

function translateRainbows() {
  return new Promise((resolve) => {
       resolve();
  });

  /* else{
    reject(error);
  } */
}

translateRainbows()
.then(()=>rainbow());




