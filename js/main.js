$(document).ready(function(){
	$('.col-whi').hover(function() {
	$(this).addClass("nar");
	},
	function() {
	$(this).removeClass('nar');
	});

	$('input').focus(function(){
        $(this).css('outline-color', '#FF0000');
     });
});
