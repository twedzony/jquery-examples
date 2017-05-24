$(function(){

	$( "div" ).click(function(){
		alert("DIV CLICK!");
	})

	$( "a" ).click(function( event ){
		event.stopImmediatePropagation();
		alert("A CLICK!");
	})

	$( "a" ).click(function(){
		$( this ).css( "border", "2px solid red");
	})
});