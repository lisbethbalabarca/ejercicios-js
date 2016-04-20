// Este codigo ha sido generado por el modulo psexport 20160408-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function mayor_3_numero() {
	var n1, n2, n3;
	n1 = 0;
	n2 = 0;
	n3 = 0;
	document.write("Dame tus tres valores: ",'<BR/>');
	n1 = Number(prompt());
	n2 = Number(prompt());
	n3 = Number(prompt());
	if (n1>n2 && n1>n3) {
		document.write("el primer valor es el mayor: ",n1,'<BR/>');
	} else {
		if (n2>n1 && n2>n3) {
			document.write("el segundo valor es el mayor: ",n2,'<BR/>');
		} else {
			if (n3>n1 && n3>n2) {
				document.write("el tercer valor es el mayor: ",n3,'<BR/>');
			}
		}
	}
}

