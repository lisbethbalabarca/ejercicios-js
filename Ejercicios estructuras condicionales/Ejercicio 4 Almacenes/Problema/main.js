function el_harapiento_distinguido() {
	var a, descuento;
	document.write("valor del traje",'<BR/>');
	a = Number(prompt());
	if (a>=2500) {
		descuento = (a*0.15);
		document.write("el descuento es:",descuento,'<BR/>');
		document.write("total a pagar ",(a-descuento),'<BR/>');
	} else {
		descuento = (a*0.08);
		document.write("el descuento es:",descuento,'<BR/>');
		document.write("total a pagar ",(a-descuento),'<BR/>');
	}
}

