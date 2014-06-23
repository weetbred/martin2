/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */(function(e,t,n){e.fn.backstretch=function(r,i){(r===n||0===r.length)&&e.error("No images were supplied for Backstretch");0===e(t).scrollTop()&&t.scrollTo(0,0);return this.each(function(){var t=e(this),n=t.data("backstretch");if(n){if("string"==typeof r&&"function"==typeof n[r]){n[r](i);return}i=e.extend(n.options,i);n.destroy(!0)}n=new s(this,r,i);t.data("backstretch",n)})};e.backstretch=function(t,n){return e("body").backstretch(t,n).data("backstretch")};e.expr[":"].backstretch=function(t){return e(t).data("backstretch")!==n};e.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},i={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},s=function(n,i,s){this.options=e.extend({},e.fn.backstretch.defaults,s||{});this.images=e.isArray(i)?i:[i];e.each(this.images,function(){e("<img />")[0].src=this});this.isBody=n===document.body;this.$container=e(n);this.$root=this.isBody?o?e(t):e(document):this.$container;n=this.$container.children(".backstretch").first();this.$wrap=n.length?n:e('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(n=this.$container.css("position"),i=this.$container.css("zIndex"),this.$container.css({position:"static"===n?"relative":n,zIndex:"auto"===i?0:i,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&o?"fixed":"absolute"});this.index=0;this.show(this.index);e(t).on("resize.backstretch",e.proxy(this.resize,this)).on("orientationchange.backstretch",e.proxy(function(){this.isBody&&0===t.pageYOffset&&(t.scrollTo(0,1),this.resize())},this))};s.prototype={resize:function(){try{var e={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),r=n,i=this.isBody?t.innerHeight?t.innerHeight:this.$root.height():this.$root.innerHeight(),s=r/this.$img.data("ratio"),o;s>=i?(o=(s-i)/2,this.options.centeredY&&(e.top="-"+o+"px")):(s=i,r=s*this.$img.data("ratio"),o=(r-n)/2,this.options.centeredX&&(e.left="-"+o+"px"));this.$wrap.css({width:n,height:i}).find("img:not(.deleteable)").css({width:r,height:s}).css(e)}catch(u){}return this},show:function(t){if(!(Math.abs(t)>this.images.length-1)){var n=this,r=n.$wrap.find("img").addClass("deleteable"),s={relatedTarget:n.$container[0]};n.$container.trigger(e.Event("backstretch.before",s),[n,t]);this.index=t;clearInterval(n.interval);n.$img=e("<img />").css(i).bind("load",function(i){var o=this.width||e(i.target).width();i=this.height||e(i.target).height();e(this).data("ratio",o/i);e(this).fadeIn(n.options.speed||n.options.fade,function(){r.remove();n.paused||n.cycle();e(["after","show"]).each(function(){n.$container.trigger(e.Event("backstretch."+this,s),[n,t])})});n.resize()}).appendTo(n.$wrap);n.$img.attr("src",n.images[t]);return n}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(e.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(n){e(t).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);n||this.$wrap.remove();this.$container.removeData("backstretch")}};var o,u=navigator.userAgent,a=navigator.platform,f=u.match(/AppleWebKit\/([0-9]+)/),f=!!f&&f[1],l=u.match(/Fennec\/([0-9]+)/),l=!!l&&l[1],c=u.match(/Opera Mobi\/([0-9]+)/),h=!!c&&c[1],p=u.match(/MSIE ([0-9]+)/),p=!!p&&p[1];o=!((-1<a.indexOf("iPhone")||-1<a.indexOf("iPad")||-1<a.indexOf("iPod"))&&f&&534>f||t.operamini&&"[object OperaMini]"==={}.toString.call(t.operamini)||c&&7458>h||-1<u.indexOf("Android")&&f&&533>f||l&&6>l||"palmGetResource"in t&&f&&534>f||-1<u.indexOf("MeeGo")&&-1<u.indexOf("NokiaBrowser/8.5.0")||p&&6>=p)})(jQuery,window);