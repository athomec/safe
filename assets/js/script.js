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
	//上方選單開啟左右視窗
	$(".js-map-function-menu").find("a").click(function () {
		$('.js-side-menu').removeClass("close");
		var button = document.querySelector(".js-nav-toggler");
		button.click();
	})
	//----------------左側選單控制-----------------
	$(".js-side-menu-toggler").click(function () {
		$('.js-side-menu').toggleClass("close");
	})
//----------------上方選單半透明背景控制-----------------
	$(".js-nav-toggler").click(function () {
		$('.js-section-backdrop').toggleClass("active");
	})
	//數字表單
	const formNumbers = document.querySelectorAll('.form-number');

	formNumbers.forEach((formNumber) => {
		const input = formNumber.querySelector('input');

		const arrowUp = document.createElement('span');
		arrowUp.classList.add('arrow-up');
		formNumber.appendChild(arrowUp);

		const arrowDown = document.createElement('span');
		arrowDown.classList.add('arrow-down');
		formNumber.appendChild(arrowDown);
	});

	document.addEventListener('click', (event) => {
		if (event.target.classList.contains('arrow-up')) {
			const input = event.target.parentNode.querySelector('input');
			const currentValue = parseInt(input.value);
			if (currentValue < parseInt(input.getAttribute('max'))) {
				input.value = currentValue + parseInt(input.getAttribute('step'));
			}
		} else if (event.target.classList.contains('arrow-down')) {
			const input = event.target.parentNode.querySelector('input');
			const currentValue = parseInt(input.value);
			if (currentValue > parseInt(input.getAttribute('min'))) {
				input.value = currentValue - parseInt(input.getAttribute('step'));
			}
		}
	});
	//----------------右側選單控制-----------------
	$(".js-side-menu-toggler-right").click(function () {
		$('.js-side-menu-right').toggleClass("close");

	})

	$(".js-draggable").draggable();


	$(".js-side-menu a").click(function () {
		$(".js-side-content").removeClass("p-0");
		$(".js-iframe").removeClass("iframe-map-height");
		$("body").removeClass("scrolly-none");
	})
	//modal無內容控制
	$('.js-modal-show-box').each(function () {
		var hasContent = $(this).children().length > 0 || $(this).text().trim() !== '';
		if (!hasContent) {
			$(this).addClass('none');
		}
	});
	$('.js-modal-btn-list').each(function () {
		var hasContent = $(this).children().length > 0 || $(this).text().trim() !== '';
		if (!hasContent) {
			$(this).addClass('none');
		}
	});

	RESIZE();


	function RESIZE() {
		var WINDOW = $(window).width();
		// 綁定輸入框的焦點事件
		if (WINDOW < 992) {
			$('.js-side-menu').addClass("close");
			$('.js-side-menu-right').addClass("close");
		}
		if (WINDOW < 768) {
			$(".js-navbar-collapse").removeClass("show");
			$(".js-nav-toggler").addClass("collapsed");
		}
	}


	function isAndroid() {
		var userAgent = navigator.userAgent.toLowerCase();
		return /android/.test(userAgent);
	}

	if (isAndroid()) {
		$('.js-side-menu').addClass("close");
		$('.js-side-menu-right').addClass("close");
		$(".js-navbar-collapse").removeClass("show");
		$(".js-nav-toggler").addClass("collapsed");
	} else {
		$(window).resize(function () {
			RESIZE();
		})
	}


})//JS尾端	

