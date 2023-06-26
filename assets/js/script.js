$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//----------------捲動控制-----------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) { //若目前的位置距離網頁頂端>...
			$(".gotop").addClass("show");
			$(".js-nav").addClass("up");
			$(".js-navbar-collapse").removeClass("show");
			$(".js-nav-toggler").addClass("collapsed");
		} else {
			$(".gotop").removeClass("show");
			$(".js-nav").removeClass("up");
		}
	});

	$(".js-toggler").click(function () {
		$(this).toggleClass("active");
	})
	$(".js-send").click(function () {
		$(this).addClass("active");
		var countdown = 297; // 倒數秒數的初始值
	
		// 將按鈕設置為禁用狀態，避免重複點擊
		$(this).prop('disabled', true);
	
		// 更新按鈕文字為倒數秒數
		$(this).html(countdown + " 秒後可重新發送");
	
		// 啟動計時器，每過一秒執行一次
		var timer = setInterval(function () {
			countdown--; // 減少秒數
	
			// 更新按鈕文字為倒數秒數
			$(this).html(countdown + " 秒後可重新發送");
	
			// 如果倒數結束，清除計時器並還原按鈕狀態
			if (countdown <= 0) {
				clearInterval(timer); // 清除計時器
				$(this).prop('disabled', false); // 還原按鈕狀態
				$(this).html("重新發送驗證碼"); // 還原按鈕文字
				$(this).removeClass("active");
			}
		}.bind(this), 1000); // 設置計時器間隔為1秒(1000毫秒)
	});


	RESIZE();

	function RESIZE() {
		var WINDOW = $(window).width();
		var WINDOWH = $(window).height();
		if (WINDOW < 768) {
			$(".js-navbar-collapse").removeClass("show");
			$(".js-nav-toggler").addClass("collapsed");
		}
	}
	$(window).resize(function () {
		RESIZE();
	})
})//JS尾端	

