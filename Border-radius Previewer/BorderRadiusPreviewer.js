(function (win, doc) {
  'use strict'

  var box = doc.querySelector('[data-windowPreviewer="windows"]');
  box.style.borderRadius = "0px"
  var button = doc.querySelector('[data-button="button"]');

  button.addEventListener('click', setBorderRadius);

  function setBorderRadius() {
    var top = doc.querySelector('[data-top="top"]');
    var right = doc.querySelector('[data-right="right"]');
    var buttom = doc.querySelector('[data-buttom="buttom"]');
    var left = doc.querySelector('[data-left="left"]');
    var config = `${top.value}px ${right.value}px ${buttom.value}px ${left.value}px`;
    box.style.borderRadius = config;
  }



})(window, document)