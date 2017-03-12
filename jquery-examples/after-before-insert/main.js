$(function(){

	$( "p" ).before( "<h3>text-BEFORE</h3>" ).after( $(".element") );

	$( "<p>text-insertAfter</p>" ).insertAfter( "h1" );



});
