$(function(){

	$( "button" ).click(function(){
		alert(" BUTTON O K ! ");
	})

	$( "button" ).trigger("click");

	$( "form" ).submit(function(){
		alert("SUBMIT O K !");
	})

	$( "form" ).triggerHandler("submit");
 
});