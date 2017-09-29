define('static/components/vue-swiper/item.vue', function(require, exports, module) {

  'use strict';
  
  exports.__esModule = true;
  
  var _event = require('static/components/tools/event');
  
  var _event2 = _interopRequireDefault(_event);
  
  var _dom = require('static/components/tools/dom');
  
  var _dom2 = _interopRequireDefault(_dom);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  exports["default"] = {
      components: {},
  
      mounted: function mounted() {
          var _this = this;
  
          this.$nextTick(function () {
              _event2["default"].on(window, 'resize', function () {
                  return _this.resize();
              });
              _this.resize();
          });
      },
  
  
      methods: {
          resize: function resize() {
              this.$el.style.width = _dom2["default"].width(document) + 'px';
              this.$el.style.height = _dom2["default"].height(document) + 'px';
          }
      }
  };
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n<slot></slot>\n"
  

});
