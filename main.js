$(function() {
	$(".sortable,.sortable2").sortable({
	connectWith:".sortable2",
	items:"div.punch-container",
	start: function( event, ui ) {
		parentIndex = $(this).closest('div.sortable-card').index();
		if ( $(this).closest('div.sortable-card').length) {
			$(ui.item).attr('from-parent',parentIndex)
		}
		
	},
	update: function(event,ui) {
		$('.sortable').disableSelection()
		targetDiv = $(ui.item).attr('from-parent');
		colIndex = $(ui.item).closest('div.sortable2').attr('data-from')
		$ ('th.gridlabel').eq(targetDiv).siblings('td').eq(colIndex).find('input').prop('checked','1')
	}

}).disableSelection();

$ ('button.close').click(function(event) {
		targetDiv = $(this).closest('div').attr('from-parent')
		targetParent = $(this).closest('div')
		$('div.sortable-card').eq(targetDiv).sortable('cancel')
	
});
});
