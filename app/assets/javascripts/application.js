// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//

//= require_tree .


var scrollSpeed = 70; 		// Speed in milliseconds
var step = 1; 			// How many pixels to move per step
var current = 0;		// The current pixel row
var imageHeight = 4300;		// Background image height
var headerHeight = 300;		// How tall the header is.

			
			
//The pixel row where to start a new loop
			
var restartPosition = -(imageHeight - headerHeight);
			
function scrollBg(){
//Go to next pixel row.
current -= step;
//If at the end of the image, then go to the top.
if (current == restartPosition){
current = 0;
}
				
//Set the CSS of the header.
$('#header').css("background-position","0 "+current+"px");
}
//Calls the scrolling function repeatedly
var init = setInterval("scrollBg()", scrollSpeed);

$(document).ready(function(){
	$('.categoryListAll').hover(function(){
		$(this).stop().fadeTo('slow',0.4);
	},
	function(){
		$(this).stop().fadeTo('slow',1);
	});
});


