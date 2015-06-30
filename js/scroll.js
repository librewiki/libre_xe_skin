jQuery(document).ready(function($) {
	jQuery( window ).scroll( function() {
	        if ( jQuery( this ).scrollTop() > 200 ) {
        	    jQuery('.top_scroll').fadeIn();
	        } else {
        	    jQuery('.top_scroll').fadeOut();
	        }
 	});

	jQuery('.top_scroll').click( function() {
		jQuery('html, body').animate({ scrollTop : 0 }, 400);
		return false;
	});

	var hash = window.location.hash;

	if (hash.indexOf(".") != -1) {
		hash = hash + "";
		hash = document.getElementById(hash.replace("#",""));
	}

	if (hash) {
		console.log($(hash).offset().top);
		jQuery('html, body').animate({ scrollTop : $(hash).offset().top - 60 }, 400);
	}
});

