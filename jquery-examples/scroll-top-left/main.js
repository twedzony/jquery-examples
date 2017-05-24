$(function(){

	$( "div" ).scrollTop(200);

	$( "span" ).click( function(){
		alert( $( "div" ).scrollTop());
	} );

});