$(document).ready(function() {
	$("#nc1").click(function(){
		$("#delbtn1").css("visibility","visible");
	});
	$("#nc1").blur(function(){
		$("#delbtn1").css("visibility","hidden");
	});
	$("#del1").click(function(){
    	$("#nc1").val("");
    });

    $("#pc2").click(function(){
		$("#delbtn2").css("visibility","visible");
	});
	$("#pc2").blur(function(){
		$("#delbtn2").css("visibility","hidden");
	});
	$("#del2").click(function(){
    	$("#pc2").val("");
    });

    $("#ac3").click(function(){
		$("#delbtn3").css("visibility","visible");
	});
	$("#ac3").blur(function(){
		$("#delbtn3").css("visibility","hidden");
	});
	$("#del3").click(function(){
    	$("#ac3").val("");
    });
});