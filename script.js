let coinNode = document.querySelector(".coin");
let throwNode = document.querySelector(".throw");
let orelNode = document.querySelector(".orel");
let reshkaNode = document.querySelector(".reshka");

let counterThrow = 1;
let counterOrel = 0;
let counterReshka = 0;

let images = ["./images/orel.png", "./images/reshka.png"];
let index = 0;
let counterImg = 0;

let sound = new Howl({
  src: ["./coin.mp3"],
  loop: true,
  volume: 0.5,
});

function changeImage() {
  coinNode.setAttribute("src", images[index])
  index++;
  if(index >= images.length)
  {
    index=0;
  }
}
function game() {
  let randomCounter = Math.ceil(Math.random() * 20);
  const img = setInterval(() => {
    counterImg ++;
    changeImage();
    sound.play();
    if (counterImg === randomCounter) {
      clearInterval(img);
      sound.stop();
      counterThrow ++;
      console.log(coinNode.src);
      if (coinNode.src.includes("orel.png")) {
        counterOrel++;
        orelNode.textContent = counterOrel;
        console.log(counterOrel);
      } else {
        counterReshka++;
        console.log(counterReshka);
        reshkaNode.textContent = counterReshka;
      }
    }
  }, 100);
  counterImg = 0;
  throwNode.textContent = counterThrow;
}

coinNode.addEventListener("click", game);