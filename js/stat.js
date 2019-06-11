'use strict';

// Cloud settings
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

// Colors
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var WHITE_COLOR = '#fff';
var BLACK_COLOR = '#000';

// Font settings
var FONT_CHARACTERISTIC = '16px PT Mono';
var FONT_POSITION_X = 120;
var FONT_POSITION_TITLE_Y = 40;
var FONT_POSITION_SUBTITLE_Y = 70;

// Player settings
var YOUR_NAME = 'Вы';
var YOUR_COLOR = 'rgba(255, 0, 0, 1)';

// Diagram settings
var FONT_GAP = 50;
var DIAGRAM_MAX_HEIGHT = 120;
var DIAGRAM_BAR_WIDTH = 40;
var diagramHeight = CLOUD_HEIGHT - GAP - DIAGRAM_MAX_HEIGHT - GAP;
var diagramPositionX = CLOUD_X + GAP + DIAGRAM_BAR_WIDTH;
var diagramPositionY = CLOUD_Y + GAP + CLOUD_HEIGHT - FONT_GAP;
var diagramBarWidth = DIAGRAM_BAR_WIDTH + FONT_GAP;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

var renderDiagramText = function (ctx, text, positionX, positionY) {
  ctx.fillStyle = BLACK_COLOR;
  ctx.font = FONT_CHARACTERISTIC;
  ctx.fillText(text, positionX, positionY);
};

var renderDiagramColor = function (ctx, names) {
  ctx.fillStyle = names === YOUR_NAME ? YOUR_COLOR : 'rgba(0, 0, 255, ' + Math.random() + ')';
};

var renderDiagramRectangle = function (ctx, color, positionX, positionY, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(positionX, positionY, width, height);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  // Clouds
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, WHITE_COLOR);

  // Diagram text
  renderDiagramText(ctx, 'Ура вы победили!', FONT_POSITION_X, FONT_POSITION_TITLE_Y);
  renderDiagramText(ctx, 'Список результатов:', FONT_POSITION_X, FONT_POSITION_SUBTITLE_Y);

  // Diagram bar
  for (var i = 0; i < names.length; i++) {
    var barX = diagramPositionX + diagramBarWidth * i;
    var barY = diagramPositionY - (diagramHeight * times[i]) / maxTime;

    // Diagram rectangles
    renderDiagramRectangle(ctx, renderDiagramColor(ctx, names[i]), barX, barY, DIAGRAM_BAR_WIDTH, (diagramHeight * times[i]) / maxTime);

    // Diagram names and times
    renderDiagramText(ctx, names[i], barX, CLOUD_HEIGHT + CLOUD_Y - 2 * GAP);
    renderDiagramText(ctx, Math.round(times[i]), barX, barY - GAP);
  }
};
