$(function() {
	setTimeout(function(argument) {
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		var userWidth = $(window).width();
		if (userWidth>800) {
			$body.animate({
				scrollTop: $(".section-5 .container").offset().top-120
			}, 1000, 'easeInOutCubic');
		}else {
			$body.animate({
				scrollTop: $(".section-5m img:first-child").offset().top-100
			}, 1000, 'easeInOutCubic');
		}
	},1000)
})


