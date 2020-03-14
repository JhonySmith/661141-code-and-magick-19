'use strict';

// Необходимые переменные
var setupBlock = document.querySelector('.setup');
var listElement = setupBlock.querySelector('.setup-similar-list');

var wizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

// Константы
var WIZARDS_COUNT = 4; // Число "похожих" магов

// функция отрисовки массива магов на странице
var successHandler = function (wizardsArr) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent =
      wizardsArr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill =
      wizardsArr[i].colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill =
      wizardsArr[i].colorEyes;

    fragment.appendChild(wizardElement);
  }

  listElement.appendChild(fragment);
};

var errorHandler = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
  node.style.position = 'absolute';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};

window.backend.load(successHandler, errorHandler);

// Выполнение программы
setupBlock.querySelector('.setup-similar').classList.remove('hidden');
