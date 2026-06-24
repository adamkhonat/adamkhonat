(function () {
  'use strict';

  function typeWriter(el, text, speed) {
    el.textContent = '';
    var i = 0;

    function step() {
      el.textContent = text.slice(0, i);
      if (i++ <= text.length) {
        setTimeout(step, speed);
      }
    }

    step();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var heading = document.querySelector('#intro h1');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (heading && !reduceMotion) {
      typeWriter(heading, heading.textContent, 80);
    }

    var year = document.getElementById('year');
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  });
})();
