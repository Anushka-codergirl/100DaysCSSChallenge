$(document).ready(function () {
	$('#methods').click(function () {
		$('#password').attr('type', $(this).is(':checked') ? 'text' : 'password');
		$('.wrap').toggleClass('background');
	});
});