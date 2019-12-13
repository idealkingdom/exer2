$(function() {
	$('button.btn-mobile').click(function(event) {
		targetRow = $(".owl-item.active .punch-container").attr('data-from');
		targetCol = $(this).attr('data-from')
		$(".owl-carousel").owlCarousel("next");
		$(".owl-carousel .owl-item").eq(targetRow).addClass('complete');
		$("table th.gridlabel").eq(targetRow).siblings('td').eq(targetCol).find('input').prop('checked', 1)

		var mobileCheck = ($('div.owl-item.complete').length == $('div.owl-item').length)
			if (mobileCheck) {
				nexTButton.addClass('completed')
				}
			else{
			nexTButton.removeClass('completed')
	}
	});
});