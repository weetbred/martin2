// last-child pseudo selector
// https://github.com/Modernizr/Modernizr/pull/304
Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){return e.lastChild.offsetWidth>e.firstChild.offsetWidth},2)});