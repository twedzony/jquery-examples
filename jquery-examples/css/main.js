$(function(){

alert($ ("p").css("color") );

alert($ (".test").css("border") );

});

/*

it's possible to change css value, you just have have to add one more parameter. 

for example: 

$( "p" ).css("color","blue");

or change multiple values

$( "p" ).css({
	"color": "blue",
	"background-color": "red",
	"font-size": "17px"
})

*/
