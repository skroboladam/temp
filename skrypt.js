document.addEventListener("DOMContentLoaded", function(event) { 
jQuery(document).ready(function() {
	
	jQuery('.lp-box-oferta .arrow').click(function(e){

		e.preventDefault();
		var onklik = jQuery(this).attr("onclick").match(/(\d)/g).toString();
		jQuery('.lp-box-oferta .arrow').removeClass('arrow-right');
		jQuery(this).addClass('arrow-right');

		jQuery('[id^="divContent-"]').not("#divContent-"+onklik).each(function(){
         		jQuery(this).hide();
     		});
	});
});
});
