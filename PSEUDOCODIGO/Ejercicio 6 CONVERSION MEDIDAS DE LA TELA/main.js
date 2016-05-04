function conversion () {
	var t = parseFloat(prompt("Cuantos metros de tela son?:"));
	var p = 0.0254;
	var total = 0;

	total = (t/p).toFixed(2);
	alert("la cantidad de tela que necesitas es: " + total);
}

conversion();