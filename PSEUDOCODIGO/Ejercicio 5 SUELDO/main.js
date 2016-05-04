function sueldo () {
	var h = parseFloat(prompt("ingrese las horas que trabajo"));
	var p = parseInt(prompt("cual es el valor de la hora trabajada"));
	var total = 0;

	total = (h*p).toFixed(2);
	alert("el total del pago es : " + total);
}

sueldo();