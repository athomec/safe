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

	var backdrop = null;

	$('.js-nav-toggler').click(function () {
		if (backdrop === null) {
			backdrop = $('<div class="modal-backdrop custom-backdrop"></div>');
			$('body').append(backdrop);
			backdrop.show();
		} else {
			backdrop.toggle();
		}
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
	//messenger樣式
	$(function () {
		$('.fb_dialog_content iframe').load(function () {
			var $iframe = $(this),
				$contents = $iframe.contents();
			// 取得 iframe 中的元素
			$('#btn1').click(function () {
				alert($contents.find('#t1').val());
			});
			// 執行各種動作時可以再判斷 $contents 是否為 null
		});
	});


})//JS尾端	

