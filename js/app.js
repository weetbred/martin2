// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
	$('a').each(function() {
		if($(this).attr('href').indexOf("#") > -1) {
			$(this).click(function() {
				$($(this).attr('href') ).ScrollTo();
			});
		}
	});

    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

// DIPLO ROTATOR 
// Simple jQuery background image rotator plug-in by Dan 'Diplo' Booth 
	$("html").bgrotate({
		delay: 3000,
		imagedir: "img/",
		images: ["img-railroadpark-bg.jpg", "birmingham-skyline.jpg", "img-railroadpark-bg.jpg", "birmingham-skyline.jpg"
		] });

});