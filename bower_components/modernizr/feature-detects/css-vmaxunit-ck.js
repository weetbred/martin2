// https://github.com/Modernizr/Modernizr/issues/572
// http://jsfiddle.net/glsee/JDsWQ/4/
Modernizr.addTest("cssvmaxunit",function(){var e;Modernizr.testStyles("#modernizr { width: 50vmax; }",function(t,n){var r=window.innerWidth/100,i=window.innerHeight/100,s=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);e=parseInt(Math.max(r,i)*50,10)==s});return e});