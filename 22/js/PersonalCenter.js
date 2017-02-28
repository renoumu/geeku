$('.SubmitOrder-Btn').on('click',function(){
	if(document.getElementById("male").checked)  {  
        $.modal({
      		title:  '提示',
      		text: '微商场 “想打开微信支付”',
        	buttons: [{
          		text: '取消',
        	},
        	{
          		text: '打开',
          		onClick: function() {
            		$.alert('根据付款方式选择，提示打开相对应的付款方式');
            		window.location.href = "../订单详情/index.html";
          		}
        	},
      		]
    	})
    }  
  
    if(document.getElementById("female").checked)  
    {  
        $.modal({
      		title:  '提示',
      		text: '微商场 “想打开支付宝支付”',
        	buttons: [{
          		text: '取消',
        	},
        	{
          		text: '打开',
          		onClick: function() {
            		$.alert('根据付款方式选择，提示打开相对应的付款方式');
            		window.location.href = "../订单详情/index.html";
          		}
        	},
      		]
    	}) 
    }  
});