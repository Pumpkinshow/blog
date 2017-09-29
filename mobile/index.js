define('static/mobile/index.es6', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _staticCommonVueDistVue = require('static/common/vue/dist/vue');
  
  var _staticCommonVueDistVue2 = _interopRequireDefault(_staticCommonVueDistVue);
  
  var _staticComponentsAjaxIndex = require('static/components/ajax/index');
  
  var _staticComponentsAjaxIndex2 = _interopRequireDefault(_staticComponentsAjaxIndex);
  
  var _staticComponentsVueSwiperVswiperVue = require('static/components/vue-swiper/vswiper.vue');
  
  var _staticComponentsVueSwiperVswiperVue2 = _interopRequireDefault(_staticComponentsVueSwiperVswiperVue);
  
  var _staticComponentsVueSwiperItemVue = require('static/components/vue-swiper/item.vue');
  
  var _staticComponentsVueSwiperItemVue2 = _interopRequireDefault(_staticComponentsVueSwiperItemVue);
  
  new _staticCommonVueDistVue2['default']({
      el: '#app',
      data: {},
      components: {
          Vswiper: _staticComponentsVueSwiperVswiperVue2['default'],
          Item: _staticComponentsVueSwiperItemVue2['default']
      },
      created: function created() {},
      computed: {},
      mounted: function mounted() {},
      methods: {
          login: function login() {
              (0, _staticComponentsAjaxIndex2['default'])({});
          }
      }
  
  });

});
