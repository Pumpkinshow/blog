define('static/components/vue-swiper/slide.vue', function(require, exports, module) {

  'use strict';
  
  exports.__esModule = true;
  //
  //
  //
  //
  //
  //
  
  exports["default"] = {
    name: 'swiper-slide',
    data: function data() {
      return {
        slideClass: 'swiper-slide'
      };
    },
    ready: function ready() {
      this.update();
    },
    mounted: function mounted() {
      this.update();
      if (this.$parent.options.slideClass) {
        this.slideClass = this.$parent.options.slideClass;
      }
    },
    updated: function updated() {
      this.update();
    },
    attached: function attached() {
      this.update();
    },
    methods: {
      update: function update() {
        if (this.$parent && this.$parent.swiper && this.$parent.swiper.update) {
          this.$parent.swiper.update(true);
          if (this.$parent.options.loop) {
            this.$parent.swiper.reLoop();
          }
        }
      }
    }
  };
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n<div :class=\"slideClass\">\n  <slot></slot>\n</div>\n"
  

});
