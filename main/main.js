define('static/main/main', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _commonVueVue = require('../common/vue/vue');
  
  var _commonVueVue2 = _interopRequireDefault(_commonVueVue);
  
  var _AppVue = require('static/main/App.vue');
  
  var _AppVue2 = _interopRequireDefault(_AppVue);
  
  alert(555);
  
  new _commonVueVue2['default']({
    el: '#app',
    render: function render(h) {
      return h(_AppVue2['default']);
    }
  });

});
