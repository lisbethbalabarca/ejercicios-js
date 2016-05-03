function promedio () {
	var a = parseInt(prompt("Ingresa el primer numero"));
	var b = parseInt(prompt("Ingresa el segundo numero"));
	var c = parseInt(prompt("Ingresa el tercer numero"));
	var promedio = 0;

	promedio = (a+b+c)/3;
	alert("el promedio es: "+promedio);
}

promedio ();