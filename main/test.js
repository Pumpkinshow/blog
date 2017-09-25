define('static/main/test', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _commonVue = require('static/common/vue');
  
  var _commonVue2 = _interopRequireDefault(_commonVue);
  
  var _componentsAjaxIndex = require('static/components/ajax/index');
  
  var _componentsAjaxIndex2 = _interopRequireDefault(_componentsAjaxIndex);
  
  new _commonVue2['default']({
      delimiters: ['{%', '%}'],
      el: '#app',
      data: {
          token: pageConfig.token,
          url: "",
          file: "",
          a: 1
      },
      created: function created() {},
      methods: {
          show: function show(i) {
              alert(i);
              this.a = i;
          }
      },
      components: {}
  
  });

});
