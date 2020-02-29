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

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

// Необходимые переменные

var setupBlock = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupBlock.querySelector('.setup-close');
var wizardCoat = setupBlock.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setupBlock.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setupBlock.querySelector('.setup-fireball-wrap');

var listElement = setupBlock.querySelector('.setup-similar-list');

var wizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

// Константы
var WIZARDS_COUNT = 4; // Число "похожих" магов
// значение клавишей:
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

// Функции

// функция получения случайного элемента массива
var arrayRandElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

// функция создания массива магов
var makeWizardsArr = function (wizardsNumber) {
  var clearArr = [];
  for (var i = 0; i < wizardsNumber; i++) {
    clearArr[i] = {
      name: arrayRandElement(names) + ' ' + arrayRandElement(secondNames),
      coatColor: arrayRandElement(coatColors),
      eyesColor: arrayRandElement(eyesColors)
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

// отключение Esc при фокусе на вводе никнейма
var userName = document.querySelector('input[name=username]');

userName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onSetupWindowEscPress);
});

userName.addEventListener('blur', function () {
  document.addEventListener('keydown', onSetupWindowEscPress);
});

// функция закрытия окна кнпкой Esc
var onSetupWindowEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeSetupWindow();
  }
};

// функция открытия окна настроек
var openSetupWindow = function () {
  setupBlock.classList.remove('hidden');
  document.addEventListener('keydown', onSetupWindowEscPress);
};

// функция закрытия окна настроек
var closeSetupWindow = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onSetupWindowEscPress);
};

// Выполнение программы

// открытие окна настроек по щелчку на икноку
setupOpen.addEventListener('click', openSetupWindow);

// открытие окна по нажатию Enter на икноку в фокусе
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openSetupWindow();
  }
});

// закрытие окна настроек по щелчку на крестик
setupClose.addEventListener('click', closeSetupWindow);

// закрытие окна настроек по нажатию клавиши Esc
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeSetupWindow();
  }
});

// смена цвета плаща по щелчку
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = arrayRandElement(coatColors);
  document.querySelector('input[name=coat-color]').value = wizardCoat.style.fill;
});

// смена цвета глаз по щелчку
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = arrayRandElement(eyesColors);
  document.querySelector('input[name=eyes-color]').value = wizardEyes.style.fill;
});

// смена цвета файрбола по щелчку
wizardFireball.addEventListener('click', function () {
  document.querySelector('input[name=fireball-color]').value = arrayRandElement(fireballColors);
  wizardFireball.style.background = document.querySelector('input[name=fireball-color]').value;
});

setupBlock.querySelector('.setup-similar').classList.remove('hidden');

var wizards = makeWizardsArr(WIZARDS_COUNT);
makeWizardsElements(wizards);
