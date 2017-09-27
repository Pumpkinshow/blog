define('static/manage/login.es6', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _staticCommonVue = require('static/common/vue');
  
  var _staticCommonVue2 = _interopRequireDefault(_staticCommonVue);
  
  var _staticComponentsAjaxIndex = require('static/components/ajax/index');
  
  var _staticComponentsAjaxIndex2 = _interopRequireDefault(_staticComponentsAjaxIndex);
  
  new _staticCommonVue2['default']({
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
