'use strict';

//Cloud settings
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

//Colors
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var WHITE_COLOR = '#fff';
var BLACK_COLOR = '#000';

//Font settings
var FONT_CHARACTERISTIC = "16pt PT Mono";
var FONT_POSITION_X = 120;
var FONT_POSITION_TITLE_Y = 40;
var FONT_POSITION_SUBTITLE_Y = 70;

//Player settings
var playerName = 'Вы';
var playerColor = 'rgba(255, 0, 0, 1)';

//Statistic bar settings
var FONT_GAP = 50;
var STATISTIC_MAX_HEIGHT = 120;
var STATISTIC_WIDTH = 40;
var statisticHeight = CLOUD_HEIGHT - GAP - STATISTIC_MAX_HEIGHT - GAP;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var statisticColor = function (ctx, players) {
  if (players === playerName) {
    ctx.fillStyle = playerColor;
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
  }
};

window.renderStatistics = function(ctx, players, times) {
  var maxTime = getMaxElement(times);
  //Clouds
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, WHITE_COLOR);

  //Statistic text
  ctx.fillStyle = BLACK_COLOR;
  ctx.font = FONT_CHARACTERISTIC;
  ctx.fillText("Ура вы победили!", FONT_POSITION_X, FONT_POSITION_TITLE_Y);
  ctx.fillText("Список результатов:", FONT_POSITION_X, FONT_POSITION_SUBTITLE_Y);

  //Statistic bar
  for (var i = 0; i < players.length; i++) {
    statisticColor(ctx, players[i]);
    times[i] = Math.round(times[i]);
    var statisticPositionX = CLOUD_X + GAP + STATISTIC_WIDTH + (STATISTIC_WIDTH + FONT_GAP) * i;
    //Statistc rectangles
    ctx.fillRect(statisticPositionX, CLOUD_Y + GAP + CLOUD_HEIGHT - FONT_GAP - (statisticHeight * times[i]) / maxTime, STATISTIC_WIDTH, (statisticHeight * times[i]) / maxTime);

    //Statistc names and times
    ctx.fillStyle = BLACK_COLOR;
    ctx.fillText(players[i], statisticPositionX, CLOUD_HEIGHT + CLOUD_Y - 2 * GAP);
    ctx.fillText(times[i], statisticPositionX, CLOUD_Y + GAP + CLOUD_HEIGHT - FONT_GAP - (statisticHeight * times[i]) / maxTime - GAP);
  }
};
