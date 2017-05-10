$(function(){

	var foo = $( "li ").get( -2 );

	$( foo ).clone().appendTo( ".test" );

});

/*	

	'get' is useless if you don't use negative values
 	in this case it's enough to use array like: 

 	var foo = $( "li ")[2];

 	to get 3rd element for example

 */