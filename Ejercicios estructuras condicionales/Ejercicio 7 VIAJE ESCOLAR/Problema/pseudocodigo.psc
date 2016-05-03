Proceso viaje_escolar
	Escribir 'cantidad de alumnos'
	Leer n
	Si n=100 Entonces
		pasaje <- 65
		Escribir ' El costo por asiento es: ',pasaje
		Escribir ' El costo total del servicio seria de:',(n*pasaje)
	Sino
		Si n=50 Y n<100 Entonces
			pasaje <- 70
			Escribir ' El costo por asiento es: ',pasaje
			Escribir ' El costo total del servicio seria de:',(n*pasaje)
		Sino
			Si n=30 Y n<50 Entonces
				pasaje <- 95
				Escribir ' El costo por asiento es: ',pasaje
				Escribir ' El costo total del servicio seria de:',(n*pasaje)
			Sino
				Si n<30 Entonces
					importe <- 4000
					Escribir ' El costo por asiento es: ',(importe/n)
					Escribir ' El costo total del servicio seria de:',importe
				FinSi
			FinSi
		FinSi
	FinSi
FinProceso

