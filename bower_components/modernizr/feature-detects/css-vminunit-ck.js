// https://github.com/Modernizr/Modernizr/issues/572
// http://jsfiddle.net/glsee/JRmdq/8/
Modernizr.addTest("cssvminunit",function(){var e;Modernizr.testStyles("#modernizr { width: 50vmin; }",function(t,n){var r=window.innerWidth/100,i=window.innerHeight/100,s=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);e=parseInt(Math.min(r,i)*50,10)==s});return e});