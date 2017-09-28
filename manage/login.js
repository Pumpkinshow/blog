define('static/manage/login.es6', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _staticCommonVueDistVue = require('static/common/vue/dist/vue');
  
  var _staticCommonVueDistVue2 = _interopRequireDefault(_staticCommonVueDistVue);
  
  var _staticComponentsAjaxIndex = require('static/components/ajax/index');
  
  var _staticComponentsAjaxIndex2 = _interopRequireDefault(_staticComponentsAjaxIndex);
  
  new _staticCommonVueDistVue2['default']({
    el: '#app',
    data: {},
    created: function created() {},
    mounted: function mounted() {},
    methods: {
      login: function login() {
        (0, _staticComponentsAjaxIndex2['default'])({});
      }
    }
  
  });

});
