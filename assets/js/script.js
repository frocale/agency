

document.body.onload = function(){	

	//Preloader

	let body = document.getElementById("body");
	let preLoad = document.getElementById("preloader");

	setTimeout(function(){
		body.classList.remove("lock");
		preloader.classList.add("done");
		new WOW().init();
	}, 1000);

	//Burger

	let burger = document.getElementById('header-burger');
	let nav = document.getElementById('nav');

	burger.onclick = function(){
		burger.classList.toggle('active');
		nav.classList.toggle('active');
		body.classList.toggle("lock");
	}

	//Header-Scroll
	let header = document.getElementById("header");
	let introH = document.getElementById("intro");
	let scrollOffsetTop = 0;

	$(window).on('scroll', function(){
		introH = $('#intro').innerHeight();
		scrollOffsetTop = $(this).scrollTop();

		if(scrollOffsetTop >= introH) header.classList.add('fixed');
		else header.classList.remove('fixed');
	})

	//Scroll on Offset Up

	let scrollBtn = document.getElementById("scrollUp");

	scrollBtn.onclick = function(event){
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0 
		}, 500);
	}

	//Scroll-Link

	$("[data-scroll]").on('click', function(event){
		event.preventDefault();

		body.classList.remove('lock');
		burger.classList.remove('active');
		nav.classList.remove('active');


		let elementID = $(this).data("scroll");
		let elementOffset = $(elementID).offset().top;

		$('html, body').animate({
			scrollTop: elementOffset
		}, 500);

		elementOffset = 0;
	});

	let scrollOffset = 0;

	$(window).on('scroll', function(){	
		scrollOffset = $(this).scrollTop();
	});
}