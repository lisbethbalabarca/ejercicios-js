// Este codigo ha sido generado por el modulo psexport 20160408-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function viaje_escolar() {
	var importe, n, pasaje;
	document.write("cantidad de alumnos",'<BR/>');
	n = prompt();
	if (n==100) {
		pasaje = 65;
		document.write(" El costo por asiento es: ",pasaje,'<BR/>');
		document.write(" El costo total del servicio seria de:",(n*pasaje),'<BR/>');
	} else {
		if (n==50 && n<100) {
			pasaje = 70;
			document.write(" El costo por asiento es: ",pasaje,'<BR/>');
			document.write(" El costo total del servicio seria de:",(n*pasaje),'<BR/>');
		} else {
			if (n==30 && n<50) {
				pasaje = 95;
				document.write(" El costo por asiento es: ",pasaje,'<BR/>');
				document.write(" El costo total del servicio seria de:",(n*pasaje),'<BR/>');
			} else {
				if (n<30) {
					importe = 4000;
					document.write(" El costo por asiento es: ",(importe/n),'<BR/>');
					document.write(" El costo total del servicio seria de:",importe,'<BR/>');
				}
			}
		}
	}
}

