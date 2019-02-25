var createCube = function(index, width, height, depth, toleft, todown, roundX, roundY, roundZ, bool, z){
	
	var Cube = document.createElement('div');
	Cube.className = index+"Cube";
	document.querySelector('.container').appendChild(Cube);
	$("."+index+"Cube").css("width", width+"px");
	$("."+index+"Cube").css("height", height+"px");
	$("."+index+"Cube").css("position", "absolute");
	$("."+index+"Cube").css("transform-style", "preserve-3d");
	$("."+index+"Cube").css("transform", "rotateX("+roundX+"deg) rotateY("+roundY+"deg) rotateZ("+roundZ+"deg) translateX("+toleft+"px) translateY("+todown+"px) translateZ("+(-z)+"px)");
	$("."+index+"Cube").css("top", (150-height/2)+"px");
	$("."+index+"Cube").css("left", (150-(width/2))+"px");
	//$("."+index+"Cube").css("background-color", "green");
	var side1 = document.createElement('div');
	side1.className = index+"side1";
	document.querySelector("."+index+"Cube").appendChild(side1);
	$("."+index+"side1").css("position", "absolute");
	$("."+index+"side1").css("width", width+"px");
	$("."+index+"side1").css("height", height+"px");
	$("."+index+"side1").css("background-color", "gray");
	$("."+index+"side1").css("border", "3px solid white");
	$("."+index+"side1").css("opacity", "0.5");
	$("."+index+"side1").css("transform", "translateZ("+(depth/2)+"px)");
	if (bool == true){
		$("."+index+"side1").css("background", "none");
		$("."+index+"side1").css("border-style", "dashed");
		$("."+index+"side1").css("border-color", "#CABFBF");
		$("."+index+"side1").css("opacity", "1");
	}
	var side2 = document.createElement('div');
	side2.className = index+"side2";
	document.querySelector("."+index+"Cube").appendChild(side2);
	$("."+index+"side2").css("position", "absolute");
	$("."+index+"side2").css("width", width+"px");
	$("."+index+"side2").css("height", height+"px");
	$("."+index+"side2").css("background-color", "gray");
	$("."+index+"side2").css("opacity", "0.5");
	$("."+index+"side2").css("border", "3px solid white");
	$("."+index+"side2").css("transform", "translateZ("+(-depth/2)+"px)");
	if (bool == true){
		$("."+index+"side2").css("background", "none");
		$("."+index+"side2").css("border-style", "dashed");
		$("."+index+"side2").css("border-color", "#CABFBF");
		$("."+index+"side2").css("opacity", "1");
	}
	var side3 = document.createElement('div');
	side3.className = index+"side3";
	document.querySelector("."+index+"Cube").appendChild(side3);
	$("."+index+"side3").css("position", "absolute");
	$("."+index+"side3").css("width", width+"px");
	$("."+index+"side3").css("height", depth+"px");
	$("."+index+"side3").css("background-color", "gray");
	$("."+index+"side3").css("border", "3px solid white");
	$("."+index+"side3").css("opacity", "0.5");
	$("."+index+"side3").css("transform", "rotateX(90deg) translateZ("+(depth/2)+"px)");
	if (bool == true){
		$("."+index+"side3").css("background", "none");
		$("."+index+"side3").css("border-style", "dashed");
		$("."+index+"side3").css("border-color", "#CABFBF");
		$("."+index+"side3").css("opacity", "1");
	}
	var side4 = document.createElement('div');
	side4.className = index+"side4";
	document.querySelector("."+index+"Cube").appendChild(side4);
	$("."+index+"side4").css("position", "absolute");
	$("."+index+"side4").css("width", width+"px");
	$("."+index+"side4").css("height", depth+"px");
	$("."+index+"side4").css("background-color", "gray");
	$("."+index+"side4").css("border", "3px solid white");
	$("."+index+"side4").css("opacity", "0.5");
	$("."+index+"side4").css("transform", "rotateX(90deg) translateZ("+((depth/2)-height)+"px)");
	if (bool == true){
		$("."+index+"side4").css("background", "none");
		$("."+index+"side4").css("border-style", "dashed");
		$("."+index+"side4").css("border-color", "#CABFBF");
		$("."+index+"side4").css("opacity", "1");
	}
	var side5 = document.createElement('div');
	side5.className = index+"side5";
	document.querySelector("."+index+"Cube").appendChild(side5);
	$("."+index+"side5").css("position", "absolute");
	$("."+index+"side5").css("width", depth+"px");
	$("."+index+"side5").css("height", height+"px");
	$("."+index+"side5").css("background-color", "gray");
	$("."+index+"side5").css("border", "3px solid white");
	$("."+index+"side5").css("opacity", "0.5");
	$("."+index+"side5").css("transform", "rotateY(90deg) translateZ("+(-(depth/2))+"px) ");
	if (bool == true){
		$("."+index+"side5").css("background", "none");
		$("."+index+"side5").css("border-style", "dashed");
		$("."+index+"side5").css("border-color", "#CABFBF");
		$("."+index+"side5").css("opacity", "1");
	}
	var side6 = document.createElement('div');
	side6.className = index+"side6";
	document.querySelector("."+index+"Cube").appendChild(side6);
	$("."+index+"side6").css("position", "absolute");
	$("."+index+"side6").css("width", depth+"px");
	$("."+index+"side6").css("height", height+"px");
	$("."+index+"side6").css("background-color", "gray");
	$("."+index+"side6").css("border", "3px solid white");
	$("."+index+"side6").css("opacity", "0.5");
	$("."+index+"side6").css("transform", "rotateY(90deg) translateZ("+-((depth/2)-width)+"px) ");
	if (bool == true){
		$("."+index+"side6").css("background", "none");
		$("."+index+"side6").css("border-style", "dashed");
		$("."+index+"side6").css("border-color", "#CABFBF");
		$("."+index+"side6").css("opacity", "1");
	}
	//$("."+index+"Cube").css("background-color", "green");
/*	var osn1 = document.createElement('div');
	osn1.className = index+"osn1";
	document.querySelector('.'+index+'Cube').appendChild(osn1);
	$("."+index+"osn1").css("position", "absolute");
	$("."+index+"osn1").css("width", width+"px");
	$("."+index+"osn1").css("height", width+"px");
	$("."+index+"osn1").css("border-radius", "50%");
	$("."+index+"osn1").css("background-color", "gray");
	//$("."+index+"osn1").css("opacity", "0.3");
	$("."+index+"osn1").css("left", (Number(($("."+index+"Cube").css("width")).split('px')[0])/2)-(Number(($("."+index+"osn1").css("width")).split('px')[0])/2)+"px");
	$("."+index+"osn1").css("top", ((height-width*0.495)) +"px");
	$("."+index+"osn1").css("transform", "rotateX(90deg)");
	var wall = document.createElement('ul');
	wall.className = index+"wall";
	document.querySelector('.'+index+'Cube').appendChild(wall);
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
		$("."+String(index+"el"+i)).css("left", (Number(($("."+index+"Cube").css("width")).split('px')[0])*0.50)-(Number(($("."+String(index+"el"+i)).css("width")).split('px')[0])/2)+"px");
		$("."+String(index+"el"+i)).css("top", (($(".container").css("width").split('px')[0]-14)-height)+"px");
	}
	var osn2 = document.createElement('div');
	osn2.className = index+"osn2";
	document.querySelector('.'+index+'Cube').appendChild(osn2);
	$("."+index+"osn2").css("position", "absolute");
	$("."+index+"osn2").css("width", width+"px");
	$("."+index+"osn2").css("height", width+"px");
	$("."+index+"osn2").css("border-radius", "50%");
	$("."+index+"osn2").css("transform", "rotateX(90deg)");
	$("."+index+"osn2").css("background-color", "gray");
	//$("."+index+"osn2").css("opacity", "0.3");
	$("."+index+"osn2").css("left", (Number(($("."+index+"Cube").css("width")).split('px')[0])/2)-(Number(($("."+index+"osn2").css("width")).split('px')[0])/2)+"px");
	$("."+index+"osn2").css("top", ((height-width*0.495)-height) +"px");*/

}