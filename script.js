//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentStep = 1;

nextButton.addEventListener('click', () => {
  if (currentStep < circles.length) {
    circles[currentStep].classList.add('active');
    currentStep++;
    prevButton.disabled = false;
  }
  if (currentStep === circles.length) {
    nextButton.disabled = true;
  }
});

prevButton.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    circles[currentStep].classList.remove('active');
    nextButton.disabled = false;
  }
  if (currentStep === 1) {
    prevButton.disabled = true;
  }
});