// Este codigo ha sido generado por el modulo psexport 20160408-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var a, b, c, promedio;
	document.write(("nota 1"),'<BR/>');
	a = Number(prompt());
	document.write(("nota 2"),'<BR/>');
	b = Number(prompt());
	document.write(("nota 3"),'<BR/>');
	c = Number(prompt());
	promedio = (a+b+c)/3;
	document.write(("tu promedio es:"),promedio,'<BR/>');
	if (promedio>=6) {
		document.write("Aprobaste",'<BR/>');
	} else {
		document.write("vuelvo a intertarlo el pr�ximo a�o",'<BR/>');
	}
}

