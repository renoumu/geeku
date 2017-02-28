$(function() {
	$('#TabBtn').on("click",function(){
		$('#tab1').children('ul').show('fast');
	});
	$('#tab1>ul').children('li').click(function(event) {
		$('#tab1').children('ul').css('display', 'none');
	});
});