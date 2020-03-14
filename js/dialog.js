'use strict';

(function () {

  var setupBlock = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupBlock.querySelector('.setup-close');
  var userName = setupBlock.querySelector('input[name=username]');
  var setupBlockHandler = setupBlock.querySelector('.upload');

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

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
    setupBlock.style.top = '80px';
    setupBlock.style.left = '50%';
  };

  // функция закрытия окна настроек
  var closeSetupWindow = function () {
    setupBlock.classList.add('hidden');
    document.removeEventListener('keydown', onSetupWindowEscPress);
  };

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

  // отключение Esc при фокусе на вводе никнейма
  userName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onSetupWindowEscPress);
  });

  // возврат функции Esc при снятии фокуса на вводе никнейма
  userName.addEventListener('blur', function () {
    document.addEventListener('keydown', onSetupWindowEscPress);
  });

  // Обработка перетаскивания окна
  setupBlockHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.ClientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupBlock.style.top = (setupBlock.offsetTop - shift.y) + 'px';
      setupBlock.style.left = (setupBlock.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var OnClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          setupBlockHandler.removeEventListener('click', OnClickPreventDefault);
        };
        setupBlockHandler.addEventListener('click', OnClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // Отправка данных на сервер
  var form = setupBlock.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setupBlock.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
