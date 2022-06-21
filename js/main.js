document.addEventListener( "DOMContentLoaded", function ( event ) {
	new Swiper( ".swiper--fullscreen", {
		direction: "vertical",
		slidesPerView: 1,
		mousewheel: true,
		hashNavigation: true,
	} );

	new Swiper( ".swiper--fullscreen-subpage", {
		slidesPerView: 1,
		hashNavigation: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	} );
} );