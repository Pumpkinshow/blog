define('static/components/vue-swiper/swiper.vue', function(require, exports, module) {

  'use strict';
  
  exports.__esModule = true;
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
  //
  //
  //
  
  var browser = typeof window !== 'undefined';
  if (browser) window.Swiper = require('swiper');
  exports["default"] = {
    name: 'swiper',
    props: {
      options: {
        type: Object,
        "default": function _default() {
          return {
            autoplay: 3500
          };
        }
      },
      notNextTick: {
        type: Boolean,
        "default": function _default() {
          return false;
        }
      }
    },
    data: function data() {
      return {
        defaultSwiperClasses: {
          wrapperClass: 'swiper-wrapper'
        }
      };
    },
    ready: function ready() {
      if (!this.swiper && browser) {
        this.swiper = new Swiper(this.$el, this.options);
      }
    },
    mounted: function mounted() {
      var self = this;
      var mount = function () {
        if (!self.swiper && browser) {
          delete self.options.notNextTick;
          var setClassName = false;
          for (var className in self.defaultSwiperClasses) {
            if (self.defaultSwiperClasses.hasOwnProperty(className)) {
              if (self.options[className]) {
                setClassName = true;
                self.defaultSwiperClasses[className] = self.options[className];
              }
            }
          }
          var mountInstance = function mountInstance() {
            self.swiper = new Swiper(self.$el, self.options);
          };
          setClassName ? self.$nextTick(mountInstance) : mountInstance();
        }
      }(this.options.notNextTick || this.notNextTick) ? mount() : this.$nextTick(mount);
    },
    updated: function updated() {
      if (this.swiper) {
        this.swiper.update();
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.swiper) {
        this.swiper.destroy();
        delete this.swiper;
      }
    }
  };
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n<div class=\"swiper-container\">\n  <slot name=\"parallax-bg\"></slot>\n  <div :class=\"defaultSwiperClasses.wrapperClass\">\n    <slot></slot>\n  </div>\n  <slot name=\"pagination\"></slot>\n  <slot name=\"button-prev\"></slot>\n  <slot name=\"button-next\"></slot>\n  <slot name=\"scrollbar\"></slot>\n</div>\n"
  

});
