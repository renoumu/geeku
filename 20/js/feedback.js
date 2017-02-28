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


$(function() {
	$('.clear>ul').children('li').on('click',function(event){
		if ($(this).children('img').attr('src') == "img/icon_星星_normal@3x.png") {
			$(this).children('img').attr('src', 'img/icon_星星_click@3x.png');
			$(this).prevAll().children('img').attr('src', 'img/icon_星星_click@3x.png');
		}else{
			$(this).children('img').attr('src', 'img/icon_星星_click@3x.png');
			$(this).nextAll().children('img').attr('src', 'img/icon_星星_normal@3x.png');
		}
	})
});

$('#subbtn').on('click',function(){
	window.location.href = "../详情页/index.html"
})