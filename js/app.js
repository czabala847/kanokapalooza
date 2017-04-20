$(document).foundation()

// Seleccionar todos los elementos que tengan como atributo data-toggle-dia
$('[data-toggle-dia]').click(function (ev)
{
	console.log(ev);
	const panel = $(this).data('toggleDia');
	$('#line-up-tabs').foundation('selectTab', panel)
}
)

const $offCanvas = $('#offCanvas');
$offCanvas.find('li').click(function(ev)
{
	$offCanvas.foundation('close');
}
)