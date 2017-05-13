$(function(){

	$( "#action" ).click(function(){

var span = $( "span" );

	$( "p" ).remove();

	span.detach();
	span.appendTo( "body" );

	$( "div" ).empty();

	});


});