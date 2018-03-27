(function () {
  window.deleteChildren = function (el) {
    while (el.hasChildNodes()) {
      el.removeChild(el.firstChild);
    }
  };
})();
