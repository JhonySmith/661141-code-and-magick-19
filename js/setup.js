'use strict';

var names = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var secondNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
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

var wizards = [];

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

var listElement = setupBlock.querySelector('.setup-similar-list');

var arrayRandElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: arrayRandElement(names) + ' ' + arrayRandElement(secondNames),
    coatColor: arrayRandElement(coatColors),
    eyesColor: arrayRandElement(eyesColors)
  };
}

var wizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

listElement.appendChild(fragment);

setupBlock.querySelector('.setup-similar').classList.remove('hidden');
