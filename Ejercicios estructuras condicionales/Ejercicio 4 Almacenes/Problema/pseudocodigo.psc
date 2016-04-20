Proceso El_harapiento_distinguido
	Escribir 'valor del traje'
	Leer a
	Si a>=2500 Entonces
		descuento <- (a*0.15)
		Escribir 'el descuento es:',descuento
		Escribir 'total a pagar ',(a-descuento)
	Sino
		descuento <- (a*0.08)
		Escribir 'el descuento es:',descuento
		Escribir 'total a pagar ',(a-descuento)
	FinSi
FinProceso

