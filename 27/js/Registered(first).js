
window.onload=function(){
	var a=document.getElementById("Registered-number");
	function subcolor(){
		var b=document.getElementById("Registered-btn");
		if(a.value != ""){
			b.removeAttribute("disabled");
			b.style.backgroundColor="#f76706";
		}else{
			b.setAttribute("disabled", true);
			b.style.backgroundColor="#AAAAAA";
		}
	}
	a.onchange=function(){subcolor()};

}

$(function() {
	$('#Registered-number').on('click', function(event) {
		$('#Registered-delimg').css('visibility', 'visible');
	});
	$('#Registered-number').on('blur', function(event) {
		$('#Registered-delimg').css('visibility', 'hidden');
	});
	$('#Registered-delbtn').on('click', function(event) {
		$('#Registered-number').val("");
		$("#Registered-btn").css("backgroundColor","#AAAAAA");
	});

	$(document).on('click','#Registered-btn', function () {
        if ($('#Registered-number').val() != "123456" && $('#Registered-number').val() != "13633330000") {
            $.modal({
                title:  '提示',
                text: '请输入正确的手机号码',
                buttons: [
                    {
                        text: '好的'
                    },
                ]
            });
        }else if ($('#Registered-number').val() == "13633330000") {
            $.modal({
                title:  '提示',
                text: '该手机号码已注册',
                buttons: [
                    {
                        text: '取消'
                    },
                    {
                        text: '立即登录'
                    },
                ]
            });
        }else{
            $.modal({
                title:  '提示',
                text: '恭喜你注册成功，马上体验',
                buttons: [
                    {
                        text: '确定',
                        onClick: function() {
                            window.location.href = "../手机注册（验证码和密码设置）/index.html"
                        }
                    },
                ]
            });
        }
    });

    $('.Registered-argee').on('click',function(event) {
        if ($(this).children('img').attr('src') == "img/argee1.png") {
            $(this).children('img').attr('src', 'img/argee2.png');
        }else{
            $(this).children('img').attr('src', 'img/argee1.png');
        }   
    })
});
