
$(document).ready(function () {

    $('.arrow-bottom-btn').click(function() {
    	var scrollTo = $('#transiago-intro');
    	$('html, body').animate({
    		scrollTop: scrollTo.offset().top
    	}, 'slow');
    });
});
