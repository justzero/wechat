var WechatAPI = require('wechat-api');
var appid= 'wx836a1b2b133b41a2';
var appsecret = 'ff5ea3ebead6cf389aa9eee9ac7b66f8';

var api = new WechatAPI(appid, appsecret);
module.exports = api;
