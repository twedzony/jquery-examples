$(function(){

	$( ".test" ).data( "example", "foo" );

	alert($( ".test" ).data( "example" ));

});