define('static/components/vue-swiper/vswiper.vue', function(require, exports, module) {

  'use strict';
  
  exports.__esModule = true;
  
  var _vue = require('static/common/vue/dist/vue');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _dom = require('static/components/tools/dom');
  
  var _dom2 = _interopRequireDefault(_dom);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
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
  //
  //
  //
  //
  
  exports["default"] = {
      name: "vswiper",
      components: {},
      props: {
          source: {
              type: Array,
              "default": []
          },
          loop: {
              type: Boolean,
              "default": true
          },
          auto: {
              type: Boolean,
              "default": false
          },
          initIndex: {
              type: Number,
              "default": 0
          }
      },
      data: function data() {
          return {
              //轮播参数
              width: 0,
              height: 0,
              size: 0,
              scroll_time: 300, //图片滚动时长
              auto_wait_time: 3000, //轮播间隔
              maxleft: 0, //最大lfet值[不循环情况下的值
              now_left: 0, //初始位置信息[不循环情况下的值]
              point_x: null, //记录一个x坐标
              point_y: null, //记录一个y坐标
              move_left: false, //记录向哪边滑动
              index: 0,
              busy: false,
              timer: null,
              imgs: []
          };
      },
      created: function created() {
          this.imgs = this.source;
      },
      mounted: function mounted() {
          this.init();
          // this.go_index(this.initIndex);
      },
  
      methods: {
          init: function init() {
              this.width = _dom2["default"].width(document);
              this.height = _dom2["default"].height(document);
              this.size = this.imgs.length;
              this.init_loop();
              this.auto_scroll();
          },
          scrollEnd: function scrollEnd(index) {
              // console.log(index);
              this.$emit('scrollEnd', index);
          },
  
  
          auto_scroll: function auto_scroll() {
              //自动滚动
              var self = this;
              if (!self.loop || !self.auto) return;
              clearTimeout(self.timer);
              self.timer = setTimeout(function () {
                  self.go_index(self.index + 1);
              }, self.auto_wait_time);
          },
          /*
           初始化循环滚动,当一次性需要滚动多个子元素时，暂不支持循环滚动效果,
           如果想实现一次性滚动多个子元素效果，可以通过页面结构实现
           循环滚动思路：复制首尾节点到尾首
           */
          setWidth: function setWidth(obj) {
              if (obj) {
                  for (var i = 0; i < obj.length; i++) {
                      _dom2["default"].css(obj[i], {
                          'width': this.width
                      });
                  }
              }
          },
          init_loop: function init_loop() {
              var self = this;
              if (this.$refs.imgbox.children.length == this.size && this.loop) {
                  //暂时只支持size和子节点数相等情况的循环
                  this.now_left = -this.width; //设置初始位置信息
                  this.minleft = -this.width * this.size; //最小left值
                  this.maxleft = -this.width;
                  this.$refs.imgbox.insertBefore(this.$refs.imgbox.childNodes[this.size - 1].cloneNode(true), this.$refs.imgbox.childNodes[0]);
                  this.$refs.imgbox.appendChild(this.$refs.imgbox.childNodes[1].cloneNode(true));
                  _dom2["default"].css(this.$refs.imgbox, {
                      'width': this.width * (this.size + 2),
                      'height': this.height
                  });
                  this.setWidth(this.$refs.imgbox.childNodes);
              } else {
                  _dom2["default"].css(this.$refs.imgbox, {
                      'width': this.width * this.size,
                      'height': this.height
                  });
                  this.setWidth(this.$refs.imgbox.childNodes);
              }
          },
          touchstart: function touchstart(e) {
              var self = this;
              if (e.touches.length == 1 && !self.busy) {
                  self.point_x = e.touches[0].screenX;
                  self.point_y = e.touches[0].screenY;
              }
          },
          touchmove: function touchmove(e) {
              var self = this;
              if (e.touches.length == 1 && !self.busy) {
                  return self.move(e.touches[0].screenX, e.touches[0].screenY); //这里根据返回值觉得是否阻止默认touch事件
              }
          },
          touchend: function touchend(e) {
              var self = this;
              !self.busy && self.move_end();
          },
          move: function move(point_x, point_y) {
              //滑动屏幕处理函数
              var self = this;
              var changeX = point_x - (this.point_x === null ? point_x : this.point_x),
                  changeY = point_y - (this.point_y === null ? point_y : this.point_y),
                  marginleft = this.now_left,
                  return_value = false,
                  sin = changeY / Math.sqrt(changeX * changeX + changeY * changeY);
              this.now_left = marginleft + changeX;
              this.move_left = changeX < 0;
              if (sin > Math.sin(Math.PI / 3) || sin < -Math.sin(Math.PI / 3)) {
                  //滑动屏幕角度范围：PI/3  -- 2PI/3
                  return_value = true; //不阻止默认行为
              }
              this.point_x = point_x;
              this.point_y = point_y;
              _dom2["default"].css(this.$refs.imgbox, this.get_style(2));
              return return_value;
          },
          move_end: function move_end() {
              var self = this;
              var changeX = this.now_left % this.width,
                  ind = void 0;
              if (this.now_left < this.minleft) {
                  //手指向左滑动
                  ind = this.index + 1;
              } else if (this.now_left > this.maxleft) {
                  //手指向右滑动
                  ind = this.index - 1;
              } else if (changeX != 0) {
                  if (this.move_left) {
                      //手指向左滑动
                      ind = this.index + 1;
                  } else {
                      //手指向右滑动
                      ind = this.index - 1;
                  }
              } else {
                  ind = this.index;
              }
              this.point_x = this.point_y = null;
              this.go_index(ind);
          },
          go_index: function go_index(ind) {
              //滚动到指定索引页面
              var self = this;
              if (self.busy) return;
              clearTimeout(self.timer);
              self.busy = true;
              if (self.loop) {
                  //如果循环
                  ind = ind < 0 ? -1 : ind;
                  ind = ind > self.size ? self.size : ind;
              } else {
                  ind = ind < 0 ? 0 : ind;
                  ind = ind >= self.size ? self.size - 1 : ind;
              }
              if (!self.loop && self.now_left == -(self.width * ind)) {
                  self.complete(ind);
              } else if (self.loop && self.now_left == -self.width * (ind + 1)) {
                  self.complete(ind);
              } else {
                  if (ind == -1 || ind == self.size) {
                      //循环滚动边界
                      self.index = ind == -1 ? self.size - 1 : 0;
                      self.now_left = ind == -1 ? 0 : -self.width * (self.size + 1);
                  } else {
                      self.index = ind;
                      self.now_left = -(self.width * (self.index + (self.loop ? 1 : 0)));
                  }
                  _dom2["default"].css(this.$refs.imgbox, this.get_style(1));
                  setTimeout(function () {
                      self.complete(ind);
                  }, self.scroll_time);
              }
          },
          complete: function complete(ind) {
              //动画完成回调
              var self = this;
              self.busy = false;
              self.scrollEnd(self.index);
              if (ind == -1) {
                  self.now_left = self.minleft;
              } else if (ind == self.size) {
                  self.now_left = self.maxleft;
              }
              _dom2["default"].css(this.$refs.imgbox, this.get_style(2));
              self.auto_scroll();
          },
  
          /*
           获取动画样式，要兼容更多浏览器，可以扩展该方法
           @int fig : 1 动画 2  没动画
           */
          get_style: function get_style(fig) {
              var self = this;
              var x = this.now_left,
                  time = fig == 1 ? this.scroll_time : 0;
              return {
                  '-webkit-transition': '-webkit-transform ' + time + 'ms',
                  '-webkit-transform': 'translate3d(' + x + 'px,0,0)',
                  '-webkit-backface-visibility': 'hidden',
                  'transition': 'transform ' + time + 'ms',
                  'transform': 'translate3d(' + x + 'px,0,0)'
              };
          }
      }
  };
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n<div class=\"vue-component-vswiper\">\n    <div class=\"vmui-touchslide-imgbox\" ref=\"imgbox\" v-on:touchstart=\"touchstart\" v-on:touchmove=\"touchmove\" v-on:touchend=\"touchend\">\n        <slot></slot>\n    </div>\n</div>\n"
  

});
