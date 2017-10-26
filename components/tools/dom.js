define('static/components/tools/dom.es6', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _staticComponentsToolsUtil = require('static/components/tools/util.es6');
  
  var _staticComponentsToolsUtil2 = _interopRequireDefault(_staticComponentsToolsUtil);
  
  var css3s = ['transform', 'transition'];
  
  if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector;
  }
  
  exports['default'] = {
      offset: function offset(element) {
          var top = 0,
              left = 0;
  
          do {
              top += element.offsetTop;
              left += element.offsetLeft;
          } while (element = element.offsetParent);
  
          return {
              left: left,
              top: top
          };
      },
  
      matches: function matches(target, selector) {
          return target.matches(selector);
      },
  
      siblings: function siblings(element) {
          return [].filter.call(element.parentNode.children, function (child) {
              return child !== element;
          });
      },
  
      nexts: function nexts(element) {
          var els = [];
  
          while (element = element.nextSibling) {
              if (element.nodeType == 1) {
                  els.push(element);
              }
          }
  
          return els;
      },
  
      height: function height(element) {
          return this.isDoc(element) ? document.documentElement.clientHeight : element.offsetHeight;
      },
  
      width: function width(element) {
          return this.isDoc(element) ? document.documentElement.clientWidth : element.offsetWidth;
      },
  
      size: function size(element) {
          return { width: this.width(element), height: this.height(element) };
      },
  
      rect: function rect(element) {
          return element.getBoundingClientRect();
      },
  
      isDoc: function isDoc(element) {
          return element === document.documentElement || element === document;
      },
  
      contains: function contains(root, el) {
          var hasSelf = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
  
          return root === el && hasSelf || !!(root.compareDocumentPosition(el) & 16);
      },
  
      css: function css(element, name, value) {
          if (typeof name == 'object') {
              for (var key in name) {
                  this.css(element, key, name[key]);
              }
          } else {
              var css3name;
  
              if (this.css3(name)) {
                  css3name = _staticComponentsToolsUtil2['default'].l2camel('-webkit-' + name);
              }
  
              var property = _staticComponentsToolsUtil2['default'].l2camel(name);
  
              if (typeof value == 'undefined') {
                  return element.style[css3name || property] || window.getComputedStyle(element).getPropertyValue(css3name || name);
              } else {
                  value += typeof value == 'number' && !/^(?:opacity|zIndex)$/.test(property) ? 'px' : '';
                  element.style[property] = value;
  
                  if (css3name) {
                      element.style[css3name] = value;
                  }
              }
          }
      },
  
      css3: function css3(name) {
          return css3s.indexOf(name) > -1;
      },
  
      $: function $(str) {
          var root = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
  
          return typeof str == 'string' ? root.querySelector(str) : str;
      },
  
      $$: function $$(str) {
          var root = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
  
          return (typeof str == 'string' ? root.querySelectorAll(str) : str) || [];
      },
  
      hasClass: function hasClass(element, className) {
          return element.className.match(new RegExp('(\\s+|^)' + className + '(\\s+|$)'));
      },
  
      addClass: function addClass(element, className) {
          if (this.hasClass(element, className)) {
              element.className += ' ' + className;
          }
      },
  
      removeClass: function removeClass(element, className) {
          element.className = element.className.replace(new RegExp('(\\s+|^)' + className + '(\\s+|$)'));
      }
  };
  module.exports = exports['default'];

});
