$(function() {
	AOS.init({
		offset: 300,
		duration: 500
	});

	//FB分享按鈕
	window.fbAsyncInit = function() {
		FB.init({
			//appId      : '1207697892719715',
			appId      : '402052547036064',
			xfbml      : true,
			version    : 'v3.2'
		});
		FB.AppEvents.logPageView();
	};
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	//替換FB粉分享按鈕連結為當前頁面
	//document.querySelector(".wk-fb-share").onclick=function(){
	$(".wk-fb-share").click(function(event) {
		//alert('Facebook分享按鈕')
		var src = location.href
		FB.ui({
			method: 'share',
			display: 'popup',
			href: src,
			hashtag: '#前進吧你的主場'
		}, function(response){});
	});


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
