$(function(){

	$( ".btn-fadein" ).click(function(){
		$( ".foo, .btn-fadeout " ).fadeIn(1000);
		$( " .btn-fadein " ).fadeOut(0);
	});

	$( ".btn-fadeout" ).click(function(){
		$( ".foo" ).fadeOut(1000);
		$( ".btn-fadein " ).fadeIn(0);
		$( ".btn-fadeout" ).fadeOut(0);
	});

	$( ".btn-toggle" ).click(function(){
		$( ".foo" ).toggle(1000);
	});


});

