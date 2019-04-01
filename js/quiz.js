$(function() {
	AOS.init({
		offset: 0,
		duration: 500
	});

	//發送測驗案問卷表單
	$("#quizForm .btn.submit").click(function(event) {
		cancelHandler(event)
		//防呆判斷
		var wkName =  $("#quizForm #name").val(); //姓名
		var wkTel =  $("#quizForm #tel").val(); //行動電話
		var wkLesson = $("#quizForm #lesson").val(); //免費進修項目
		var wkCity = $("#quizForm #city").val(); //分校縣市
		var wkSchool = $("#quizForm #school").val(); //分校
		var wkAgree = $("#agree").prop("checked")
		if (!wkAgree){
			alert('請確認已勾選 同意提供資料')
		} else if (wkName==0 || wkTel==0 || wkLesson==0 || wkCity==0 || wkSchool==0) {
			alert('請確認已填寫所有必填欄位')
		} else {
			$("#quizForm .submit").addClass('disabled')
			//接口
			// $.ajax({
			// 	url: '',
			// 	type: 'POST',
			// 	data: {
			// 		Name: wkName,
			// 		Tel: wkTel,
			// 		Lesson: wkLesson,
			// 		City: wkCity,
			// 		School: wkSchool
			// 	},
			// 	success: function(response) {
			// 		$("#quizForm").submit();
			// 	},
			// 	error: function(xhr) {
			// 		alert('Ajax request 發生錯誤');
			// 	},
			// 	complete: function() {
			// 		$("#quizForm .submit").removeClass('disabled')
			//
			// 	}
			// });
			window.location.href = 'quiz-result1.html';//demo用
		}

	});
	// $("#quizForm").submit(function(event) {
	// 	cancelHandler(event)
	// 	//防呆判斷
	// 	var wkName =  $("#quizForm #name").val(); //姓名
	// 	var wkTel =  $("#quizForm #tel").val(); //行動電話
	// 	var wkLesson = $("#quizForm #lesson").val(); //免費進修項目
	// 	var wkCity = $("#quizForm #city").val(); //分校縣市
	// 	var wkSchool = $("#quizForm #school").val(); //分校
	// 	var wkAgree = $("#agree").prop("checked")
	// 	//alert("wkName="+wkName+"wkTel="+wkTel+"wkLesson="+wkLesson+"wkCity="+wkCity+"wkSchool="+wkSchool);
	// 	if (!wkAgree){
	// 		alert('請確認已勾選 同意提供資料')
	// 	} else if (wkName==0 || wkTel==0 || wkLesson==0 || wkCity==0 || wkSchool==0) {
	// 		alert('請確認已填寫所有必填欄位')
	// 	} else {
	// 		$("#quizForm .submit").addClass('disabled')
	// 		//接口
	// 		// $.ajax({
	// 		// 	url: '',
	// 		// 	type: 'POST',
	// 		// 	data: {
	// 		// 		Name: wkName,
	// 		// 		Tel: wkTel,
	// 		// 		Lesson: wkLesson,
	// 		// 		City: wkCity,
	// 		// 		School: wkSchool
	// 		// 	},
	// 		// 	success: function(response) {
	// 		// 		alert('謝謝你的留言，請靜待HR的回覆。')
	// 		//		window.location.href = 'quiz-result.html';
	// 		// 	},
	// 		// 	error: function(xhr) {
	// 		// 		alert('Ajax request 發生錯誤');
	// 		// 	},
	// 		// 	complete: function() {
	// 		// 		$("#quizForm .submit").removeClass('disabled')
	// 		//
	// 		// 	}
	// 		// });
	// 		window.location.href = 'quiz-result.html';
	// 	}
	// })


	//控制卡片翻轉動畫與紀錄以抽選的卡片編號
	var pickNum = 0;
	var pickCardNum = [];
	$(".flip_wrap").click(function(event) {
		if (!$(this).hasClass('open')) {
			if (pickNum < 3 ) {
				$(this).addClass('open')
				//$(this).find('.flip').addClass('back')
				pickCardNum.push($(this).attr('data-card-num'))
				pickNum++
				//console.log("已經抽了幾張："+pickNum)
				console.log("已挑選的卡片號碼："+pickCardNum)
			}
		}else {
			if (pickNum < 4 ) {
				$(this).removeClass('open')
				//$(this).find('.flip').removeClass('back')
				pickCardNum.remove($(this).attr('data-card-num'))
				pickNum--
				//console.log("已經抽了幾張："+pickNum)
				console.log("已挑選的卡片號碼："+pickCardNum)
			}
		}
	});
	Array.prototype.remove = function () {
		var what, a = arguments, L = a.length, ax;
		while (L && this.length) {
			what = a[--L];
			while ((ax = this.indexOf(what)) !== -1) {
				this.splice(ax, 1);
			}
		}
		return this;
	};

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


