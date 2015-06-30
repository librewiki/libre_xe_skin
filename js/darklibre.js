jQuery('.darklibre_function').click(function() {
	var darklibre_check = jQuery.cookie("darklibre");
	if (darklibre_check == undefined) {
		alert('어두운 세상으로 갈꺼야!');
		jQuery.cookie("darklibre",'yes', { expires: 999, path: '/', domain: '.librewiki.net', secure: false });
		location.reload();
	} else {
		alert('밝은 세상으로 돌아갈래!');
		jQuery.cookie("darklibre", null, { expires: -1, path: '/', domain: '.librewiki.net', secure: false });
		location.reload();
	}
    /*var msgcheck = $.cookie("alertcheck");
    if (msgcheck == undefined) {
        $.cookie("alertcheck",'yes', { expires: 1, path: '/', domain: 'librewiki.net', secure: false });
    }*/
});

jQuery(function(){
	var darklibre_check = jQuery.cookie("darklibre");
	if (darklibre_check == undefined) {
                jQuery('.darklibre_function').text('난 어두운 화면이 좋아요.');
        } else {
                jQuery('.darklibre_function').text('난 어두운 화면이 싫어요.');
        }
});
	/*
    var msgcheck = $.cookie("alertcheck");
    if (msgcheck == undefined) {
        $("div").each(function(i) {
            if ($(this).is("#alertmsg")) {
                $(this).css("display", "block");
            }
        });
    } else {
        $("div").each(function(i) {
            if ($(this).is("#alertmsg")) {
                $(this).css("display", "none");
            }
        });
    }
});
*/
