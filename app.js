var express = require('express'),
    app = express();
var wechat = require('wechat');
var api = require('./config.js');
var menu = {
 "button":[
   {
     "type":"click",
     "name":"今日歌曲",
     "key":"V1001_TODAY_MUSIC"
   },
   {
     "name":"菜单",
     "sub_button":[
       {
         "type":"view",
         "name":"搜索",
         "url":"http://www.soso.com/"
       },
       {
         "type":"click",
         "name":"赞一下我们",
         "key":"V1001_GOOD"
       }]
     }]
};
api.createMenu(menu, function (error, cb) {
console.log(cb, error);
}); // 获取消息发送概况数据

var config = {
  token: '12345',
  appid: 'wx836a1b2b133b41a2',
  //encodingAESKey: 'encodinAESKey'
};

app.use(express.query());
app.use('/', wechat(config).text(function (message, req, res, next) {
console.log(message);
res.reply({
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3",
        thumbMediaId: 'GuRBTPq5Wz_OVgHnQ36FHuXtPQEzxCR7iUYCCFFOHw6HlTH1klvRxr5ce9u0fj3O'
      }
    });
}).image(function (message, req, res, next) {
console.log(message);
  // TODO
}).voice(function (message, req, res, next) {
console.log(message);
  // TODO
}).video(function (message, req, res, next) {
console.log(message);
  // TODO
}).location(function (message, req, res, next) {
  // TODO
}).link(function (message, req, res, next) {
console.log(message);
  // TODO
}).event(function (message, req, res, next) {
console.log(message);
// URL置空，则在发送后,点击模板消息会进入一个空白页面（ios）, 或无法点击（android）
var url = 'http://weixin.qq.com/download';
var topColor = '#FF0000'; // 顶部颜色
var data = {
userName: {
value: '11',
color: '#ff0000'
}
};
res.reply('null');
if (message.Event === 'CLICK') {
api.sendTemplate(message.FromUserName, '7vy-GqgU0mY3VA3VqQLy6gF2_FWLerBhhgSvlZy_1vw', url, topColor, data, function (e, d) {
console.log(e, d);
});
}
}).device_text(function (message, req, res, next) {
console.log(message);
  // TODO
}).device_event(function (message, req, res, next) {
console.log(message);
  // TODO
}).middlewarify());
app.listen(3000);
