var createCilindrWithFask = function(index, width, height,toleft, todown, roundX, roundY, roundZ, where, fask){
	/*var containerfask = document.createElement('div');
	containerfask.className = index+"containerfask";
	document.querySelector('center').appendChild(containerfask);
	$("."+index+"containerfask").css("position", "absolute");
	$("."+index+"containerfask").css("margin-left", ($("body").css("width").split('px')[0]/2-width/2-toleft)+"px");
	if (height > width) $("."+index+"containerfask").css("margin-top", ($("body").css("height").split('px')[0]/2-height/2)+"px");
	else $("."+index+"containerfask").css("margin-top", ($("body").css("height").split('px')[0]/2-width/2)+"px");
	$("."+index+"containerfask").css("width", height+"px");
	$("."+index+"containerfask").css("height", height+"px");
	$("."+index+"containerfask").css("perspective", "600px");*/
	var cilindrWithFask = document.createElement('div');
	cilindrWithFask.className = index+"cilindrWithFask";
	document.querySelector('.container').appendChild(cilindrWithFask);
	$("."+index+"cilindrWithFask").css("width", width+"px");
	$("."+index+"cilindrWithFask").css("height", height+"px");
	$("."+index+"cilindrWithFask").css("position", "absolute");
	$("."+index+"cilindrWithFask").css("transform-style", "preserve-3d");
	$("."+index+"cilindrWithFask").css("transform", "rotateX("+roundX+"deg) rotateY("+roundY+"deg) rotateZ("+roundZ+"deg) translateX("+toleft+"px) translateY("+todown+"px)");
	$("."+index+"cilindrWithFask").css("top", (150-height/2)+"px");
	$("."+index+"cilindrWithFask").css("left", (150-(width/2))+"px");
	//$("."+index+"cilindrWithFask").css("opacity", "0.5");
	//$("."+index+"cilindrWithFask").css("background-color", "green");
	var osn1Fask = document.createElement('div');
	osn1Fask.className = index+"osn1Fask";
	document.querySelector('.'+index+'cilindrWithFask').appendChild(osn1Fask);
	$("."+index+"osn1Fask").css("position", "absolute");
	$("."+index+"osn1Fask").css("width", width+"px");
	$("."+index+"osn1Fask").css("height", width+"px");
	$("."+index+"osn1Fask").css("border-radius", "50%");
	$("."+index+"osn1Fask").css("background-color", "gray");
	//$("."+index+"osn1Fask").css("opacity", "0.3");
	$("."+index+"osn1Fask").css("left", (Number(($("."+index+"cilindrWithFask").css("width")).split('px')[0])/2)-(Number(($("."+index+"osn1Fask").css("width")).split('px')[0])/2)+"px");
	$("."+index+"osn1Fask").css("top", (height-width*0.495) +"px");
	$("."+index+"osn1Fask").css("transform", "rotateX(90deg)");
	if(where == "bottom"){
		$("."+index+"osn1Fask").css("display", "none");
	}
	$("."+index+"osn1Fask").css("opacity", "0.2");
	
	var wall = document.createElement('ul');
	wall.className = index+"wall";
	document.querySelector('.'+index+'cilindrWithFask').appendChild(wall);
	$("."+index+"wall").css("position", "absolute");
	$("."+index+"wall").css("top", (height-300)+"px");
	for (var i = 0; i < 180; i++){
		var newLi = document.createElement('li');
		newLi.className = String(index+"elFask"+i);
		document.querySelector('.'+index+'wall').appendChild(newLi);
		//var elWidth = 2*(width/2)*Math.sin(Math.PI/180);
		var elWidth = width;
		$("."+String(index+"elFask"+i)).css("width", elWidth+"px");
		$("."+String(index+"elFask"+i)).css("height", height+"px");
		$("."+String(index+"elFask"+i)).css("border", "1px solid gray")
		//$("."+String(index+"elFask"+i)).css("transform", "rotateY("+2*i+"deg) translateZ("+(width/2*Math.cos(Math.PI/180))+"px)");
		$("."+String(index+"elFask"+i)).css("transform", "rotateY("+2*i+"deg");
		$("."+String(index+"elFask"+i)).css("left", (Number(($("."+index+"cilindrWithFask").css("width")).split('px')[0])*0.50)-(Number(($("."+String(index+"elFask"+i)).css("width")).split('px')[0])/2)+"px");
		$("."+String(index+"elFask"+i)).css("top", (($(".container").css("width").split('px')[0]-14)-height)+"px");
		$("."+String(index+"elFask"+i)).css("opacity", "0.5");
		if (where == "bottom"){
			$("."+String(index+"elFask"+i)).css("border-bottom-left-radius", fask+"px");
			$("."+String(index+"elFask"+i)).css("border-bottom-right-radius", fask+"px");
		}
		if (where == "top"){
			$("."+String(index+"elFask"+i)).css("border-top-left-radius", fask+"px");
			$("."+String(index+"elFask"+i)).css("border-top-right-radius", fask+"px");
			
		}
	}
	var osn2Fask = document.createElement('div');
	osn2Fask.className = index+"osn2Fask";
	document.querySelector('.'+index+'cilindrWithFask').appendChild(osn2Fask);
	$("."+index+"osn2Fask").css("position", "absolute");
	$("."+index+"osn2Fask").css("width", width+"px");
	$("."+index+"osn2Fask").css("height", width+"px");
	$("."+index+"osn2Fask").css("border-radius", "50%");
	$("."+index+"osn2Fask").css("transform", "rotateX(90deg)");
	$("."+index+"osn2Fask").css("background-color", "gray");
	//$("."+index+"osn2Fask").css("opacity", "0.3");
	$("."+index+"osn2Fask").css("left", (Number(($("."+index+"cilindrWithFask").css("width")).split('px')[0])/2)-(Number(($("."+index+"osn2Fask").css("width")).split('px')[0])/2)+"px");
	$("."+index+"osn2Fask").css("top", ((height-width*0.495)-height) +"px");
	if (where == "top"){
		$("."+index+"osn2Fask").css("display", "none");
	}
	$("."+index+"osn2Fask").css("opacity", "0.2");
	

	/*if(where == "bottom"){
		for (var i = 0; i < 180; i++){
			$("."+String(index+"elFask"+i)).css("border-bottom-left-radius: ", fask+"px");
			$("."+String(index+"elFask"+i)).css("border-bottom-right-radius: ", fask+"px");
			//$("."+index+"osn1Fask").css("width", (width-(2*fask))+"px");
		}
	}*/
}