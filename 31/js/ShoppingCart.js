// 点击加件数
$(document).ready(function() {
	// 点击加件数
	$('.PlusBtn').on('click', function(event) {
		var idx = $('.PlusBtn').index($(this));
		var num = $('.Span').eq(idx).text();
		num++;
		$('.Span').eq(idx).text(num);
	});
	$('.LessBtn').on('click', function(event) {
		var idx = $('.LessBtn').index($(this));
		var num = $('.Span').eq(idx).text();
		num--;
		if (num >=0) {
			$('.Span').eq(idx).text(num);
		}
	});

	// 点击换图片
	$('.MyShoppingCart .ShopTitle .ShopTitle-List').on('click',function(event) {
		var idx = $('.MyShoppingCart .ShopTitle').index($(this).parent().parent());
		if ($(this).children('img').attr('src') == "image/icon_圆_normal@2x.png") {
			$('.MyShoppingCart').eq(idx).find('.ShopTitle-List img').attr('src', 'image/icon_圆_click@2x.png');
		}else{
			$('.MyShoppingCart').eq(idx).find('.ShopTitle-List img').attr('src', 'image/icon_圆_normal@2x.png');
		}	
	})
	$('.ShopName .ShopTitle-List').on('click',function(event){
		if ($(this).children('img').attr("src") == "image/icon_圆_normal@2x.png") {
			$(this).children('img').attr('src', 'image/icon_圆_click@2x.png');
		}else{
			$(this).children('img').attr('src', 'image/icon_圆_normal@2x.png');
		}
	});
	$('.BarTab .ShopTitle-List').on('click',function(event){
		if ($('.ShopTitle-List').children('img').attr('src') == "image/icon_圆_normal@2x.png") {
			$(".ShopTitle-List").children('img').attr('src', 'image/icon_圆_click@2x.png');
		}else{
			$(".ShopTitle-List").children('img').attr('src', 'image/icon_圆_normal@2x.png');
		}
	})
});
