define('static/index/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _commonVue = require('static/common/vue');
  
  var _commonVue2 = _interopRequireDefault(_commonVue);
  
  var _componentsAjaxIndex = require('static/components/ajax/index');
  
  var _componentsAjaxIndex2 = _interopRequireDefault(_componentsAjaxIndex);
  
  console.log(_componentsAjaxIndex2['default'], 9090909);
  new _commonVue2['default']({
      delimiters: ['{%', '%}'],
      el: '#app',
      data: {
          token: pageConfig.token,
          url: "",
          file: ""
      },
      created: function created() {
          alert(222);
      },
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
              console.log(file);
              var form = new FormData();
              form.append('file', file);
              form.append("_token", self.token);
              console.log(form.get(file));
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
