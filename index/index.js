define('static/index/index', function(require, exports, module) {

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
          file: ""
      },
      created: function created() {},
      methods: {
          imgChange: function imgChange(event) {
              // console.log(event);
              // postfile{event.target.files[0]}
              this.file = event.target.files[0];
              console.log(this.file);
          },
          postfile: function postfile() {
              var file = this.file;
              var self = this;
              var reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function (e) {
                  self.url = e.target.result;
              };
              var form = new FormData();
              form.append('file', file);
              form.append("_token", self.token);
              var oReq = new XMLHttpRequest();
              oReq.open("POST", "/imageupload", true);
              oReq.onload = function (oEvent) {
                  if (oReq.status == 200) {
                      // oOutput.innerHTML = "Uploaded!" ; 
                  } else {
                          // oOutput.innerHTML = "Error " + oReq.status + " occurred uploading your file.<br \/>"; 
                      }
              };
              oReq.send(form);
          }
      },
      components: {}
  
  });

});
