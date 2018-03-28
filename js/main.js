(function () {
  const GAME_SCREENS = [
    document.querySelector(`#greeting`).content,
    document.querySelector(`#rules`).content,
    document.querySelector(`#game-1`).content,
    document.querySelector(`#game-2`).content,
    document.querySelector(`#game-3`).content,
    document.querySelector(`#stats`).content
  ];

  const MAIN_SCREEN = document.querySelector(`main.central`);

  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  let currentScreen = 0;

  const showScreen = function (screenIndex) {
    let screen = GAME_SCREENS[screenIndex].cloneNode(true);
    deleteChildren(MAIN_SCREEN);
    MAIN_SCREEN.appendChild(screen);
    currentScreen = screenIndex;
  };

  const deleteChildren = function (el) {
    while (el.hasChildNodes()) {
      el.removeChild(el.firstChild);
    }
  };


  let onScreenChange = function (e) {
    let screenIndex = GAME_SCREENS.length - 1;
    if (e.altKey && e.keyCode === LEFT_ARROW) {
      if (currentScreen > 0) {
        showScreen(currentScreen - 1);
      }
    } else if (e.altKey && e.keyCode === RIGHT_ARROW) {
      if (currentScreen < screenIndex) {
        showScreen(currentScreen + 1);
      }
    }
  };

  showScreen(0);

  document.addEventListener(`keydown`, onScreenChange);
})();

