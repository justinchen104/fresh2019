$(function() {
	skrollr.init({
		smoothScrolling: true,
		smoothScrollingDuration: 1000,
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		},
		// render: function(data) {
		// 	//Log the current scroll position.
		// 	console.log(data);
		// 	if (!$(".fresh-man").hasClass('active')) {
		// 		$(".fresh-man").addClass('active')
		// 	}
		// }

	});
	$(".section3 .wkpeople21-box").mouseover(function (argument) {
		if (!$(this).hasClass('wkactive')) { $(this).addClass('wkactive')}
	})
	//section2區塊的背景人物隨機跳動
	setInterval(function() {
		var randomNumA = getRandomInt (1, 11)
		var randomNumB = getRandomInt (1, 11)
		var randomNumC = getRandomInt (1, 11)
		var randomTargetA = $(".section2 .wkpeople"+randomNumA)
		var randomTargetB = $(".section2 .wkpeople"+randomNumB)
		var randomTargetC = $(".section2 .wkpeople"+randomNumC)
		setTimeout(function() {
			randomTargetA.addClass('active')
			setTimeout(function() { randomTargetA.removeClass('active') },800)
		},100)
		setTimeout(function() {
			randomTargetB.addClass('active')
			setTimeout(function() { randomTargetB.removeClass('active') },800)
		},200)
		setTimeout(function() {
			randomTargetC.addClass('active')
			setTimeout(function() { randomTargetC.removeClass('active') },800)
		},300)
	},3000)
	//section3區塊的背景人物隨機跳動
	setInterval(function() {
		var randomNumA = getRandomInt (1, 16)
		var randomNumB = getRandomInt (1, 16)
		var randomNumC = getRandomInt (1, 16)
		var randomTargetA = $(".section3 .wkpeople"+randomNumA)
		var randomTargetB = $(".section3 .wkpeople"+randomNumB)
		var randomTargetC = $(".section3 .wkpeople"+randomNumC)
		setTimeout(function() {
			randomTargetA.addClass('active')
			setTimeout(function() { randomTargetA.removeClass('active') },800)
		},100)
		setTimeout(function() {
			randomTargetB.addClass('active')
			setTimeout(function() { randomTargetB.removeClass('active') },800)
		},200)
		setTimeout(function() {
			randomTargetC.addClass('active')
			setTimeout(function() { randomTargetC.removeClass('active') },800)
		},300)
	},3000)
	setInterval(function() {
		var randomNumA = getRandomInt (19, 28)
		var randomNumB = getRandomInt (19, 28)
		var randomNumC = getRandomInt (19, 28)
		var randomTargetA = $(".section3 .wkpeople"+randomNumA)
		var randomTargetB = $(".section3 .wkpeople"+randomNumB)
		var randomTargetC = $(".section3 .wkpeople"+randomNumC)
		setTimeout(function() {
			randomTargetA.addClass('active')
			setTimeout(function() { randomTargetA.removeClass('active') },800)
		},100)
		setTimeout(function() {
			randomTargetB.addClass('active')
			setTimeout(function() { randomTargetB.removeClass('active') },800)
		},200)
		setTimeout(function() {
			randomTargetC.addClass('active')
			setTimeout(function() { randomTargetC.removeClass('active') },800)
		},300)
	},1000)
	//section6區塊的背景人物隨機跳動
	setInterval(function() {
		var randomNumA = getRandomInt (1, 3)
		var randomTargetA = $(".section6 .wkpeople"+randomNumA)
		setTimeout(function() {
			randomTargetA.addClass('active')
			setTimeout(function() { randomTargetA.removeClass('active') },800)
		},100)
	},2000)
	//section6 輸送帶動畫效果啟動
	setTimeout(function() { $(".clothes2").addClass('active') },1250 )
	setTimeout(function() { $(".clothes3").addClass('active') },2500 )
	setTimeout(function() { $(".clothes4").addClass('active') },3750 )
	setTimeout(function() { $(".head1").addClass('active') },1250 )
	setTimeout(function() { $(".head2").addClass('active') },2500 )
	setTimeout(function() { $(".head3").addClass('active') },3750 )
	setTimeout(function() { $(".head4").addClass('active') },5000 )

	//黛拉變身
	$(".wrap .section.section6 .section-wrap .item11 .wkpeople2-light").click(function(event) {
		if (!$(".section6 .wkpeople2").hasClass('wkactive')) {
			$(".section6 .wkpeople2,.section6 .wkpeople2-light").addClass('wkactive')
		}else {
			$(".section6 .wkpeople2,.section6 .wkpeople2-light").removeClass('wkactive')
		}
	})
	//手手變身
	$(".wrap .section.section6 .section-wrap .item11 .wkpeople3-light").click(function(event) {
		if (!$(".section6 .wkpeople3").hasClass('wkactive')) {
			$(".section6 .wkpeople3,.section6 .wkpeople3-light").addClass('wkactive')
		}else {
			$(".section6 .wkpeople3,.section6 .wkpeople3-light").removeClass('wkactive')
		}
	})
	//控制開啟手機版header選單
	$("header .menu-btn").click(function(event) {
		if($(".mobile-menu-out-box").hasClass('hide')) {
			$(".mobile-menu-out-box").removeClass('hide')
			setTimeout(function() {
				$(".link-menu .li1").removeClass('hide')
				$("html").css('position','fixed')
			},700)
			setTimeout(function() {
				$(".link-menu .li2").removeClass('hide')
			},1200)
			setTimeout(function() {
				$(".link-menu .li3").removeClass('hide')
			},1700)
			setTimeout(function() {
				$(".link-menu .li4").removeClass('hide')
			},2200)
			setTimeout(function() {
				$(".link-menu .li5").removeClass('hide')
			},2700)
		}
	});
	//控制關閉手機版header選單
	$(".mobile-menu-out-box .close").click(function(event) {
		if(!$(".mobile-menu-out-box").hasClass('hide')) {
			$(".mobile-menu-out-box").addClass('hide')
			$("html").css('position','static')
			setTimeout(function() {
				$(".link-menu li").addClass('hide')
			},700)
		}
	});


	//控制footer人物hover跳動
	$(".people-box .people").mouseover(function(event) {
		var target = $(this)
		if (!target.hasClass('active')) {
			target.addClass('active')
			setTimeout(function() {
				target.removeClass('active')
			},700)
		}
	});

	//控制小人物hover跳動
	$(".jumpElement").mouseover(function(event) {
		var target = $(this)
		if (!target.hasClass('active')) {
			target.addClass('active')
			setTimeout(function() {
				target.removeClass('active')
			},800)
		}
	});
	$(".floatElement").mouseover(function(event) {
		var target = $(this)
		if (!target.hasClass('active')) {
			target.addClass('active')
			setTimeout(function() {
				target.removeClass('active')
			},2000)
		}
	});
})
//阻止預設事件
function cancelHandler(event){
	var event = event || window.event;  //用于IE
	if(event.preventDefault) event.preventDefault();  //标准技术
	if(event.returnValue) event.returnValue = false;  //IE
	return false;   //用于处理使用对象属性注册的处理程序
}
function stopPropagation(event){
	window.event? window.event.cancelBubble = true : e.stopPropagation();
}
//取隨機
function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}