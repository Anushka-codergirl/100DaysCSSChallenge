// jQuery v3.3.1 is supported
$(".logo.white").click(function(){
$(this).removeClass("normal");
$(this).addClass("big");
$(".logo.purple").removeClass("small");
$(".logo.purple").addClass("normal");
});

$(".logo.purple").click(function(){
$(this).removeClass("normal");
$(this).addClass("small");
$(".logo.white").removeClass("big"); 
$(".logo.white ").addClass ("normal");
});