$(function() {
	$('.bar-tab>button').on('click' , function(event){
		var ask = '<div class="fr Frwidth"><ul class="clear" style="margin: .452rem 0px;"><li class="fr Flwidth-Img" style="width: 2.083rem;height: 2.083rem;margin: 0px .452rem .452rem;"><img src="image/2Icon.gif" alt="" style="width: 100%;"></li><li class="fr Flwidth-Con" style="max-width: 62%;font-size: .724rem;padding: .5rem .345rem;border-radius: .145rem;border: .045rem solid #CCC;background: #FFF;">'+$('.bar-tab>input').val()+'</li></ul></div>'
		$('.content').append(ask);
	});


    $(".bar-tab button").click(function(event) {
		$.ajax({
		    url: 'http://www.tuling123.com/openapi/api?key=feb69b04851f4901b0e7561eb47822e9&info=' + $(".bar-tab input").val(),
		    type: 'GET',
		    dataType: 'JSON',
		    success: function(result){
		    	var str = $.parseJSON(result);

				var ans = '<div class="fl Flwidth">\
                    <ul class="clear" style="margin: .452rem 0px;">\
                        <li class="fl Flwidth-Img" style="width: 2.083rem;height: 2.083rem;margin: 0px .452rem .452rem;"><img src="image/1Icon.gif" alt="" style="width: 100%;"></li>\
                        <li class="fl Flwidth-Con" style="max-width: 62%;background: #0d85fe;font-size: .724rem;color: #FFF;padding: .5rem .345rem;border-radius: .145rem;">'+str.text+'</li>\
                    </ul>\
                </div>';
		    	$('.content').append(ans);  
		    }
		});

		$(".bar-tab input").val('');
	});
});