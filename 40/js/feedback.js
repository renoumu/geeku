window.onload=function(){
	var a=document.getElementById("textcontent");
	function subcolor(){
		var b=document.getElementById("subbtn");
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

function zfcount(){ 
var count = $("#textcontent").val().length; 
if(count>1000){ 
var textcontent = $("#textcontent").val().substring(0,1000); 
$("#textcontent").val(textcontent); 
count=1000; 
} 
$("#showcount").val(count); 
} 