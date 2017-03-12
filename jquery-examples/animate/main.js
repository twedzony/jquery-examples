$(function(){

	$( ".start" ).click(function(){
		$( ".animated" )
		.animate({ height: "toggle" })
	});

	$( ".left" ).click(function(){
		$( ".animated" )
		.animate({ marginRight: "+=40px" })
	});

	$( ".right" ).click(function(){
		$( ".animated" )
		.animate({ marginLeft: "+=40px" })
	});

});


