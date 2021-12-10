(function ($) {
    "use strict";
	
	/*Adding js class to html tag when javascript is enabled*/
	$('html').addClass('js');
	
	/*Initializing Bootstrap Tooltip*/
	$('[data-toggle="tooltip"]').tooltip();

	/*Adding loaded class to body tag when the page is loaded*/
	$(window).on('load', function(){
	    $('body').addClass('loaded');
	});
	
	
})(jQuery);