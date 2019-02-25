var createPower = function(index, width, toleft, todown){
	var power = document.createElement('div');
	power.className = index+"power";
	document.querySelector('.container').appendChild(power);
	$("."+index+"power").css("width", width+"px");
	$("."+index+"power").css("height", 5+"px");
	$("."+index+"power").css("position", "absolute");
	$("."+index+"power").css("transform-style", "preserve-3d");
	$("."+index+"power").css("transform", "translateX("+toleft+"px) translateY("+todown+"px)");
	$("."+index+"power").css("top", (150-5/2)+"px");
	$("."+index+"power").css("left", (150-(width/2))+"px");
	$("."+index+"power").css("background-color", "green");

	var str1 = document.createElement('div');
	str1.className = index+"str1";
	document.querySelector("."+index+"power").appendChild(str1);
	$("."+index+"str1").css("width", (width/4)+"px");
	$("."+index+"str1").css("height", 5+"px");
	$("."+index+"str1").css("background-color", "green");
	$("."+index+"str1").css("transform", "translateX("+((width/2)-(width/8))+"px) translateY("+(((width/2)-(width/8))*(-0.25)+5)+"px) rotateZ("+30+"deg)");

	var str2 = document.createElement('div');
	str2.className = index+"str2";
	document.querySelector("."+index+"power").appendChild(str2);
	$("."+index+"str2").css("width", (width/4)+"px");
	$("."+index+"str2").css("height", 5+"px");
	$("."+index+"str2").css("background-color", "green");
	$("."+index+"str2").css("transform", "translateX("+((width/2)-(width/8))+"px) translateY("+(((width/2)-(width/8))*(0.25)-10)+"px) rotateZ("+(-30)+"deg)");

}