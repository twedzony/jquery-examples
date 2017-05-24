$(function(){

	$( "div" ).click(function(){
		alert("DIV CLICK!");
	})

	$( "a" ).click(function( event ){
		event.stopPropagation();
		alert("A CLICK!");
	})

});