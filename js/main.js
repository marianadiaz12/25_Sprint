$(document).ready(function(){
	$(".col-whi").hover(function() {
	$(this).addClass("nar");
	},
	function() {
	$(this).removeClass('nar');
	});

	$('input').focus(function(){
        $(this).css('outline-color', '#FF0000');
     });
	$('.flatnes').click(function(){
        $(this).effect('slide');
        }); /*Aun no funciona*/
});
