import intro from './intro.js';
import greeting from './greeting.js';
import rules from './rules.js';
import gameOne from './game-1.js';
import gameTwo from './game-2.js';
import gameThree from './game-3.js';
import stats from './stats.js';

const MAIN_SCREEN = document.querySelector(`main.central`);

const GAME_SCREENS = [
  intro,
  greeting,
  rules,
  gameOne,
  gameTwo,
  gameThree,
  stats
];

const deleteChildren = function (el) {
  while (el.hasChildNodes()) {
    el.removeChild(el.firstChild);
  }
};

const renderScreen = function (screenIndex) {
  const screen = GAME_SCREENS[screenIndex];
  deleteChildren(MAIN_SCREEN);
  MAIN_SCREEN.appendChild(screen);
};

export default renderScreen;
