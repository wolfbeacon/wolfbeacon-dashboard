
$('.list-item').on('click',function(){
	$('.list-item').removeClass('active');
	$(this).addClass('active');
});

$('.button').on('click',function(){
	$('.button').removeClass('active-btn');
	$(this).addClass('active-btn');
});