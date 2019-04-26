$(function() {
	var firstInit = 1;
	var specialOption1 = 1;
	wkInit()
	setTimeout(function() {
		firstInit = 0;
	},1000)
	//判斷網址是否帶有特定產業別參數
	var url = location.href;
	if(url.indexOf('?')!=-1) {
		var wktype = "";
		//將各自的參數資料切割放進ary中
		var ary = url.split('?')[1].split('&');

		//下迴圈去搜尋每個資料參數
		for(i=0;i<=ary.length-1;i++) {
			//如果資料名稱為wktype的話那就把他取出來
			if(ary[i].split('=')[0] == 'wktype'){
				wktype = ary[i].split('=')[1];
			}
		}
	}
	if (wktype=="service") {
		$("body").addClass('type-service')
		setTimeout(function() {
			$(".li-cat-1").click();
		},1100)
		setTimeout(function() {
			var randomNumX1 = getRandomInt (101, 109)
			$("ul[data-com-list-1] li.level1 [data-com="+randomNumX1+"]").click();
		},1800)
	}
	if (wktype=="financial") {
		$("body").addClass('type-financial')
		setTimeout(function() {
			$(".li-cat-2").click();
		},1100)
		setTimeout(function() {
			var randomNumX1 = getRandomInt (201, 207)
			$("ul[data-com-list-2] li.level1 [data-com="+randomNumX1+"]").click();
		},1800)
	}
	if (wktype=="technology") {
		$("body").addClass('type-technology')
		setTimeout(function() {
			$(".li-cat-3").click();
		},1100)
		setTimeout(function() {
			var randomNumX1 = getRandomInt (301, 306)
			$("ul[data-com-list-3] li.level1 [data-com="+randomNumX1+"]").click();
		},1800)
	}
	//直播倒數
	$("#countdown-box").countdown("2019/05/8 12:30:00", function(event) {
		if (event.elapsed) {
			//進網頁時，時間已過期
			//alert('already finish')
			$(".live-countdown").addClass('active').html('<span>現正熱映中！</span><span><a href="http://www.104.com.tw/jb/service/ad/TransferAddress?trnid=adn_49367" target="_blank">點我前往！</a></span>')
		}
		$(this).html(
			'<span class="red">'+event.strftime('%D')+'</span>'+
			'<span>'+event.strftime('日')+'</span>'+
			'<span class="red">'+event.strftime('%H')+'</span>'+
			'<span>'+event.strftime('小時')+'</span>'+
			'<span class="red">'+event.strftime('%M')+'</span>'+
			'<span>'+event.strftime('分')+'</span>'+
			'<span class="red">'+event.strftime('%S')+'</span>'+
			'<span>'+event.strftime('秒')+'</span>'
		);
	})

	//回到最上方按鈕
	$(".gotop-outbox").click(function(event) {
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		}, 1000, 'easeInOutCubic');
	});
	$(window).scroll(function(event) {
		var userWidth = $(window).width()
		if (userWidth<800) {
			var scrollTop = $(window).scrollTop()
			var windowHeight = $(window).height()
			if(scrollTop>windowHeight){
				if(!$(".gotop-outbox").hasClass('show')){
					$(".gotop-outbox").addClass('show')
				}
			}else {
				$(".gotop-outbox").removeClass('show')
			}
		}else {
			$(".gotop-outbox").removeClass('show')
		}
	})

	//點擊主視覺的區塊會有動畫效果
	$(".section1 .board1-box").click(function(event) {
		if (!$(this).hasClass('active')) {
			$(".board-outbox >div").removeClass('active')
			$(".board-outbox-mobile >div").removeClass('active')
			$(this).addClass('active')
			$(".freshman-box").removeClass('active1 active2 active3 active4')
			$(".freshman-box").addClass('active1')
			$(".chat-box .text-box").fadeOut(500);
			$(".chat-box .npc-box .npc").fadeOut(500);
			setTimeout(function(argument) {
				$(".chat-box .text-box1").fadeIn(500);
				$(".chat-box .npc-box .npc1").fadeIn(500);
			},500)

			var userWidth = $(window).width()
			//if (userWidth>1600) {
				var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$body.animate({
					scrollTop: 200
				}, 1000, 'easeInOutCubic');
			//}
		}else {
			$(this).removeClass('active')
			$(".freshman-box").removeClass('active1')
		}
	});
	$(".section1 .board2-box").click(function(event) {
		if (!$(this).hasClass('active')) {
			$(".board-outbox >div").removeClass('active')
			$(".board-outbox-mobile >div").removeClass('active')
			$(this).addClass('active')
			$(".freshman-box").removeClass('active1 active2 active3 active4')
			$(".freshman-box").addClass('active2')
			$(".chat-box .text-box").fadeOut(500);
			$(".chat-box .npc-box .npc").fadeOut(500);
			setTimeout(function(argument) {
				$(".chat-box .text-box2").fadeIn(500);
				$(".chat-box .npc-box .npc2").fadeIn(500);
			},500)
			var userWidth = $(window).width()
			if (userWidth>800) {
				var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$body.animate({
					scrollTop: 200
				}, 1000, 'easeInOutCubic');
			}else {
				// var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				// $body.animate({
				// 	scrollTop: $(".category-mobile-box .category-1").offset().top-30
				// }, 1000, 'easeInOutCubic');
				var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$body.animate({
					scrollTop: 100
				}, 1000, 'easeInOutCubic');
			}
		}else {
			$(this).removeClass('active')
			$(".freshman-box").removeClass('active2')
			$(".chat-box .npc-box .npc").fadeOut(500);
			$(".chat-box .text-box2").fadeOut(500);
			setTimeout(function(argument) {
				$(".chat-box .npc-box .npc1").fadeIn(500);
				$(".chat-box .text-box1").fadeIn(500);
			},500)
		}
	});
	$(".section1 .board3-box").click(function(event) {
		if (!$(this).hasClass('active')) {
			$(".board-outbox >div").removeClass('active')
			$(".board-outbox-mobile >div").removeClass('active')
			$(this).addClass('active')
			$(".freshman-box").removeClass('active1 active2 active3 active4')
			$(".freshman-box").addClass('active3')
			$(".chat-box .text-box").fadeOut(500);
			$(".chat-box .npc-box .npc").fadeOut(500);
			setTimeout(function(argument) {
				$(".chat-box .text-box3").fadeIn(500);
				$(".chat-box .npc-box .npc3").fadeIn(500);
			},500)
			var userWidth = $(window).width()
			if (userWidth>800) {
				var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$body.animate({
					scrollTop: 200
				}, 1000, 'easeInOutCubic');
			}else {
				// var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				// $body.animate({
				// 	scrollTop: $(".category-mobile-box .category-2").offset().top-30
				// }, 1000, 'easeInOutCubic');
				var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$body.animate({
					scrollTop: 100
				}, 1000, 'easeInOutCubic');
			}
		}else {
			$(this).removeClass('active')
			$(".freshman-box").removeClass('active3')
			$(".chat-box .npc-box .npc").fadeOut(500);
			$(".chat-box .text-box3").fadeOut(500);
			setTimeout(function(argument) {
				$(".chat-box .npc-box .npc1").fadeIn(500);
				$(".chat-box .text-box1").fadeIn(500);
			},500)
		}
	});
	$(".section1 .board4-box").click(function(event) {
		if (!$(this).hasClass('active')) {
			$(".board-outbox >div").removeClass('active')
			$(".board-outbox-mobile >div").removeClass('active')
			$(this).addClass('active')
			$(".freshman-box").removeClass('active1 active2 active3 active4')
			$(".freshman-box").addClass('active4')
			$(".chat-box .text-box").fadeOut(500);
			$(".chat-box .npc-box .npc").fadeOut(500);
			setTimeout(function(argument) {
				$(".chat-box .text-box4").fadeIn(500);
				$(".chat-box .npc-box .npc4").fadeIn(500);
			},500)
			var userWidth = $(window).width()
			if (userWidth>800) {
				var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$body.animate({
					scrollTop: 200
				}, 1000, 'easeInOutCubic');
			}else {
				// var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				// $body.animate({
				// 	scrollTop: $(".category-mobile-box .category-3").offset().top-30
				// }, 1000, 'easeInOutCubic');
				var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$body.animate({
					scrollTop: 100
				}, 1000, 'easeInOutCubic');
			}
		}else {
			$(this).removeClass('active')
			$(".freshman-box").removeClass('active4')
			$(".chat-box .npc-box .npc").fadeOut(500);
				$(".chat-box .text-box4").fadeOut(500);
			setTimeout(function(argument) {
				$(".chat-box .npc-box .npc1").fadeIn(500);
				$(".chat-box .text-box1").fadeIn(500);
			},500)
		}
	});

	//點擊主視覺區塊的對話框內引導按鈕
	//入口區塊
	$(".chat-box .text-box1 .btn1").click(function(event) {
		cancelHandler(event)
		var userWidth = $(window).width()
		if (userWidth>800) {
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $(".section2 .text-box .flag").offset().top-30
			}, 1000, 'easeInOutCubic');
		}else {
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $(".category-mobile-box .category-1").offset().top-30
			}, 1000, 'easeInOutCubic');
		}
	})
	//服務區塊
	$(".chat-box .text-box2 .btn3").click(function(event) {
		cancelHandler(event)
		var userWidth = $(window).width()
		if (userWidth>800) {
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $(".section2 .text-box .flag").offset().top
			}, 1000, 'easeInOutCubic');
			setTimeout(function(argument) {
				$(".li-cat-1").click();
			},1500)
		}else {
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $(".category-mobile-box .category-1").offset().top-30
			}, 1000, 'easeInOutCubic');
		}
	})
	//金融區塊
	$(".chat-box .text-box3 .btn3").click(function(event) {
		cancelHandler(event)
		var userWidth = $(window).width()
		if (userWidth>800) {
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $(".section2 .text-box .flag").offset().top
			}, 1000, 'easeInOutCubic');
			setTimeout(function(argument) {
				$(".li-cat-2").click();
			},1500)
		}else {
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $(".category-mobile-box .category-2").offset().top-30
			}, 1000, 'easeInOutCubic');
		}
	})
	//科技區塊
	$(".chat-box .text-box4 .btn3").click(function(event) {
		cancelHandler(event)
		var userWidth = $(window).width()
		if (userWidth>800) {
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $(".section2 .text-box .flag").offset().top
			}, 1000, 'easeInOutCubic');
			setTimeout(function(argument) {
				$(".li-cat-3").click();
			},1500)
		}else {
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: $(".category-mobile-box .category-3").offset().top
			}, 1000, 'easeInOutCubic');
		}
	})



	//點擊hintman畫面返回到你的主場區塊
	$(".hintman-circle,.hintman-inbox,.hintman-arrow").click(function(event) {
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $(".section2").offset().top
		}, 1000, 'easeInOutCubic');

		//觸發hintman
		anchorOption1 = 1;
		setTimeout(function() {
			//hintman跳動
			$(".jumpElement, .hintman").addClass('active')
			setTimeout(function() {
				$(".jumpElement, .hintman").removeClass('active')
			},800)
			//控制文字區塊顯示
			$(".hintman-box .text-box").addClass('active')
			$(".hintman-box .text-box .text1").addClass('active')
			setTimeout(function() {
				$(".hintman-box .text-box").removeClass('active')
				$(".hintman-box .text-box .text1").removeClass('active')
				anchorOption1 = 0
			},2000)
		},700)
	});

	//偵測捲軸高度判斷hintman說話時機
	var target1 = $(".section2 .text-box .flag").offset().top;
	var target2 = $(".company-box").offset().top+100;
	var target3 = $(document).height() - $(window).height();
	var anchorOption1 = 0;
	var anchorOption2 = 0;
	var anchorOption3 = 0;
	$(window).scroll(function(event) {
		target3 = $(document).height() - $(window).height()
		// console.log($(window).scrollTop())
		// console.log(target3)
		// console.log('specialOption1='+specialOption1)
		var nowOffset = ($(window).scrollTop() + $(window).height()/2)
		//console.log('target1='+target1+' ,現在螢幕中間的位置是'+($(window).scrollTop() + $(window).height()/2))
		 if (nowOffset > target1) {
		 	if (!$(".hintman-outbox").hasClass('show')) {
		 		$(".hintman-outbox").addClass('show')
		 	}
		 }else {
			$(".hintman-outbox").removeClass('show')
		 }
		if (nowOffset > target1-20 && nowOffset < target1+20) {
			if (anchorOption1 == 0 && anchorOption2 == 0 && anchorOption3 == 0) {
				anchorOption1 = 1;
				//hintman跳動
				$(".hintman").addClass('active')
				setTimeout(function() {
					$(".jumpElement, .hintman").removeClass('active')
				},800)
				//控制文字區塊顯示
				$(".hintman-box .text-box").addClass('active')
				$(".hintman-box .text-box .text1").addClass('active')
				setTimeout(function() {
					$(".hintman-box .text-box").removeClass('active')
					$(".hintman-box .text-box .text1").removeClass('active')
					anchorOption1 = 0
				},2000)
			}

		}
		else if (nowOffset > target2-20 && nowOffset < target2+20) {
			if (anchorOption1 == 0 && anchorOption2 == 0 && anchorOption3 == 0) {
				anchorOption2 = 1;
				//hintman跳動
				$(".hintman").addClass('active')
				setTimeout(function() {
					$(".jumpElement, .hintman").removeClass('active')
				},800)
				//控制文字區塊顯示
				$(".hintman-box .text-box").addClass('active')
				$(".hintman-box .text-box .text2").addClass('active')
				setTimeout(function() {
					$(".hintman-box .text-box").removeClass('active')
					$(".hintman-box .text-box .text2").removeClass('active')
					anchorOption2 = 0
				},2000)
			}
		}
		else if ($(window).scrollTop() == target3) {

			if (specialOption1 >= 2) {
				if (anchorOption1 == 0 && anchorOption2 == 0 && anchorOption3 == 0) {
					anchorOption3 = 1;
					//hintman跳動
					$(".jumpElement, .hintman").addClass('active')
					setTimeout(function() {
						$(".jumpElement, .hintman").removeClass('active')
					},800)
					//控制文字區塊顯示
					$(".hintman-box .text-box").addClass('active')
					$(".hintman-box .text-box .text3").addClass('active')
					setTimeout(function() {
						$(".hintman-box .text-box").removeClass('active')
						$(".hintman-box .text-box .text3").removeClass('active')
						anchorOption3 = 0
					},2000)

					//控制箭頭顯示
					$(".hintman-arrow").addClass('active')

					//footer人物跳動
					footerJump ()

				}
			}

		}
		else {
			$(".hintman-arrow").removeClass('active')
		}
	})

	$('.company').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow:"<span class='slick-prev'></span>",
            nextArrow:"<span class='slick-next'></span>",
		autoplay: true,
		autoplaySpeed: 3000,
	});
	$(".company").fadeOut(500)

	// $('.category-mobile-box').slick({
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	// centerMode: true,
	// 	// variableWidth: true,
	// 	prevArrow:"<span class='slick-prev'></span>",
 //            nextArrow:"<span class='slick-next'></span>",
	// 	// autoplay: true,
	// 	// autoplaySpeed: 2000,
	// });

	var tabAnimated = 1;
	$(".category-front li").click(function(event) {
		if (tabAnimated == 1) {

			tabAnimated = 0;
			var thisAttr = $(this).attr('data-tab');
			// $(".category-back li").removeClass('active')
			$(".category-front li").removeClass('active')
			$(".company").fadeOut(300)
			$(".inset-box").fadeOut(100)
			//預防螢幕寬度有改變產生的bug,先更新一次slider
			setTimeout(function() {
				$('[data-com-list-1]')[0].slick.refresh()
				$('[data-com-list-2]')[0].slick.refresh()
				$('[data-com-list-3]')[0].slick.refresh()
			},100)


			$(this).addClass('active');
			$(".section3 .bg-box").removeClass('bg1 bg2 bg3')
			$(".section3 .bg-box").addClass('bg'+thisAttr)
			// setTimeout(function() {
			// 	$("[data-tab-front-"+thisAttr+"]").addClass('active');
			// 	$("[data-com-list-"+thisAttr+"]").fadeIn(700)
			// },300)
			$("[data-com-list-"+thisAttr+"]").fadeIn(700)

			//觸發hintman
			// anchorOption1 = 1;
			// setTimeout(function() {
			// 	//hintman跳動
			// 	$(".hintman").addClass('active')
			// 	setTimeout(function() {
			// 		$(".hintman").removeClass('active')
			// 	},800)
			// 	//控制文字區塊顯示
			// 	$(".hintman-box .text-box").addClass('active')
			// 	$(".hintman-box .text-box .text2").addClass('active')
			// 	setTimeout(function() {
			// 		$(".hintman-box .text-box").removeClass('active')
			// 		$(".hintman-box .text-box .text2").removeClass('active')
			// 		anchorOption1 = 0
			// 	},2000)
			// },1400)


			setTimeout(function() {
				tabAnimated = 1;
			},500)
			if(firstInit==0){
				$(".company").slick('slickNext')
				setTimeout(function() {
					var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
					$body.animate({
						scrollTop: $(".section3 .front-box").offset().top
					}, 1000, 'easeInOutCubic');
				},700)
			}

		}else {
			return false
		}
	});

	//點選公司logo後出現該公司簡介、職缺
	$("ul.company .com").click(function(event) {
		//cancelHandler(event);
		specialOption1 = specialOption1+1
		$("ul.company .com").removeClass('active')
		$(this).addClass('active');
		var comNum = $(this).attr('data-com')
		$(".inset-box").fadeOut(100)

		setTimeout(function(argument) {
			$("[data-com-detail="+comNum+"]").fadeIn(500)
		},90)
		setTimeout(function(argument) {
			if(firstInit==0){
				var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
				$body.animate({
					scrollTop: $("[data-com-detail="+comNum+"] .company-detail-box").offset().top-30
				}, 1000, 'easeInOutCubic');
			}
		},150)


	});

	//職缺列表區塊的背景人物隨機跳動
	setInterval(function() {
		var randomNumA = getRandomInt (1, 18)
		var randomNumB = getRandomInt (1, 18)
		var randomNumC = getRandomInt (1, 18)
		var randomTargetA = $(".section1 .p"+randomNumA)
		var randomTargetB = $(".section1 .p"+randomNumB)
		var randomTargetC = $(".section1 .p"+randomNumC)
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

	//職缺列表區塊的背景人物隨機跳動
	setInterval(function() {
		var randomNum2 = getRandomInt (1, 5)
		var randomTarget = $("[data-decoration-people="+randomNum2+"]")
		randomTarget.addClass('active')
		setTimeout(function() {
			randomTarget.removeClass('active')
		},800)
	},3000)



	setInterval(function () {
		$(".freshman1").addClass('active')
		setTimeout(function(){
			$(".freshman2").addClass('active')
		},50)
		setTimeout(function(){
			$(".freshman1").removeClass('active')
			$(".freshman2").removeClass('active')
		},850)
	},3000)
})

//控制頁面剛進來時，需要啟動哪個職場類別
function wkInit() {
	var randomNum1 = getRandomInt (1, 3) //三個類別隨機取一個
	var liNum = $(".company-box ul:nth-child("+randomNum1+") li.level1").length //取得該類別有幾個slide
	var randomNum2  = getRandomInt (1, liNum) //該類別的slide隨機取一個
	var Num2 = randomNum2-1;

	var slickLogoNum = $(".company-box ul:nth-child("+randomNum1+") li.level1:nth-child("+randomNum2+") .com").length
	var randomNum3 = getRandomInt (1, slickLogoNum)
	setTimeout(function() {
		//展開隨機一個類別
		$(".category-front li:nth-child("+randomNum1+")").trigger("click");
		//slider跳轉至隨機一個slide
		$(".company").slick('slickGoTo',Num2)
		//展開隨機一個公司職缺
		//$(".company-box ul:nth-child("+randomNum1+") li.level1.slick-active .com:nth-child("+randomNum3+")").addClass('active').trigger("click");
	},100)
}

//footer人物一次性跳動
function footerJump () {
	setTimeout(function() {
		$(".people1").addClass('active')
		setTimeout(function() {
			$(".people1").removeClass('active')
		},700)
	},70)
	setTimeout(function() {
		$(".people2").addClass('active')
		setTimeout(function() {
			$(".people2").removeClass('active')
		},700)
	},140)
	setTimeout(function() {
		$(".people3").addClass('active')
		setTimeout(function() {
			$(".people3").removeClass('active')
		},700)
	},210)
	setTimeout(function() {
		$(".people4").addClass('active')
		setTimeout(function() {
			$(".people4").removeClass('active')
		},700)
	},280)
	setTimeout(function() {
		$(".people5").addClass('active')
		setTimeout(function() {
			$(".people5").removeClass('active')
		},700)
	},350)
	setTimeout(function() {
		$(".people6").addClass('active')
		setTimeout(function() {
			$(".people6").removeClass('active')
		},700)
	},420)
	setTimeout(function() {
		$(".people7").addClass('active')
		setTimeout(function() {
			$(".people7").removeClass('active')
		},700)
	},490)
}





