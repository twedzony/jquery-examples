$(function(){

	$( "input" ).focus();

	$( "input" ).focusin(function(){
		$( this ).css( "border", "2px solid red");
	});
	$( "input" ).focusout(function(){
		$( this ).css( "border", "none");
	});
});