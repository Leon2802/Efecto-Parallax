/*-- Carga todo el codigo--*/
$(document).ready(function(){
	$(window).scroll(function(){
		/*-- Funcion para detectar el movimiento del escroll--*/
		var barra = $(window).scrollTop();
		var posicion = barra*0.50;
		$('body').css({
			'background-position':'0 ' + posicion + 'px'

		});
	});
});