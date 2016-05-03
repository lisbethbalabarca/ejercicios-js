Proceso Fibonacci
	Leer N
	A = 0;
	B = 0;
	Escribir A , B
	M = 1;
	Mientras M <= (N-2) Hacer
		C = A + B;
		Escribir C
		A = B;
		B = C;
		M = M+1;
	Fin Mientras
FinProceso
