const getElementFromTemplate = function (string) {
  const div = document.createElement(`div`);
  div.innerHTML = string.trim();

  return div;
};

export default getElementFromTemplate;
