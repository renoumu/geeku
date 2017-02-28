$(function() {
	$('.MyOrderForm').on('click', function(event) {
		if ($('.MyOrderForm-Wrap').css('display') == "none") {
			$('.MyOrderForm-Wrap').css('display', 'block');
		}else if($('.MyOrderForm-Wrap').css('display') == "block"){
			$('.MyOrderForm-Wrap').css('display', 'none');
		}
	});
});