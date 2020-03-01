'use strict';

(function () {
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var setupBlock = document.querySelector('.setup');
  var wizardCoat = setupBlock.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setupBlock.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setupBlock.querySelector('.setup-fireball-wrap');

  // смена цвета плаща по щелчку
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.randomizer(coatColors);
    document.querySelector('input[name=coat-color]').value = wizardCoat.style.fill;
  });

  // смена цвета глаз по щелчку
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.randomizer(eyesColors);
    document.querySelector('input[name=eyes-color]').value = wizardEyes.style.fill;
  });

  // смена цвета файрбола по щелчку
  wizardFireball.addEventListener('click', function () {
    document.querySelector('input[name=fireball-color]').value = window.randomizer(fireballColors);
    wizardFireball.style.background = document.querySelector('input[name=fireball-color]').value;
  });
})();
