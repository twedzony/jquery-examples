$(function(){

	$( "a" ).click(function(){
		$( "form" ).submit();
	})

	$( "form" ).submit(function(){
		alert("FORM OK");
	});

});