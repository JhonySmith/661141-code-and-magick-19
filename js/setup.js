'use strict';

//  Массивы данных
var names = [
  'Иван',
  'Хуан Себастьян',
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

// Необходимые переменные

var setupBlock = document.querySelector('.setup');
var listElement = setupBlock.querySelector('.setup-similar-list');

var wizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

// Константы
var WIZARDS_COUNT = 4; // Число "похожих" магов
// Функции

// функция получения случайного элемента массива


// функция создания массива магов
var makeWizardsArr = function (wizardsNumber) {
  var clearArr = [];
  for (var i = 0; i < wizardsNumber; i++) {
    clearArr[i] = {
      name: window.randomizer(names) + ' ' + window.randomizer(secondNames),
      coatColor: window.randomizer(coatColors),
      eyesColor: window.randomizer(eyesColors)
    };
  }

  return clearArr;
};

// функция отрисовки массива магов на странице
var makeWizardsElements = function (wizardsArr) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsArr.length; i++) {
    var wizardElement = wizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent =
      wizardsArr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill =
      wizardsArr[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill =
      wizardsArr[i].eyesColor;

    fragment.appendChild(wizardElement);
  }

  listElement.appendChild(fragment);
};

// Выполнение программы
setupBlock.querySelector('.setup-similar').classList.remove('hidden');

var wizards = makeWizardsArr(WIZARDS_COUNT);
makeWizardsElements(wizards);
