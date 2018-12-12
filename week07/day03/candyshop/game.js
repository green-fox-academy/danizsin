const createcandy = document.querySelector('.create-candies');
const buylollypops = document.querySelector('.buy-lollypops');
const candymachine = document.querySelector('.candy-machine');
const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
let candyCount = 0;
let lollycount = 3;
let prodspeed = 0;
let timer;

const countProdSpeed = (lollies) => {
  prodspeed = lollies / 10;
}

const showCandiesAmount = () => {
  candies.innerText = candyCount;
}

document.body.addEventListener('click', () => {
  switch (event.target) {
    case createcandy:
      candyCount += 100;
      showCandiesAmount();
      break;

    case buylollypops:
      if (prodspeed > 0) {
        clearTimeout(timer);
      }
      if (candyCount > 99) {
        candyCount -= 100;
        lollycount++;
        showCandiesAmount();
        lollypops.innerText += '🍭';
        if (lollycount > 9) {
          timer = setInterval(() => {
            countProdSpeed(lollycount);
            candyCount += prodspeed;
            showCandiesAmount();
          }, 1000);
        }
      }
      break;

    case candymachine:
      countProdSpeed(lollycount);
      if (prodspeed > 0) {
        prodspeed *= 10;
        clearInterval(timer);
        timer = setInterval(() => {
          candyCount += prodspeed;
          showCandiesAmount();
        }, 1000);
      }
      break;
  }
});