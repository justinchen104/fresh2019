$(function() {
	AOS.init({
		offset: 0,
		duration: 500
	});

	//回到最上方按鈕
	$(".gotop-outbox").click(function(event) {
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		}, 1000, 'easeInOutCubic');
	});
	$(window).scroll(function(event) {
		var scrollTop = $(window).scrollTop()
		var windowHeight = $(window).height()
		if(scrollTop>windowHeight){
			if(!$(".gotop-outbox").hasClass('show')){
				$(".gotop-outbox").addClass('show')
			}
		}else {
			$(".gotop-outbox").removeClass('show')
		}
	})
})


