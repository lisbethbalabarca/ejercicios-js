Proceso estatura_promedio
	estatura <-0
	Escribir "escribe cuantas personas"
	leer n
	Para i<-1 Hasta n Con Paso 1 Hacer
		Escribir "Ingresa tu estatura"
		Leer estatura
		acmest <- acmest + estatura
	Fin Para
	promedio = acmest/n
	Escribir "el promedio de estatura es" , promedio 
FinProceso