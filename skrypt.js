$(document).ready(function() {
	
$('.lp-box-oferta .arrow').click(function(e){

e.preventDefault();
var onklik = $(this).attr("onclick").match(/(\d)/g).toString(); //zapisz numer docelowego elementu do $onklik
$('.lp-box-oferta .arrow').removeClass('arrow-right') //usuń nową strzałkę z pozostałych
$(this).addClass('arrow-right') //nadaj klikowi klasę z nową strzałką


$('[id^="divContent-"]').not("#divContent-"+onklik).each(function(){ //ukryj wszystkie gdzie id zaczyna się od divContent- oprócz klikanego
         $(this).hide();
     });


});
});