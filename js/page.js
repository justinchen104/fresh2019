$(function() {
	//判斷若為IE，則刪除文字牆動畫效果，此效果會讓IE非常lag
	if (window.ActiveXObject || "ActiveXObject" in window){
		$(".section8 .text-box").remove();
	}
	var messageInitSlide = 0;
	//手機版主視覺下方區塊的背景人物隨機跳動
	// setInterval(function() {
	// 	var randomNum1 = getRandomInt (1, 6)
	// 	var randomNum2 = getRandomInt (7, 12)
	// 	var randomNum3 = getRandomInt (13, 18)
	// 	var randomTarget1 = $(".section2 .dec-mobile .p"+randomNum1)
	// 	var randomTarget2 = $(".section2 .dec-mobile .p"+randomNum2)
	// 	var randomTarget3 = $(".section2 .dec-mobile .p"+randomNum3)
	// 	randomTarget1.addClass('active')
	// 	setTimeout(function() {randomTarget2.addClass('active')},50)
	// 	setTimeout(function() {randomTarget3.addClass('active')},100)
	// 	setTimeout(function() { randomTarget1.removeClass('active') },800)
	// 	setTimeout(function() { randomTarget2.removeClass('active') },850)
	// 	setTimeout(function() { randomTarget3.removeClass('active') },900)
	// },1200)

	//電腦版主視覺下方區塊的背景人物隨機跳動
	setInterval(function() {
		var randomNum1 = getRandomInt (1, 6)
		var randomNum2 = getRandomInt (7, 12)
		var randomNum3 = getRandomInt (13, 18)
		var randomTarget1 = $(".section2 .stageTop-people-box .p"+randomNum1)
		var randomTarget2 = $(".section2 .stageTop-people-box .p"+randomNum2)
		var randomTarget3 = $(".section2 .stageTop-people-box .p"+randomNum3)
		randomTarget1.addClass('active')
		setTimeout(function() {randomTarget2.addClass('active')},50)
		setTimeout(function() {randomTarget3.addClass('active')},100)
		setTimeout(function() { randomTarget1.removeClass('active') },800)
		setTimeout(function() { randomTarget2.removeClass('active') },850)
		setTimeout(function() { randomTarget3.removeClass('active') },900)
	},2000)

	$('.company').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// centerMode: true,
		// variableWidth: true,
		prevArrow:"<span class='slick-prev'></span>",
		nextArrow:"<span class='slick-next'></span>",
		infinite: true,
		// autoplay: true,
		// autoplaySpeed: 2000,
		// responsive: [
		// 	{
		// 		breakpoint: 800,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 			infinite: true,
		// 		}
		// 	},
		//
	});


	//螢幕寬度有改變則更新slider
	var resizeTimerTitle = false;
	$(window).on("resize", function() {
		if (resizeTimerTitle) {
			clearTimeout(resizeTimerTitle);
		}
		resizeTimerTitle = setTimeout(doResizeTitle, 300);
	});

	function doResizeTitle() {
		$('.company')[0].slick.refresh()
		$('.company.mobile')[0].slick.refresh()
		if ($('.message-board-box').length) {$('.message-board-box')[0].slick.refresh()}
	}

	$('.section3 .stage .img-box').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// centerMode: true,
		// variableWidth: true,
		prevArrow:"<span class='slick-prev'></span>",
		nextArrow:"<span class='slick-next'></span>",
		// autoplay: true,
		// autoplaySpeed: 2000,
	});

	// $('.wood-box-mobile').slick({
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	prevArrow:"<span class='slick-prev'></span>",
	// 	nextArrow:"<span class='slick-next'></span>",
	// 	// autoplay: true,
	// 	// autoplaySpeed: 2000,
	// });

	// workaround: 因為回覆卡片是透過ajax取資料，故五秒後再加上slick
	setTimeout(function(){

		//留言板slider
		$('.message-board-box').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			prevArrow:"<span class='slick-prev'></span>",
			nextArrow:"<span class='slick-next'></span>",
		});

		setTimeout(function () {
			$(".message-board-box .slick-next").click();
		},500)
		setTimeout(function () {
			$(".message-board-box .slick-prev").click();
			messageInitSlide = 1;
		},1200)

		//留言提問者小頭貼隨機取圖
		$(".message-board-box .message:not('.niming') .question-box .name img").each(function(index, el) {
			$(this).attr('src','img/page/page/section8-icon/'+getRandomInt (1, 7)+'.png')
		});
	}, 5000);


	//手機版留言板換頁時滾動捲軸至留言板頂端
	$(".section8 .message-board-box.mobile .slick-arrow").click(function(event) {
		if(messageInitSlide == 1){
			var anchorMessageBoard = $(".section8 .message-board-box.mobile").offset().top;
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: anchorMessageBoard
			}, 700, 'easeInOutCubic');
		}
	});

	//手機版點擊「我要留言」時展開表單
	$(".form-open-btn").click(function(event) {
		$(".form-out-box").show(500)
		$(".form-open-btn").hide(300)
	});

	//勾選私密留言聯動按鈕旁的鎖頭icon與文字
	$(".label-checkmark").change(function(event) {
		if ($(".lock-icon").hasClass('lock')) {
			$(".lock-icon").removeClass('lock')
			$(".lock-text").text('開放留言')
		}else {
			$(".lock-icon").addClass('lock')
			$(".lock-text").text('私密留言')
		}
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

	//手機留言板字級bug
	setTimeout(function() {
		$(".message-board-box.mobile .message-board .message span").css('display', 'inline-block');
	},1000)
	setTimeout(function() {
		$(".message-board-box.mobile .message-board .message span").css('display', '');
	},1100)

})
