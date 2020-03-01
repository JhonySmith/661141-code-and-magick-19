'use strict';

(function () {
  window.randomizer = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

})();
