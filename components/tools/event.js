define('static/components/tools/event', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports['default'] = {
      on: function on(element, event, callback, options) {
          event.split(' ').forEach(function (event) {
              element.addEventListener(event, callback);
          });
      },
  
      off: function off(element, event, callback) {
          element.removeEventListener(event, callback);
      },
  
      trigger: function trigger(element, event) {
          var data = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
  
          var evt = document.createEvent('HTMLEvents');
          evt.initEvent(event, false, true);
          evt.data = data;
          return !element.dispatchEvent(evt);
      }
  };
  module.exports = exports['default'];

});
