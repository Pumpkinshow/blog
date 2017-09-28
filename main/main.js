define('static/main/main', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _commonVueDistVue = require('static/common/vue/dist/vue');
  
  var _commonVueDistVue2 = _interopRequireDefault(_commonVueDistVue);
  
  var _AppVue = require('static/main/App.vue');
  
  var _AppVue2 = _interopRequireDefault(_AppVue);
  
  alert(555);
  
  new _commonVueDistVue2['default']({
    el: '#app',
    render: function render(h) {
      return h(_AppVue2['default']);
    }
  });

});
