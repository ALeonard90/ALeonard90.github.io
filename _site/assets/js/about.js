$(document).ready(function() {
	// $('#wanderlust').hide();
	$('a[href="#wanderlust"]').click(function() {
		$('#nourishing').addClass('hidden');
		$('#wanderlust').removeClass('hidden');
	});
	$('a[href="#nourishing"]').click(function() {
		$('#wanderlust').addClass('hidden');
		$('#dctunez').addClass('hidden');
		// $('#wanderlust').hide();
		$('#nourishing').removeClass('hidden');
	});
	$('a[href="#dctunez"]').click(function() {
		$('#wanderlust').addClass('hidden');
		// $('#wanderlust').hide();
		$('#dctunez').removeClass('hidden');
	});
});