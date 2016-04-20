Proceso mayor_3_numero
	n1 <- 0
	n2 <- 0
	n3 <- 0
	Escribir 'Dame tus tres valores: '
	Leer n1,n2,n3
	Si n1>n2 Y n1>n3 Entonces
		Escribir 'el primer valor es el mayor: ',n1
	Sino
		Si n2>n1 Y n2>n3 Entonces
			Escribir 'el segundo valor es el mayor: ',n2
		Sino
			Si n3>n1 Y n3>n2 Entonces
				Escribir 'el tercer valor es el mayor: ',n3
			FinSi
		FinSi
	FinSi
FinProceso

