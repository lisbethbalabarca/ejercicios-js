Proceso La_Langosta_ahumada
	Escribir 'cantidad de personas para el evento'
	Leer n
	Si n<200 Entonces
		plato <- 95
		Escribir ' El costo por plato es: ',plato
		Escribir ' El costo total del servicio seria de:',(n*plato)
	Sino
		Si n<=300 Entonces
			plato <- 85
			Escribir ' El costo por plato es: ',plato
			Escribir ' El costo total del servicio seria de:',(n*plato)
		Sino
			Si n>300 Entonces
				plato <- 75
				Escribir ' El costo por plato es: ',plato
				Escribir ' El costo total del servicio seria de:',(n*plato)
			FinSi
		FinSi
	FinSi
FinProceso

