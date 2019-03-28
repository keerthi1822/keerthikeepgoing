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
  img.src = HYFImages[Math.floor(Math.random() * 9)];
  let margin = Math.floor(Math.random() * 900);
  console.log(margin);
  img.style = `margin-left:${margin}px;margin-bottom:400%;transform : translateY(-200px);`;
  document.body.appendChild(img);
  setTimeout(() => {
   // location.reload(true);
    img.style = `margin-left:${margin}px;transform : translateY(1200px);`;
  }, 500);
  i++;
 
}, 3000);
