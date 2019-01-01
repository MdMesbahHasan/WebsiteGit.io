
function toggleSidebar(){
	document.getElementById("sidebar").classList.toggle('active');
}
$(function(){
	var inWrap=$(".inner-wrapper");
	$(".prev").on("click",function(){
		inWrap.animate({left:"0%"},300,function(){
			inWrap.css("left","-100%");
			$(".slide").first().before($(".slide").last());
		});
	});
	$(".next").on("click",function(){
		inWrap.animate({left:"-200%"},300,function(){
			inWrap.css("left","-100%");
			$(".slide").last().after($(".slide").first());
		});
	});
});
function toggleButton(){
	document.getElementById("need").classList.toggle('active');
}
function toggleButton1(){
	document.getElementById("need1").classList.toggle('active');
}
function toggleButton2(){
	document.getElementById("need2").classList.toggle('active');
}
function toggleButton3(){
	document.getElementById("need3").classList.toggle('active');
}
function toggleButton4(){
	document.getElementById("need4").classList.toggle('active');
}
function toggleButton5(){
	document.getElementById("need5").classList.toggle('active');
}
function toggleButton6(){
	document.getElementById("need6").classList.toggle('active');
}
function toggleButton7(){
	document.getElementById("need7").classList.toggle('active');
}
$(document).ready(function(){
	alert("This site use cookies,Do you agree?");
});