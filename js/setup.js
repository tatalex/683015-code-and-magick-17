'use strict';

var CHARACTERS_AMOUNT = 4;
var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');


var form = document.querySelector('.setup-wizard-form');
var userName = form.querySelector('.setup-user-name');

var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var inputCoat = setup.querySelector('input[name="coat-color"]');
var inputEyes = setup.querySelector('input[name="eyes-color"]');
var setupFireball = setup.querySelector('.setup-fireball-wrap');
var inputFireball = setupFireball.querySelector('input[name="fireball-color"]');

var similarListElement = document.querySelector('.setup-similar-list');

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

// renders character
var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var characterWizard = similarWizardTemplate.cloneNode(true);
  characterWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  characterWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  characterWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return characterWizard;
};

// adds characters to the table
var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  var characterOfWizards = createCharacters(CHARACTERS_AMOUNT);

  for (var i = 0; i < characterOfWizards.length; i++) {
    fragment.appendChild(renderWizard(characterOfWizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(renderWizards());

// removes classes .hidden
document.querySelector('.setup-similar').classList.remove('hidden');


// configures opening and closing of the settings window
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && userName !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// changes colors
var onElementFillClick = function (colorArray, element, input) {
  var elementColor = getRandomElementFromArray(colorArray);

  element.style.fill = elementColor;
  input.value = elementColor;
};

var onElementBackgroundClick = function (colorArray, element, input) {
  var elementColor = getRandomElementFromArray(colorArray);

  element.style.backgroundColor = elementColor;
  input.value = elementColor;
};

wizardCoat.addEventListener('click', function () {
  onElementFillClick(COAT_COLORS, wizardCoat, inputCoat);
});

wizardEyes.addEventListener('click', function () {
  onElementFillClick(EYES_COLORS, wizardEyes, inputEyes);
});

setupFireball.addEventListener('click', function () {
  onElementBackgroundClick(FIREBALL_COLORS, setupFireball, inputFireball);
});
