const cardSlider = document.querySelector('.card-slider');
let cardWidth = document.querySelector('.card').offsetWidth;
let cardMargin = parseInt(window.getComputedStyle(document.querySelector('.card')).marginRight);
let currentPosition = 0;

function slideRight() {
  currentPosition -= cardWidth + cardMargin;
  if (currentPosition < -2 * cardWidth - 2 * cardMargin) {
    currentPosition = 0;
  }
  cardSlider.style.transform = `translateX(${currentPosition}px)`;
}

function slideLeft() {
  currentPosition += cardWidth + cardMargin;
  if (currentPosition > 0) {
    currentPosition = -2 * cardWidth - 2 * cardMargin;
  }
  cardSlider.style.transform = `translateX(${currentPosition}px)`;
}

setInterval(() => {
  slideRight();
}, 5000);
