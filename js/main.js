document.addEventListener( "DOMContentLoaded", function ( event ) {
	// variables
	var $header_top = $( '.nav' );
	var $nav = $( 'nav__toggle' );

	// toggle menu 
	$header_top.find( 'a' ).on( 'click', function () {
		$( this ).parent().toggleClass( 'open-menu' );
	} );

	// fullpage customization
	$( '#fullpage' ).fullpage( {
		sectionsColor: [ '#FFFFF00', '#E6E6E6', '#E6E6E6', '#FFF', '#FFF' ],
		sectionSelector: '.vertical-scrolling',
		slideSelector: '.horizontal-scrolling',
		slidesNavigation: true,
		anchors: [ 'home', 'weAre', 'services', 'ourWork', 'customerCare', 'connect' ],
		menu: '#menu',

		afterSlideLoad: function ( anchorLink, index, slideAnchor, slideIndex ) {
			console.log('slideload');
		},

		onSlideLeave: function ( anchorLink, index, slideIndex, direction ) {
			console.log('slideleave');
		}
	} );
} );