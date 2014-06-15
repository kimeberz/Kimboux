(function (window) {
	'use strict';
	// Make nav work.
	if (!"onhashchange" in window) {
	    return;
	}

	var defaultSection = '#resume';

	$('.navlink').click(function(e) {
		e.preventDefault();
		window.location.hash = $(this).attr('href');
	});

	var $sections = $('.js-section');

	function locationHashChanged() {
		$sections.hide();
		var section = location.hash || defaultSection;
		$(section).show();

		$('.navlink').removeClass('nav-active');
		$('.navlink[href="'+ section+ '"]').addClass('nav-active');
	}

	window.onhashchange = locationHashChanged;

	locationHashChanged();
}(window));


