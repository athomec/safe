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
			backdrop.fadeIn();
		} else {
			backdrop.fadeToggle();
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
})//JS尾端	

