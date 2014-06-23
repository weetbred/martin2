// Modernizr v1.7  www.modernizr.com
window.Modernizr=function(e,t,n){function r(){c.input=function(e){for(var t=0,n=e.length;t<n;t++)C[e[t]]=e[t]in y;return C}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),c.inputtypes=function(e){for(var r=0,i,s,o,u=e.length;r<u;r++)y.setAttribute("type",s=e[r]),i=y.type!=="text",i&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&y.style.WebkitAppearance!==n?(p.appendChild(y),o=t.defaultView,i=o.getComputedStyle&&o.getComputedStyle(y,null).WebkitAppearance!=="textfield"&&y.offsetHeight!==0,p.removeChild(y)):/^(search|tel)$/.test(s)||(/^(url|email)$/.test(s)?i=y.checkValidity&&y.checkValidity()===!1:/^color$/.test(s)?(p.appendChild(y),p.offsetWidth,i=y.value!=b,p.removeChild(y)):i=y.value!=b)),N[e[r]]=!!i;return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function i(e,t){var n=e.charAt(0).toUpperCase()+e.substr(1),r=(e+" "+S.join(n+" ")+n).split(" ");return!!s(r,t)}function s(e,t){for(var r in e)if(g[e[r]]!==n&&(!t||t(e[r],m)))return!0}function o(e,t){return(""+e).indexOf(t)!==-1}function u(e,t){return typeof e===t}function a(e,t){return f(E.join(e+";")+(t||""))}function f(e){g.cssText=e}var l="1.7",c={},h=!0,p=t.documentElement,d=t.head||t.getElementsByTagName("head")[0],v="modernizr",m=t.createElement(v),g=m.style,y=t.createElement("input"),b=":)",w=Object.prototype.toString,E=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),S="Webkit Moz O ms Khtml".split(" "),x={svg:"http://www.w3.org/2000/svg"},T={},N={},C={},k=[],L,A=function(e){var n=t.createElement("style"),r=t.createElement("div"),i;n.textContent=e+"{#modernizr{height:3px}}",d.appendChild(n),r.id="modernizr",p.appendChild(r),i=r.offsetHeight===3,n.parentNode.removeChild(n),r.parentNode.removeChild(r);return!!i},O=function(){function e(e,i){i=i||t.createElement(r[e]||"div");var s=(e="on"+e)in i;s||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),s=u(i[e],"function"),u(i[e],n)||(i[e]=n),i.removeAttribute(e))),i=null;return s}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),M={}.hasOwnProperty,_;u(M,n)||u(M.call,n)?_=function(e,t){return t in e&&u(e.constructor.prototype[t],n)}:_=function(e,t){return M.call(e,t)},T.flexbox=function(){function e(e,t,n,r){e.style.cssText=E.join(t+":"+n+";")+(r||"")}function n(e,t,n,r){t+=":",e.style.cssText=(t+E.join(n+";"+t)).slice(0,-t.length)+(r||"")}var r=t.createElement("div"),i=t.createElement("div");n(r,"display","box","width:42px;padding:0;"),e(i,"box-flex","1","width:10px;"),r.appendChild(i),p.appendChild(r);var s=i.offsetWidth===42;r.removeChild(i),p.removeChild(r);return s},T.canvas=function(){var e=t.createElement("canvas");return e.getContext&&e.getContext("2d")},T.canvastext=function(){return c.canvas&&u(t.createElement("canvas").getContext("2d").fillText,"function")},T.webgl=function(){return!!e.WebGLRenderingContext},T.touch=function(){return"ontouchstart"in e||A("@media ("+E.join("touch-enabled),(")+"modernizr)")},T.geolocation=function(){return!!navigator.geolocation},T.postmessage=function(){return!!e.postMessage},T.websqldatabase=function(){var t=!!e.openDatabase;return t},T.indexedDB=function(){for(var t=-1,n=S.length;++t<n;){var r=S[t].toLowerCase();if(e[r+"_indexedDB"]||e[r+"IndexedDB"])return!0}return!1},T.hashchange=function(){return O("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},T.history=function(){return!!e.history&&!!history.pushState},T.draganddrop=function(){return O("dragstart")&&O("drop")},T.websockets=function(){return"WebSocket"in e},T.rgba=function(){f("background-color:rgba(150,255,150,.5)");return o(g.backgroundColor,"rgba")},T.hsla=function(){f("background-color:hsla(120,40%,100%,.5)");return o(g.backgroundColor,"rgba")||o(g.backgroundColor,"hsla")},T.multiplebgs=function(){f("background:url(//:),url(//:),red url(//:)");return(new RegExp("(url\\s*\\(.*?){3}")).test(g.background)},T.backgroundsize=function(){return i("backgroundSize")},T.borderimage=function(){return i("borderImage")},T.borderradius=function(){return i("borderRadius","",function(e){return o(e,"orderRadius")})},T.boxshadow=function(){return i("boxShadow")},T.textshadow=function(){return t.createElement("div").style.textShadow===""},T.opacity=function(){a("opacity:.55");return/^0.55$/.test(g.opacity)},T.cssanimations=function(){return i("animationName")},T.csscolumns=function(){return i("columnCount")},T.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";f((e+E.join(t+e)+E.join(n+e)).slice(0,-e.length));return o(g.backgroundImage,"gradient")},T.cssreflections=function(){return i("boxReflect")},T.csstransforms=function(){return!!s(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},T.csstransforms3d=function(){var e=!!s(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);e&&"webkitPerspective"in p.style&&(e=A("@media ("+E.join("transform-3d),(")+"modernizr)"));return e},T.csstransitions=function(){return i("transitionProperty")},T.fontface=function(){var e,n,r=d||p,i=t.createElement("style"),s=t.implementation||{hasFeature:function(){return!1}};i.type="text/css",r.insertBefore(i,r.firstChild),e=i.sheet||i.styleSheet;var o=s.hasFeature("CSS2","")?function(t){if(!e||!t)return!1;var n=!1;try{e.insertRule(t,0),n=/src/i.test(e.cssRules[0].cssText),e.deleteRule(e.cssRules.length-1)}catch(r){}return n}:function(t){if(!e||!t)return!1;e.cssText=t;return e.cssText.length!==0&&/src/i.test(e.cssText)&&e.cssText.replace(/\r+|\n+/g,"").indexOf(t.split(" ")[0])===0};n=o('@font-face { font-family: "font"; src: url(data:,); }'),r.removeChild(i);return n},T.video=function(){var e=t.createElement("video"),n=!!e.canPlayType;if(n){n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"');var r='video/mp4; codecs="avc1.42E01E';n.h264=e.canPlayType(r+'"')||e.canPlayType(r+', mp4a.40.2"'),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"')}return n},T.audio=function(){var e=t.createElement("audio"),n=!!e.canPlayType;n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"'),n.mp3=e.canPlayType("audio/mpeg;"),n.wav=e.canPlayType('audio/wav; codecs="1"'),n.m4a=e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;"));return n},T.localstorage=function(){try{return!!localStorage.getItem}catch(e){return!1}},T.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(e){return!1}},T.webWorkers=function(){return!!e.Worker},T.applicationcache=function(){return!!e.applicationCache},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(x.svg,"svg").createSVGRect},T.inlinesvg=function(){var e=t.createElement("div");e.innerHTML="<svg/>";return(e.firstChild&&e.firstChild.namespaceURI)==x.svg},T.smil=function(){return!!t.createElementNS&&/SVG/.test(w.call(t.createElementNS(x.svg,"animate")))},T.svgclippaths=function(){return!!t.createElementNS&&/SVG/.test(w.call(t.createElementNS(x.svg,"clipPath")))};for(var D in T)_(T,D)&&(L=D.toLowerCase(),c[L]=T[D](),k.push((c[L]?"":"no-")+L));c.input||r(),c.crosswindowmessaging=c.postmessage,c.historymanagement=c.history,c.addTest=function(e,t){e=e.toLowerCase();if(!c[e]){t=!!t(),p.className+=" "+(t?"":"no-")+e,c[e]=t;return c}},f(""),m=y=null,h&&e.attachEvent&&function(){var e=t.createElement("div");e.innerHTML="<elem></elem>";return e.childNodes.length!==1}()&&function(e,t){function n(e,t){var r=-1,i=e.length,s,o=[];while(++r<i)s=e[r],(t=s.media||t)!="screen"&&o.push(n(s.imports,t),s.cssText);return o.join("")}function r(e){var t=-1;while(++t<o)e.createElement(s[t])}var i="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",s=i.split("|"),o=s.length,u=new RegExp("(^|\\s)("+i+")","gi"),a=new RegExp("<(/*)("+i+")","gi"),f=new RegExp("(^|[^\\n]*?\\s)("+i+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=t.createDocumentFragment(),c=t.documentElement,h=c.firstChild,p=t.createElement("body"),d=t.createElement("style"),v;r(t),r(l),h.insertBefore(d,h.firstChild),d.media="print",e.attachEvent("onbeforeprint",function(){var e=-1,r=n(t.styleSheets,"all"),i=[],h;v=v||t.body;while((h=f.exec(r))!=null)i.push((h[1]+h[2]+h[3]).replace(u,"$1.iepp_$2")+h[4]);d.styleSheet.cssText=i.join("\n");while(++e<o){var m=t.getElementsByTagName(s[e]),g=m.length,y=-1;while(++y<g)m[y].className.indexOf("iepp_")<0&&(m[y].className+=" iepp_"+s[e])}l.appendChild(v),c.appendChild(p),p.className=v.className,p.innerHTML=v.innerHTML.replace(a,"<$1font")}),e.attachEvent("onafterprint",function(){p.innerHTML="",c.removeChild(p),c.appendChild(v),d.styleSheet.cssText=""})}(e,t),c._enableHTML5=h,c._version=l,p.className=p.className.replace(/\bno-js\b/,"")+" js "+k.join(" ");return c}(this,this.document);