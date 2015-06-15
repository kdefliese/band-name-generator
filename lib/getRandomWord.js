'use strict';

module.exports = function(object) {
  var propArray = Object.keys(object);
  var randomWord = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomWord};
};
