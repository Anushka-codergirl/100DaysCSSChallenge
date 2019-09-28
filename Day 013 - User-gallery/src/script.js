$('.imgframe').bind('click', function() {
	
	$('.details').addClass('active');
});

$('.close').bind('click', function() {
	$('.details').removeClass('active');
});