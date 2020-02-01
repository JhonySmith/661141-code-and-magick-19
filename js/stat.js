'use strict';

var LEADERBOARD_WIDTH = 420;
var LEADERBOARD_HEIGHT = 270;
var LEADERBOARD_POS_X = 100;
var LEADERBOARD_POS_Y = 10;
var SHADOWS = 10;
var GIST_WIDTH = 40;
var GIST_MAX_HEIGHT = 150;
var gridStepX = 50;
var gridColors = ['red', 'green', 'yellow', 'orange'];


var renderLeaderboard = function (ctx, x, y, color) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x, y, LEADERBOARD_WIDTH + SHADOWS, LEADERBOARD_HEIGHT + SHADOWS);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, LEADERBOARD_WIDTH, LEADERBOARD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  renderLeaderboard(ctx, LEADERBOARD_POS_X, LEADERBOARD_POS_Y, '#fff');
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', LEADERBOARD_POS_X + 20, LEADERBOARD_POS_Y + 30);
  ctx.fillText('Список результатов:', LEADERBOARD_POS_X + 20, LEADERBOARD_POS_Y + 50);

  for (var i = 0; i < players.length; i++) {
    var maxGist = times[i] / maxTime;
    var color;

    if (players[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      color = 'hsla(240, 100%, 50%,' + Math.random() + ')';
    }

    ctx.fillStyle = 'black';
    ctx.fillText(Math.ceil(times[i]), LEADERBOARD_POS_X + gridStepX + (gridStepX + GIST_WIDTH) * i, LEADERBOARD_POS_Y + 80 + GIST_MAX_HEIGHT * (1 - maxGist));
    ctx.fillStyle = color;
    ctx.fillRect(LEADERBOARD_POS_X + gridStepX + (gridStepX + GIST_WIDTH) * i, LEADERBOARD_POS_Y + 90 + GIST_MAX_HEIGHT * (1 - maxGist), GIST_WIDTH, GIST_MAX_HEIGHT * maxGist);
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], LEADERBOARD_POS_X + gridStepX + (gridStepX + GIST_WIDTH) * i, LEADERBOARD_POS_Y + 90 + GIST_MAX_HEIGHT + 15);
  };
};
