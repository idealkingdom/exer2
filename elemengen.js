$(function() {

	$('th.scale').each(function(index, el) {
		title = $(this).text()
		toAppend = $ ('<div class="col-sm-4 col-md-2  card-container sortable2" data-from="'+index+'"><div class="card-header">'+title+'</div></div>')
		toAppend.appendTo($ ('.g-card-container'))
	});
	$('th.gridlabel').each(function(index, el) {
		title = $(this).text()
		toAppend = $ ('<div  class="sortable-card col-sm-3 sortable"><div rowindex="'+index+'" class="punch-container">\
<span>'+title+'</span><span><button " type="button" class="close" aria-label="Close"> \
<span aria-hidden="true" class="pull-right">&times;</span>\
</button><span></div></div>')
		toAppend.appendTo($ ('.g-punch-container'))
	});

$('div.container').change(function(event) {
		nexTButton = $("#nextButton")
	if ($('div.sortable-card.complete').length == $('div.sortable-card').length) {
		nexTButton.addClass('completed')
	}
	else{
		nexTButton.removeClass('completed')
	}
});


$('div.container').change();


});

