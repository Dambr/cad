(function rotateCilindr(){
	let rotateX = 0;
	let rotateY = 0;
	let rotateX1 = 0;
	let rotateY1 = 0;
	document.onkeydown = function(e){
		if (e.keyCode === 37) rotateY -= 4;
		else if (e.keyCode === 38) rotateX += 4;
		else if (e.keyCode === 39) rotateY += 4;
		else if (e.keyCode === 40) rotateX -= 4;
		document.querySelector(".container").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
		/*for (let jkk = 0; jkk < cilindrNames.length; jkk++){
			document.querySelector("."+cilindrNames[jkk]+"cilindr").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
			//document.querySelector("."+faskNames[jkk]+"cilindrWithFask").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
		}
		for (let jkk11 = 0; jkk11 < faskNames.length; jkk11++){
			document.querySelector("."+faskNames[jkk11]+"cilindrWithFask").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
			//document.querySelector("."+cilindrNames[jkk]+"cilindr").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
		}*/
		//document.querySelector(".cil1cilindr").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
		//document.querySelector(".cil2cilindr").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
	}

})();