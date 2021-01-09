/**
 * Slider
 */
var dot = document.querySelectorAll('.main-slider-dot');

if (dot) {
  dot.forEach(function (el) {
    el.onclick = function () {
      if (!el.classList.contains('active')) {
        var id = el.getAttribute('id').slice(-1);
        var slide = document.getElementById('slide-' + id);
        var activeSlide = document.querySelector('.main-slider-item.active');
        var activeDot = document.querySelector('.main-slider-dot.active');

        activeSlide.classList.remove('active');
        activeDot.classList.remove('active');
        slide.classList.add('active');
        el.classList.add('active');
      }
    }
  });
}

/**
 * Callback Form
 */
var callButton = document.getElementById('call-us');
var callbackForm = document.getElementById('callback-form');
var closeForm = document.getElementById('callback-form-close');

callButton.onclick = function (e) {
  e.preventDefault();
  callbackForm.classList.add('active');
};
closeForm.onclick = function (e) {
  e.preventDefault();
  callbackForm.classList.remove('active');
};
