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
