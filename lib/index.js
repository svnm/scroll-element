"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var scrollToElement = exports.scrollToElement = function scrollToElement(containerElement, targetElement, duration, offset) {
  if (duration == null) {
    duration = 1000;
  }
  if (offset == null) {
    offset = 0;
  }

  var targetOffsetTop = getElementOffset(targetElement).top;
  var containerOffsetTop = getElementOffset(containerElement).top;
  var scrollTarget = targetOffsetTop + (containerElement.scrollTop - containerOffsetTop);
  scrollTarget += offset; /* plus the desired offset */
  scroll(containerElement, scrollTarget, duration);
};

var scrollWindowToElement = exports.scrollWindowToElement = function scrollWindowToElement(targetElement, duration, offset) {
  if (duration == null) {
    duration = 1000;
  }
  if (offset == null) {
    offset = 0;
  }

  var scrollTarget = getElementOffset(targetElement).top;
  scrollTarget += offset; /* plus the additional desired offset */
  scrollWindow(scrollTarget, duration);
};

function scroll(containerElement, scrollTarget, duration) {
  var scrollStep = scrollTarget / (duration / 15);
  var interval = setInterval(function () {
    if (containerElement.scrollTop < scrollTarget) {
      containerElement.scrollTop += scrollStep;
    } else {
      clearInterval(interval);
    }
  }, 15);
}

function scrollWindow(scrollTarget, duration) {
  var scrollStep = scrollTarget / (duration / 15);
  var interval = setInterval(function () {
    if (window.scrollY < scrollTarget) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(interval);
    }
  }, 15);
}

function getElementOffset(element) {
  var de = document.documentElement;
  var box = element.getBoundingClientRect();
  var top = box.top + window.pageYOffset - de.clientTop;
  var left = box.left + window.pageXOffset - de.clientLeft;
  return { top: top, left: left };
}