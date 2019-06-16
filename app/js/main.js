$(function() {

	if ($(".js-range-slider").length) {
		$(".js-range-slider").ionRangeSlider({
			type: "double",
			min: 0,
			max: 600,
			prefix: "$"
		});		
	};

	if ($(".product-tabs").length) {
		$( '.product-tabs' ).tabs();
	}
});