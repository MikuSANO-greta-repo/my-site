const createElm = (tagName) => document.createElement(tagName);

const formatText = (key, val, titleClass, contentClass) => {
  return `<span><span class=${titleClass}>${key.replaceAll("_", " ")}</span>: <span class=${contentClass}>${val}</span></span>`;
};
const formatTextInArray = (key, val, titleClass, contentClass) => {
  return `<span><span class=${titleClass}>${key.replaceAll("_", " ")}</span>: <span class=${contentClass}>${Array.isArray(val) ? val.reduce((accum, current) => accum + ` ${current}`, "") : val}</span></span>`;
};

export { createElm, formatText, formatTextInArray };
