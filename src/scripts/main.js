document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const switcher = document.querySelector('.switch input');
  const firstSlideImg = document.querySelector('.slider__image--first');

  switcher.addEventListener('click', () => {
    wrapper.classList.toggle('wrapper--light');

    if (wrapper.classList.contains('wrapper--light')) {
      firstSlideImg.src = '/slide-img-4.956815a2.png';
    } else {
      firstSlideImg.src = '/slide-img-1.2dc52dfd.png';
    }
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Slider
const images = document.querySelectorAll(
  '.slider .slider__box .slider__line img'
);
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width;

function init() {
  // eslint-disable-next-line no-console
  console.log('resize');
  width = document.querySelector('.slider__box').offsetWidth;
  // eslint-disable-next-line no-console
  console.log(width);
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}
init();

window.addEventListener('resize', init);
init();

// eslint-disable-next-line max-len
document.querySelector('.slider__button--prev').addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

// eslint-disable-next-line max-len
document.querySelector('.slider__button--next').addEventListener('click', function() {
  count++;

  if (count > images.length - 1) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
