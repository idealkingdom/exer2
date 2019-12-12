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
		targetDiv = $(ui.item).attr('rowindex');
		colIndex = $(ui.item).closest('div.sortable2').attr('data-from')
		$ ('th.gridlabel').eq(targetDiv).siblings('td').eq(colIndex).find('input').prop('checked','1')
		$('div.sortable-card').eq(targetDiv).addClass('complete')
		$('div.container').change();

	}

}).disableSelection();

$ ('button.close').click(function(event) {
		targetParent = $(this).closest('div').attr('rowindex')
		$('div.sortable-card').eq(targetParent).sortable('cancel').removeClass('complete')
		$ ('th.gridlabel').eq(targetParent).siblings('td').find('input:radio').prop('checked', 0)
		$('div.container').change();
});




});
