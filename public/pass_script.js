$(function(){

    // Form items
		var pass1 = $('#user_password'),
        pass2 = $('#user_password_confirmation'),
        email = $('#user_email'),
        form = $('#main'),
        arrow = $('#main .arrow');

    // Empty the fields on load
    $('#main .row input').val('');
    
     // Use the complexify plugin on the first password field
	pass1.complexify({minimumChars:6, strengthScaleFactor:0.7}, function(valid, complexity){
		
		if(valid){
			pass2.removeAttr('disabled');
			pass1.parent()
				.removeClass('error')
				.addClass('success');
		}
		else{
			pass2.attr('disabled','true');
			pass1.parent()
				.removeClass('success')
				.addClass('error');
		}
		
		var calculated = (complexity/100)*268 - 134;
		var prop = 'rotate('+(calculated)+'deg)';

		// Rotate the arrow
		arrow.css({
			'-moz-transform':prop,
			'-webkit-transform':prop,
			'-o-transform':prop,
			'-ms-transform':prop,
			'transform':prop
		});
	});
	
	// Validate the second password field
	pass2.on('keydown input',function(){
		
	// Make sure its value equals the first's
		if(pass2.val() == pass1.val()){
			pass2.parent()
					.removeClass('error')
					.addClass('success');
		}
		else{
			pass2.parent()
					.removeClass('success')
					.addClass('error');
					} 
	});
});