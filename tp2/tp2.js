$(function() {
	var taphold = false;
	
	$( ".navbar ul li a" ).on( "click", function( event ) {
		event.preventDefault();
		
		if(taphold){
			taphold = false;
		} else {
			$.mobile.navigate( event.currentTarget.href );			
		}
	});
	
	$( ".navbar ul li a" ).on( 'taphold', function ( event ) {
		taphold = true;
		var tab = window.open("_blank");
		tab.location = event.currentTarget.href;
	});
	
	$( window ).on( "orientationchange", function( event ) {
		$("title").val( $("h1").val() + " - "  + $(this).val() );
		 event.orientation;
	});
});