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

	$('#Registered-btn').on('click', function(event){
		window.location.href = "../登录/index.html"
	});

});

