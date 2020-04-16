$(document).ready(function() {
	
	$('.lp-box-oferta .arrow').click(function(e){

		e.preventDefault();
		var onklik = $(this).attr("onclick").match(/(\d)/g).toString();
		$('.lp-box-oferta .arrow').removeClass('arrow-right');
		$(this).addClass('arrow-right');

		$('[id^="divContent-"]').not("#divContent-"+onklik).each(function(){
         		$(this).hide();
     		});
	});
});
