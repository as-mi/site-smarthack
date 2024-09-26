import counterUp from 'counterup2'
require('waypoints/lib/noframework.waypoints.js');

var SMARTHACK_DATE = new Date(2024, 10, 2, 11); // luna e 0-indexed

$(document).ready(function () {
	var window_height = $(window).height();
	var window_width = $(window).width();

	var whiteBgGradient = $("#whiteBackground-gradient");
	var right = parseInt(whiteBgGradient.css('right'));

	var substPoz = window_width - right;
	var top = parseInt($(window).scrollTop());
	// var scroll = $(window).scrollTop()/10;
	var pers = right * top / window_height;
	if ($(window).width() >= 768) {
		// whiteBg.css("background-position", right+pers-substPoz +"px");
		whiteBgGradient.css('transform', 'translate3d(0,0,0)');
	}

	var buttonInscriere = $('#button-inscriere');
	var section1Container = $('#section1-container');

	var menu = $('#menu');
	var hamburger = $('.hamburger');

	var p = 50 / 100 * right;

	$("#logoHeader").on("click", function () {
		var body = $("html, body");
		body.stop().animate({ scrollTop: 0 }, 1000, 'swing');
	});

	$(".scrollTop").on("click", function () {
		var body = $("html, body");
		body.stop().animate({ scrollTop: 0 }, 1000, 'swing');
	});



	var z = $('.timer .zile > span:first-child');
	var o = $('.timer .ore > span:first-child');
	var m = $('.timer .minute > span:first-child');
	var s = $('.timer .secunde > span:first-child');

	var date_future = SMARTHACK_DATE;
	var date_now = new Date();

	var seconds = Math.floor((date_future - (date_now)) / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);

	var hours = hours - (days * 24);
	var minutes = minutes - (days * 24 * 60) - (hours * 60);
	var seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
	if (days < 0) {
		clearInterval(calcNewYear);
		var timer = $('.timer');
		timer.removeClass('col-11 col-sm-8 col-md-4')
		timer.html("<li id='start-concurs'>🎉 Concursul a început! 🎉</li>")

	}
	else {
		z.html(days);
		o.html(hours);
		m.html(minutes);
		// s.html(seconds);
	}



	var calcNewYear = setInterval(function () {
		date_future = SMARTHACK_DATE;
		date_now = new Date();

		seconds = Math.floor((date_future - (date_now)) / 1000);
		minutes = Math.floor(seconds / 60);
		hours = Math.floor(minutes / 60);
		days = Math.floor(hours / 24);

		hours = hours - (days * 24);
		minutes = minutes - (days * 24 * 60) - (hours * 60);
		seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
		if (days < 0) {

			clearInterval(calcNewYear);
			var timer = $('.timer');
			timer.removeClass('col-11 col-sm-8 col-md-4')
			timer.html("<li id='start-concurs'>🎉 Concursul a început! 🎉</li>")

		}
		else {
			z.html(days);
			o.html(hours);
			m.html(minutes);
			s.html(seconds);
		}


	}, 1000);

	var hamburgerActive = 0;
	var menuHeight = menu.css('height', 'auto').height();
	var menuWidth = menu.css('width', 'auto').width();
	menu.css({ 'height': '0', 'width': '0' });
	hamburger.on('click', function () {
		if (hamburgerActive == 0) {
			menu.animate({
				height: menuHeight,
				width: 200
			}, 125, 'swing');
			hamburger.addClass('active');
			hamburgerActive = 1;
		}
		else if (hamburgerActive == 1) {
			menu.animate({
				height: 0,
				width: 0
			}, 125);
			hamburger.removeClass('active');
			hamburgerActive = 0;
		}
	});

	if ($(window).width() <= 980) {
		$("#menu > li").on("click", function () {
			menu.animate({
				height: 0,
				width: 0
			}, 125);
			hamburger.removeClass('active');
			hamburgerActive = 0;
		});
	}


	// get countable elements
	const countables = document.getElementsByClassName('count');
	for (const el of countables) {
		//create waypoint for each countable. on scroll => start counting
		var waypoint = new Waypoint({
			element: el,
			handler: function () {
				counterUp(el);
				this.destroy();
			},
			offset: 'bottom-in-view',
		})
	}

	//frequently asked questions - toggle accordion dropdown
	const faqs = document.querySelectorAll(".faq-new");

	faqs.forEach((faq) => {
		faq.addEventListener("click", function () {
			const isActive = this.classList.contains("active");

			// Collapse all FAQs
			faqs.forEach((otherFaq) => {
				if (otherFaq !== this) {
					otherFaq.classList.remove("active");
					const otherAnswer = otherFaq.querySelector(".answer");
					otherAnswer.style.maxHeight = 0;
				}
			});

			// Toggle the clicked FAQ
			const answer = this.querySelector(".answer");
			if (isActive) {
				this.classList.remove("active");
				answer.style.maxHeight = 0;
			} else {
				this.classList.add("active");
				answer.style.maxHeight = answer.scrollHeight + "px";
			}
		});
	});

});

// window.addEventListener("scroll", function(){
// 	const
// 	verticalScroll = window.pageYOffset,
// 	section1Height = document.querySelector("#section1-container").offsetHeight;

// 	// if(verticalScroll === 0){
// 	// 	document.querySelector("nav").style.backgroundColor = "#0a0f18e3";
// 	// }
// 	// else{
// 	// 	document.querySelector("nav").style.backgroundColor = "#0a0f18";
// 	// }

// 	console.log("here");
// 	console.log(verticalScroll, section1Height)

// 	if(verticalScroll > section1Height*2/3){
// 		document.querySelector("#logoHeader").style.opacity = "1";
// 	}
// 	else{
// 		document.querySelector("#logoHeader").style.opacity = "0";
// 	}
// })
