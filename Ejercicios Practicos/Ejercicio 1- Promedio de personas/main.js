function estatura_promedio(){
	var cantidad= parseInt(prompt("La cantidad de personas es: "));
	var i=1;
	var suma=null;
	while(i<=cantidad){
		var media= parseFloat(prompt("Ingrese la estatura "+i+" :"));
		suma += parseFloat(media);
		i= i+1;
	}
	var promedio= parseFloat(suma/cantidad).toFixed(2);
	alert("La estatura promedio es "+promedio);
}
estatura_promedio();