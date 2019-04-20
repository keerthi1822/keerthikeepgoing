const p = document.querySelector('p');

function music(){
    let a= new Audio("Love-Night.mp3");
        a.play();
}

function surprise() {
    console.log('in surprise function');
    p.style = 'opacity: 1;transform: scale(3.5);';
    music();
    return new Promise((resolve) => {
        console.log('in promise');
        // p.innerText="Happy 1st Anneversary";
       
        
        setTimeout(() => {
            resolve();
        }, 1000);
         

    })

}

surprise().then(() => {
    console.log('in then');
    translateImages();

});
surprise().catch((msg) => {
    console.log('in catch');
    alert(msg);
})

function translateImages() {

    const images = [
        "wedding.jpg",
        "calender.jpg",
        "sunnyday.jpg",
        "selfie.jpg",
        "crazy.jpg"
    ];
    const img = document.createElement("img");
    let i = 0;

    let imgInterval = setInterval(() => {
        img.style = 'transform : scale(1)';
        img.src = images[i];
        document.body.appendChild(img);
        i++;
        if (i == images.length) {
            clearInterval(imgInterval);
            img.parentNode.removeChild(img);
            setTimeout(() => {
                p.innerText = "Happy 1st Anniversary";
                let confettiSettings = {
                    target: 'confetti'
                };
                let confetti = new ConfettiGenerator(confettiSettings);
                confetti.render();
                
            }, 500);

        }
    }, 2000)






}



/* const HYFImages = [
    "holi.jpg",
    "holicolors.jpg"
  ];
  const body = document.querySelector("body");
  i = 0;
  

  let imgInterval = setInterval(() => {
      const img = document.createElement("img");
      //img.style.marginTop = "-800px";
      let imgRandom = Math.floor(Math.random() * 2);
      let x=Math.floor(Math.random() * 900);
      let y=Math.floor(Math.random() * 700);
     //console.log(x+' '+y);
     img.style = 'transform : scale(0)';
      img.src = HYFImages[imgRandom];
      document.body.appendChild(img);


      setTimeout(() => {

          img.style = `margin-left:${x}px;margin-top:${y}px;transform : scale(1);`;
         // img.style = `margin-left:0px;margin-top:0px;transform : scale(1);`;
        
      }, 900);
     
  }, 1000); */