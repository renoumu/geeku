window.onload=function(){
	  var passtxt1=document.getElementById("passcon1");
  	var passtxt2=document.getElementById("passcon2");
    var passtxt3=document.getElementById("passcon3");
	function nextcolor(){
		var next1=document.getElementById("subbtn");
		if (passtxt1.value != "" && passtxt2.value != "" && passtxt3.value != "") {
			next1.removeAttribute("disabled");
			next1.style.backgroundColor="#f76706";
		}else{
			next1.setAttribute("disabled", true);
			next1.style.backgroundColor="#AAAAAA";
		}
	}
	  passtxt1.onchange=function(){nextcolor()};
  	passtxt2.onchange=function(){nextcolor()};
    passtxt3.onchange=function(){nextcolor()};

  	var seebtn1=document.getElementById("seebtn1");
  	function typecolor1(){
  		if (passtxt1.type == "password") {
  			passtxt1.setAttribute("type","text");
        seebtn1.setAttribute("src","img/seepass (2).png");
  		}else{
  			passtxt1.setAttribute("type","password");
			seebtn1.setAttribute("src","img/seepass (1).png");
  		}
  	}
  	seebtn1.onclick=function(){typecolor1()};

  	var seebtn2=document.getElementById("seebtn2");
  	function typecolor2(){
  		if (passtxt2.type == "password") {
  			passtxt2.setAttribute("type","text");
			  seebtn2.setAttribute("src","img/seepass (2).png");
  		}else{
  			passtxt2.setAttribute("type","password");
			  seebtn2.setAttribute("src","img/seepass (1).png");
  		}
  	}
  	seebtn2.onclick=function(){typecolor2()};

    var seebtn3=document.getElementById("seebtn3");
    function typecolor3(){
      if (passtxt3.type == "password") {
        passtxt3.setAttribute("type","text");
        seebtn3.setAttribute("src","img/seepass (2).png");
      }else{
        passtxt3.setAttribute("type","password");
        seebtn3.setAttribute("src","img/seepass (1).png");
      }
    }
    seebtn3.onclick=function(){typecolor3()};
}

$(function() {
  $(document).on('click','#subbtn', function () {
        if ($('#passcon2').val() != $('#passcon3').val()) {
            $.modal({
                title:  '提示',
                text: '密码输入不一致，请重新输入',
                buttons: [
                    {
                        text: '好的'
                    },
                ]
            });
        }else{
            $.modal({
                title:  '提示',
                text: '取密码修改成功',
                buttons: [
                    {
                        text: '确定'
                    },
                ]
            });
        }
    });
});