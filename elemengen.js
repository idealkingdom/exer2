var container;
$(function() {
 container = $("div.container-fluid")
	$('th.scale').each(function(index, el) {
		title = $(this).text()
		// Desktop
		toAppend = $ ('<div class="col-sm-4 col-md-2  card-container sortable2" data-from="'+index+'"><div class="card-header">'+title+'</div></div>')
		toAppend.appendTo($ ('.g-card-container'))
		// Mobile
		toAppendMobile = $ ('<button type="button" data-from='+index+' class="btn btn-lg btn-mobile btn-primary">'+title+'</button>');
		toAppendMobile.appendTo($ ('.button-carousel-div'))
	});	
	$('th.gridlabel').each(function(index, el) {
		title = $(this).text()
		// Mobile
		toAppendMobile = $ ('<div class="item"><div class="punch-container" data-from='+index+'>'+title+'</div></div>')
		toAppendMobile.appendTo($ ('div.owl-carousel'))

		// Desktop
		toAppend = $ ('<div  class="sortable-card col-sm-3 sortable"><div rowindex="'+index+'" class="punch-container">\
		<span>'+title+'</span><span><button " type="button" class="close" aria-label="Close"> \
		<span aria-hidden="true" class="pull-right">&times;</span>\
		</button><span></div></div>')
		toAppend.appendTo($ ('.g-punch-container'))
	});

container.change(function(event) {
		nexTButton = $("#nextButton")
		var desktopCheck = ($('div.sortable-card.complete').length == $('div.sortable-card').length)
	if (desktopCheck) {
		nexTButton.addClass('completed')
	}
	else{
		nexTButton.removeClass('completed')
	}
});


container.change();


});

