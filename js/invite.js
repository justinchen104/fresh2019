$(function() {
	AOS.init({
		offset: 0,
		duration: 500
	});



	//section2區塊的背景人物隨機跳動
	setInterval(function() {
		var randomNumA = getRandomInt (1, 15)
		var randomNumB = getRandomInt (1, 15)
		var randomNumC = getRandomInt (1, 15)
		var randomTargetA = $(".section2 .p"+randomNumA)
		var randomTargetB = $(".section2 .p"+randomNumB)
		var randomTargetC = $(".section2 .p"+randomNumC)
		setTimeout(function() {
			randomTargetA.addClass('active')
			setTimeout(function() {
				randomTargetA.removeClass('active')
			},800)
		},100)
		setTimeout(function() {
			randomTargetB.addClass('active')
			setTimeout(function() {
				randomTargetB.removeClass('active')
			},800)
		},200)
		setTimeout(function() {
			randomTargetC.addClass('active')
			setTimeout(function() {
				randomTargetC.removeClass('active')
			},800)
		},300)
	},3000)

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


