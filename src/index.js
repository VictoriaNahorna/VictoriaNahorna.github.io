import '../static/styles/styles.scss';
import '../node_modules/chart.js/dist/Chart.min.js'
import '../node_modules/font-awesome/scss/font-awesome.scss';
import 'owl.carousel';
import '../node_modules/jquery-parallax.js/parallax.min.js';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import ctrl from './controllers/currencyCtrl.js';
ctrl.render();
import Isotope from "isotope-layout";

(function() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('service-worker.js')
	}
})();
//plagin
$(document).ready(function(){
 	$('.owl-carousel').owlCarousel({
	  	nav:true,
	  	loop:true,
	  	items:1,
	  	animateOut: 'fadeOut',
	  	autoplay: 3000,
	});
});
$(document).ready(function(){
	$('#block_3').parallax({
		speed: 0.5,
		imageSrc: 'http://cinquepassi.org/wp-content/uploads/2017/05/spazi-stellari.jpg',
		bleed: 400,
	}),
	$('#block_5').parallax({
		speed: 0.3,
		imageSrc: 'https://coubsecure-s.akamaihd.net/get/b74/p/coub/simple/cw_timeline_pic/0a617debb97/b912bd9010d5b527d3985/med_1471913988_image.jpg',
		bleed: 500,
	}),
		$('#block_9').parallax({
		speed: 0.3,
		imageSrc: 'https://img2.goodfon.ru/wallpaper/big/7/b1/156-reka-solnce-zakat-cvet.jpg',
		bleed: 400,
	})
});	
//main menu
$(document).ready(function($){ var nav = $('.header');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});
//isotop
$(document).ready(function(){

 	let grid = new Isotope('.grid', {
                itemSelector: '.item',
                layoutMode: 'fitRows',
    });
 	$('.filters-button-group').on( 'click', 'button', function() {
        if ( !$(this).hasClass('checked') ) {
			$(this).parents('.wrapper').find('.checked').removeClass('checked');
			$(this).addClass('checked');

			let selector = $(this).attr('data-filter');
			grid.arrange({ filter: selector });
        }
    });
});

$(document).ready(function(){
	
$('#custom_conv').on('change', function () {
	
	let custom_input = $('input:checked').val();
	let custom_res = $('#custom_conv').val() * custom_input;
	let my_res = 400 * $('#USD').val();

	$('.curr_radio').on('click', 'input', function() {
		
		$('#custom_conv').val(custom_res / $('input:checked').val());
		$('#my_conv').val(my_res / $('input:checked').val());
		});
	});
});	

//menu
$(document).ready(function($){
	$('.nav_mini').on('click', function(){
		$('.sidebar').toggleClass('activ');
	})
});
$(document).ready(function($){
	let speed = 1000,
	$scrollTop = $('<a href="#" class="scrollTop"><i class="fa fa-chevron-up"></i></a>').appendTo('body');
});