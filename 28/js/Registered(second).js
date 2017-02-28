window.onload=function(){
	var a=document.getElementById("Registered-number");
	var c=document.getElementById("Registered-number2");
	function subcolor(){
		var b=document.getElementById("Registered-btn");
		if(a.value != "" && c.value != ""){
			b.removeAttribute("disabled");
			b.style.backgroundColor="#f76706";
		}else{
			b.setAttribute("disabled", true);
			b.style.backgroundColor="#AAAAAA";
		}
	}
	a.onchange=function(){subcolor()};
	c.onchange=function(){subcolor()};

	var Registerednum2=document.getElementById("Registered-number2");
	var seebtn3=document.getElementById("seebtn3");
    function changepass(){
      if (Registerednum2.type == "password") {
        Registerednum2.setAttribute("type","text");
        seebtn3.setAttribute("src","img/seepass (2).png");
      }else{
        Registerednum2.setAttribute("type","password");
        seebtn3.setAttribute("src","img/seepass (1).png");
      }
    }
    seebtn3.onclick=function(){changepass()};

    var wait=60;
        function time(o) {
        	var p=document.getElementById("Registered-prompt"); 
            if (wait == 0) {  
            	o.removeAttribute("disabled");
            	o.style.backgroundColor="#0d85fe";
            	p.style.visibility="hidden";            
            	o.value="重新获取";  
            	wait = 60;  
        	} else {  
            	o.setAttribute("disabled", true);
            	o.style.backgroundColor="#aaa";
            	p.style.visibility="visible";       
            	o.value=wait+"s";  
            	wait--;  
            	setTimeout(function() {  
                	time(o)  
            	},  
            	1000)  
        	}  
    	}  
	document.getElementById("Registered-getcode").onclick=function(){time(this);}

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
        if ($('#Registered-number2').val() != "123456" ) {
            $.modal({
                title:  '提示',
                text: '密码格式不正确，请重新输入',
                buttons: [
                    {
                        text: '好的'
                    },
                ]
            });
        }else if ($('#Registered-number').val() != "123456") {
            $.modal({
                title:  '提示',
                text: '验证码不正确，请重新输入',
                buttons: [
                    {
                        text: '好的'
                    },
                ]
            });
        }else{
            $.modal({
                title:  '提示',
                text: '恭喜你修改成功，马上体验',
                buttons: [
                    {
                        text: '确定',
                        onClick: function() {
                            window.location.href = "../登录/index.html"
                        }
                    },
                ]
            });
        }
    });
});