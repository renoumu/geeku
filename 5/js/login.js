$(document).on('click', '.open-preloader', function () {
	var Account = $('.LoginAccount>.Form').children('input').val();
	var Psw= $('.LoginPsw>.Form').children('input').val();
	// 判断账户与密码是否正确
    if (Account == 123456 && Psw == 123456) {
    	$.showPreloader();
    	setTimeout(function () {
        	$.hidePreloader();
          window.location.href = "../首页/index.html"
    	}, 2000);
    // 判断帐号密码是否为空
    }else if(Account == "" || Psw == ""){
    	$.modal({
      		title:  '提示',
      		text: '用户或密码不能为空',
      		buttons: [
  			{
          		text: '是的',
        	},
      		]
    	})
    // 判断帐号或密码错误弹出的提示
    }else{
    	$.modal({
      		title:  '提示',
      		text: '用户或密码不正确',
      		buttons: [
  			{
          		text: '是的',
        	},
        	{
          		text: '找回密码',
         		onClick: function() {
            	window.location.href = "../找回密码/index.html"
          		}
        	},
      		]
    	})
    }  	
});
$('.LoginReg').on('click',function(){
    window.location.href = "../手机注册（手机号码）/index.html"
});
$('.ForgetPaw').on('click',function(){
    window.location.href = "../找回密码/index.html"
});



