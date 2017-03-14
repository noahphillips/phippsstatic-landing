(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ScrollIt = require('./public/scripts/modules/ScrollIt.js');

document.addEventListener('DOMContentLoaded', function (event) {
  var elems = {
    body: document.querySelector('.site-body'),
    bodyWidth: document.body.clientWidth,
    nav: document.querySelector('.nav'),
    navList: document.querySelector('.nav ul'),
    navToggle: document.querySelector('.nav-toggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    navHeight: document.querySelector('.nav').offsetHeight + 'px',
    siteBody: document.querySelector('.site-content'),
    sections: document.querySelectorAll('.js-section')
  };

  // animated section scrolling on click
  var done = function done() {
    null;
  };

  var _loop = function _loop(i) {
    elems.navLinks[i].addEventListener('click', function () {
      (0, _ScrollIt.scrollIt)(elems.sections[i], 300, 'easeInQuad', done);
    });
  };

  for (var i = 0; i < elems.navLinks.length; i++) {
    _loop(i);
  }

  // nav events
  if (elems.bodyWidth >= 768) {
    elems.siteBody.style.paddingTop = elems.navHeight;
  }
  if (elems.bodyWidth <= 768) {
    if (elems.nav) {
      elems.navToggle.addEventListener('click', function () {
        elems.body.classList.toggle('freeze');
        elems.navToggle.classList.toggle('is-shown');
        elems.nav.classList.toggle('is-shown');
      });
      elems.navList.addEventListener('click', function () {
        elems.nav.classList.remove('is-shown');
        elems.navToggle.classList.remove('is-shown');
        elems.body.classList.remove('freeze');
      });
    }
  }

  windowResize(elems.navHeight, elems.siteBody);
});

var windowResize = function windowResize(height, elem) {
  window.addEventListener('resize', function () {
    var width = document.body.clientWidth;
    if (width < 768) {
      elem.style.paddingTop = 0;
    } else {
      elem.style.paddingTop = height;
    }
  });
};

},{"./public/scripts/modules/ScrollIt.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// from https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
// https://github.com/pawelgrzybek
var scrollIt = exports.scrollIt = function scrollIt(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  var callback = arguments[3];

  // define timing functions
  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };

  // Returns document.documentElement for Chrome and Safari
  // document.body for rest of the world
  var checkBody = function checkBody() {
    document.documentElement.scrollTop += 1;
    var body = document.documentElement.scrollTop !== 0 ? document.documentElement : document.body;
    document.documentElement.scrollTop -= 1;
    return body;
  };

  var body = checkBody();
  var start = body.scrollTop;
  var startTime = Date.now();

  // Height checks to prevent requestAnimationFrame from infinitely looping
  // If the function tries to scroll below the visible document area
  // it should only scroll to the bottom of the document
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destination = documentHeight - element.offsetTop < windowHeight ? documentHeight - windowHeight : element.offsetTop;

  var scroll = function scroll() {
    var now = Date.now();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    body.scrollTop = timeFunction * (destination - start) + start;

    if (body.scrollTop === destination) {
      callback();
      return;
    }
    requestAnimationFrame(scroll);
  };
  scroll();
};

},{}]},{},[1]);

//# sourceMappingURL=compiled.js.map
