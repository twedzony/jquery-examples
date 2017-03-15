$(function(){

	$( "div" ).each(function(index,element){

		if( $( element ).hasClass( "stop" ) ){
			return false;
		}	
		else{
			$( element ).addClass( "selected" );
		}

	});

});

/*
index = number of iteration

element = "this"
*/
