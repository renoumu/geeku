$(function() {
	$("#ModifyTheNumber-name").on('click', function(event) {
		$("#ModifyTheNumber-img").css("visibility","visible");
	});
	$("#ModifyTheNumber-name").on('blur', function(event) {
		$("#ModifyTheNumber-img").css("visibility","hidden");
	});
	$("#ModifyTheNumber-delbtn").on('click', function(event) {
    	$("#ModifyTheNumber-name").val("");
    	$("#ModifyTheNumber-savebtn").css("backgroundColor","#AAAAAA");
    });
});

window.onload=function(){
	var a=document.getElementById("ModifyTheNumber-name");
	function subcolor(){
		var b=document.getElementById("ModifyTheNumber-savebtn");
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