
AOS.init({
	once: true
});



$('.portofolio__body__benner__grid__description').on('click',function () {
	var dataAkksi = $(this).data('aksi');
	console.log(dataAkksi);
	if (dataAkksi == 'aktif') {

		$(this).data('aksi','none');

		$(this).find('.portofolio__body__benner__grid__data').hide(500);

	}else{

		$('.portofolio__body__benner__grid__description').data('aksi','none');

		$('.portofolio__body__benner__grid__data').hide(500);

		$(this).data('aksi','aktif');

		$(this).find('.portofolio__body__benner__grid__data').show(500);

	}

});



function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
	$('.carousel').carousel();
});

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 5,
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});


$('.portofolio__body__faq__card__button').click(function () {

	var status = $(this).find('span').html();

	if (status == '-') {
		$(this).find('span').html('+');
		$(this).find('span').css({
			'lineHeight': '35px',
			'fontSize': '28px'
		});
		$(this).next().css({
			'height' : '0',
			'position':'absolute',
			'opacity' : '0',
		}).delay(300);
	}else{
		$(this).find('span').html('-');
		$(this).find('span').css({
			'lineHeight': '32px',
			'fontSize': '31px'
		});
		var heightdata = $(this).next().find('.portofolio__body__faq__card__description__data p').height();
		console.log(heightdata);
		$(this).next().css({
			'opacity' : '1',
			'position':'inherit',
			'height' : (heightdata+5)+'px'
		}).delay(300);
	}

	
});