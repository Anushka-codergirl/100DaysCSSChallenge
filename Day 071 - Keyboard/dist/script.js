// jQuery v3.3.1 is supported
let screen = $('.screen')
$(document).on('click', '.keyboard > span', function(){
	let char = $(this).html()
	if(char){
		screen.html(char)
	}
})