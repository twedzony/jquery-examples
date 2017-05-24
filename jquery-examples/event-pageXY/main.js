$(function(){

	$( document ).on("mousemove", function( event ){
		$( ".test" ).text( "PositionX: " + event.pageX + " " + "PositionY: " + event.pageY ) 
	} )

});