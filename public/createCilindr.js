var createCilindr = function(index, width, height,toleft, todown, roundX, roundY, roundZ, bool){
	//alert(index+" "+ width+" "+ height+" "+toleft+" "+ todown+" "+ roundX+" "+ roundY+" "+ roundZ)
	/*var container = document.createElement('div');
	container.className = index+"container";
	document.querySelector('center').appendChild(container);
	$("."+index+"container").css("position", "absolute");
	$("."+index+"container").css("margin-left", ($("body").css("width").split('px')[0]/2-width/2-toleft)+"px");
	if (height > width) $("."+index+"container").css("margin-top", ($("body").css("height").split('px')[0]/2-height/2)+"px");
	else $("."+index+"container").css("margin-top", ($("body").css("height").split('px')[0]/2-width/2)+"px");
	$("."+index+"container").css("width", height+"px");
	$("."+index+"container").css("height", height+"px");
	$("."+index+"container").css("perspective", "600px");*/
	var cilindr = document.createElement('div');
	cilindr.className = index+"cilindr";
	document.querySelector('.container').appendChild(cilindr);
	$("."+index+"cilindr").css("width", width+"px");
	$("."+index+"cilindr").css("height", height+"px");
	$("."+index+"cilindr").css("position", "absolute");
	$("."+index+"cilindr").css("transform-style", "preserve-3d");
	$("."+index+"cilindr").css("transform", "rotateX("+roundX+"deg) rotateY("+roundY+"deg) rotateZ("+roundZ+"deg) translateX("+toleft+"px) translateY("+todown+"px)");
	$("."+index+"cilindr").css("top", (150-height/2)+"px");
	$("."+index+"cilindr").css("left", (150-(width/2))+"px");
	//$("."+index+"cilindr").css("background-color", "green");
	var osn1 = document.createElement('div');
	osn1.className = index+"osn1";
	document.querySelector('.'+index+'cilindr').appendChild(osn1);
	$("."+index+"osn1").css("position", "absolute");
	$("."+index+"osn1").css("width", width+"px");
	$("."+index+"osn1").css("height", width+"px");
	$("."+index+"osn1").css("border-radius", "50%");
	$("."+index+"osn1").css("background-color", "gray");
	//$("."+index+"osn1").css("opacity", "0.3");
	$("."+index+"osn1").css("left", (Number(($("."+index+"cilindr").css("width")).split('px')[0])/2)-(Number(($("."+index+"osn1").css("width")).split('px')[0])/2)+"px");
	$("."+index+"osn1").css("top", ((height-width*0.495)) +"px");
	$("."+index+"osn1").css("transform", "rotateX(90deg)");
	$("."+index+"osn1").css("opacity", "0.2");
	if (bool == true){
		$("."+index+"osn1").css("background", "none");
		$("."+index+"osn1").css("border-style", "dashed");
		$("."+index+"osn1").css("border-color", "#CABFBF");
		$("."+index+"osn1").css("opacity", "1");
	}
	//else{
		
	//}
	var wall = document.createElement('ul');
	wall.className = index+"wall";
	document.querySelector('.'+index+'cilindr').appendChild(wall);
	$("."+index+"wall").css("position", "absolute");
	$("."+index+"wall").css("top", (height-300)+"px");
	for (var i = 0; i < 180; i++){
		var newLi = document.createElement('li');
		newLi.className = String(index+"el"+i);
		document.querySelector('.'+index+'wall').appendChild(newLi);
		var elWidth = 2*(width/2)*Math.sin(Math.PI/180);
		//var elWidth = width;
		$("."+String(index+"el"+i)).css("width", elWidth+"px");
		$("."+String(index+"el"+i)).css("height", height+"px");
		$("."+String(index+"el"+i)).css("border", "1px solid gray")
		$("."+String(index+"el"+i)).css("transform", "rotateY("+2*i+"deg) translateZ("+(width/2*Math.cos(Math.PI/180))+"px)");
		//$("."+String(index+"el"+i)).css("transform", "rotateY("+2*i+"deg");
		$("."+String(index+"el"+i)).css("left", (Number(($("."+index+"cilindr").css("width")).split('px')[0])*0.50)-(Number(($("."+String(index+"el"+i)).css("width")).split('px')[0])/2)+"px");
		$("."+String(index+"el"+i)).css("top", (($(".container").css("width").split('px')[0]-14)-height)+"px");
		$("."+String(index+"el"+i)).css("opacity", "0.5");
		if (bool == true){
			$("."+String(index+"el"+i)).css("border-style", "dashed");
			$("."+String(index+"el"+i)).css("opacity", "1");
			$("."+String(index+"el"+i)).css("border-color", "#CABFBF");
		}
		//else{
			
		//}
	}
	var osn2 = document.createElement('div');
	osn2.className = index+"osn2";
	document.querySelector('.'+index+'cilindr').appendChild(osn2);
	$("."+index+"osn2").css("position", "absolute");
	$("."+index+"osn2").css("width", width+"px");
	$("."+index+"osn2").css("height", width+"px");
	$("."+index+"osn2").css("border-radius", "50%");
	$("."+index+"osn2").css("transform", "rotateX(90deg)");
	$("."+index+"osn2").css("background-color", "gray");
	//$("."+index+"osn2").css("opacity", "0.3");
	$("."+index+"osn2").css("left", (Number(($("."+index+"cilindr").css("width")).split('px')[0])/2)-(Number(($("."+index+"osn2").css("width")).split('px')[0])/2)+"px");
	$("."+index+"osn2").css("top", ((height-width*0.495)-height) +"px");
	$("."+index+"osn2").css("opacity", "0.2");
	if (bool == true){
		$("."+index+"osn2").css("background", "none");
		$("."+index+"osn2").css("border-style", "dashed");
		$("."+index+"osn2").css("opacity", "1");
		$("."+index+"osn2").css("border-color", "#CABFBF");
	}
	//else{
		
	//}
}