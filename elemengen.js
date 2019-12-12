$(function() {
	$('th.scale').each(function(index, el) {
		title = $(this).text()
		toAppend = $ ('<div class="col-sm-4 col-md card-container sortable2" data-from="'+index+'"><div class="card-header">'+title+'</div></div>')
		toAppend.appendTo($ ('.g-card-container'))
	});
	$('th.gridlabel').each(function(index, el) {
		title = $(this).text()
		toAppend = $ ('<div rowindex="'+index+'" class="sortable-card col-sm-3 sortable"><div class="punch-container">\
<span>'+title+'</span><span><button " type="button" class="close" aria-label="Close"> \
<span aria-hidden="true" class="pull-right">&times;</span>\
</button><span></div></div>')
		toAppend.appendTo($ ('.g-punch-container'))
	});
});

