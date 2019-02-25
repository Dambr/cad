(function rotateCilindrWithFask(){
	let rotateX1 = 0;
	let rotateY1 = 0;
	document.onkeydown = function(e1){
		if (e1.keyCode === 87) rotateY1 -= 4;
		else if (e1.keyCode === 65) rotateX1 += 4;
		else if (e1.keyCode === 83) rotateY1 += 4;
		else if (e1.keyCode === 68) rotateX1 -= 4;
		for (let jkk11 = 0; jkk11 < faskNames.length; jkk11++){
			document.querySelector("."+faskNames[jkk11]+"cilindrWithFask").style.transform ="rotateY("+rotateY1+"deg)"+"rotateX("+rotateX1+"deg)";
			//document.querySelector("."+cilindrNames[jkk]+"cilindr").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
		}
		//document.querySelector(".cil1cilindr").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
		//document.querySelector(".cil2cilindr").style.transform ="rotateY("+rotateY+"deg)"+"rotateX("+rotateX+"deg)";
	}
})();