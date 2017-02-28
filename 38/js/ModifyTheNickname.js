$(document).ready(function() {
	$("#ModifyTheNickname-name").click(function(){
		$("#ModifyTheNickname-img").css("visibility","visible");
	});
	$("#ModifyTheNickname-name").blur(function(){
		$("#ModifyTheNickname-img").css("visibility","hidden");
	});
	$("#ModifyTheNickname-delbtn").click(function(){
    	$("#ModifyTheNickname-name").val("");
    	$("#ModifyTheNickname-savebtn>button").css("backgroundColor","#AAAAAA");
    });
});

window.onload=function(){
	var a=document.getElementById("ModifyTheNickname-name");
	function subcolor(){
		var b=document.getElementById("ModifyTheNickname-savebtn");
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