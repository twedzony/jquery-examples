$(function(){

	$( "p" ).before( "<h3>tekst-BEFORE</h3>" ).after( $(".element") );

	$( "<p>tekst-insertAfter</p>" ).insertAfter( "h1" );



});

/*
before -> wstaw przed
after -> wstaw za 
insertBefore -> przenieś przed
insertAfter -> przenieś za
*/