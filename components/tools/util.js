define('static/components/tools/util', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _staticCommonVueDistVue = require('static/common/vue/dist/vue');
  
  var _staticCommonVueDistVue2 = _interopRequireDefault(_staticCommonVueDistVue);
  
  exports['default'] = {
      l2camel: function l2camel(str) {
          return str.replace(/-(\w)/g, function (all, c, index) {
              return index > 0 ? c.toUpperCase() : c;
          });
      },
  
      assign: function assign(obj) {
          [].slice.call(arguments, 1).forEach(function (args) {
              for (var i in args) {
                  obj[i] = args[i];
              }
          });
  
          return obj;
      },
  
      each: function each(arr, callback) {
          if (arr.length) {
              [].forEach.call(arr, callback);
          } else {
              for (var i in arr) {
                  callback(arr[i], i);
              }
          }
      },
  
      rfa: function rfa(callback) {
          return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
              window.setTimeout(callback, 1000 / 60);
          })(callback);
      },
  
      crfa: function crfa(id) {
          return id && (window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout)(id);
      },
  
      makeArray: function makeArray(arr) {
          if (Array.isArray(arr)) {
              return arr;
          }
  
          return arr == null ? [] : [arr];
      },
  
      log: function log() {
          var str = JSON.stringify(arguments);
          var container = document.querySelector('#__log__');
  
          if (!container) {
              container = document.createElement('div');
              container.id = '__log__';
              container.style.cssText = 'position: fixed; bottom: 0px; width: 100%; background: #ccc; z-index: 10000;';
              document.body.appendChild(container);
          }
  
          container.innerHTML = container.innerHTML + '<br />' + str;
      },
  
      firstKey: function firstKey(obj) {
          for (var i in obj) {
              return i;
          }
  
          return false;
      },
  
      observer: function observer(target, config, callback) {
          if (config === undefined) config = {};
  
          var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
          var observer = new MutationObserver(callback);
  
          observer.observe(target, config);
          return observer;
      },
  
      register: function register(obj) {
          var directive = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
  
          var Component = obj.Component || obj;
  
          function install(Vue) {
              if (install._installed) return;
  
              install._installed = true;
  
              if (directive) {
                  Vue.directive(Component.name, obj);
              } else {
                  Vue.component('vm-' + Component.name, obj);
              }
          }
  
          if (window.Vue) {
              install(window.Vue);
          } else {
              obj.install = Component.install = install;
          }
  
          return obj;
      },
  
      factory: function factory(options) {
          var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  
          var instance = new _staticCommonVueDistVue2['default'](options);
          Object.assign(instance, data);
          instance.$mount();
          document.body.appendChild(instance.$el);
          return instance;
      }
  };
  
  !Object.assign && (Object.assign = exports['default'].assign);
  module.exports = exports['default'];

});
