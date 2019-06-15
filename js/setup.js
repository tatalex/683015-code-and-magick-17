'use strict';

// removes classes .hidden
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');


var CHARACTER_AMOUNT = 4;
var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// creates characters
var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomElementFromArray = function (array) {
  return array[getRandomInRange(0, array.length - 1)];
};

var createCharacters = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    var wizardParameters = {
      name: getRandomElementFromArray(NAMES) + ' ' + getRandomElementFromArray(SURNAMES),
      coatColor: getRandomElementFromArray(COAT_COLORS),
      eyesColor: getRandomElementFromArray(EYES_COLORS)
    };
    wizards.push(wizardParameters);
  }
  return wizards;
};

var characterOfWizards = createCharacters(CHARACTER_AMOUNT);
