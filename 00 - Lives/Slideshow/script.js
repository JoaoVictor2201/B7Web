let totalSlides = document.querySelectorAll('.slider--item').length;
// let sliderDots = document.querySelector('.slider--dots');
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100% * ${totalSlides})`;
document.querySelector('.slider--controllers').style.height = `${document.querySelector('.slider').clientHeight}px`;

// for (var i = 0; i < totalSlides; i++) {
//   let li = document.createElement('li');
//   sliderDots.appendChild(li);
// }

console.log(sliderDots);

function goPrev() {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlide++;
  if(currentSlide > (totalSlides - 1)) {
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}