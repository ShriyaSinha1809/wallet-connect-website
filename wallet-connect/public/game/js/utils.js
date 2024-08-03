// src/game/utils.js
export const parse2D = function (array, width) {
  const rows = [];
  for (let i = 0; i < array.length; i += width) {
    rows.push(array.slice(i, i + width));
  }
  return rows;
};

export const createObjectsFrom2D = function (array, createObjectCallback) {
  const objects = [];
  array.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if (symbol === 292 || symbol === 250) {
        objects.push(createObjectCallback(x, y));
      }
    });
  });
  return objects;
};
