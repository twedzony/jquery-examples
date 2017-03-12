$(function(){

	$( "li" ).addClass( function( count ){
		return "class-" + count;
	} );

	$( "ul" ).addClass("backlight");

});