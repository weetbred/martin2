// Avoid `console` errors in browsers that lack a console
(!window.console||!console.log)&&function(){var e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],n=t.length,r=window.console={};while(n--)r[t[n]]=e}();window.TEST={inputs:["input","inputtypes","textarea"],audvid:["video","audio"],API:["addTest","mq","hasEvent","testProp","testAllProps","testStyles","_prefixes","_domPrefixes","_cssomPrefixes","prefixed"],extraclass:["js"],privates:["_enableHTML5","_version","_fontfaceready"],deprecated:[{oldish:"crosswindowmessaging",newish:"postmessage"},{oldish:"historymanagement",newish:"history"}],inArray:function(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}};