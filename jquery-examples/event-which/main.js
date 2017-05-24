$(function(){

	$( "input" ).on( "keydown" ,function( event ){

		$( ".test" ).text( event.which )

	});

	$( "input" ).on( "mousedown" ,function( event ){

		$( ".test" ).text( event.which )

	});

});