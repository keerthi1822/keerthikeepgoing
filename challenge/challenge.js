const HYFImages = [
  "HYFgrouppic.jpg",
  "HYFgrouppic.jpg",
  "lucky.JPG",
  "HYFgrouppic.jpg",
  "HYFgrouppic.jpg",
  "lucky.JPG",
  "HYFgrouppic.jpg",
  "HYFgrouppic.jpg",
  "keerthi.JPG"
];
const body = document.querySelector("body");
let i = 0;

setInterval(() => {
  const img = document.createElement("img");
  //img.style.marginTop = "-800px";

 
  let style =  window.getComputedStyle(body);

console.log("Current marginTop: " + style.marginTop);
  let margin = Math.floor(Math.random() * 900);
  img.src = HYFImages[Math.floor(Math.random() * 9)];
  document.body.appendChild(img);
  img.style = `margin-left:${margin}px;transform : translateY(-1000px)`;

  setTimeout(() => {
    img.style = `margin-left:${margin}px;transform : translateY(1000px);`;
  }, 500);
  i++;
}, 3000);
