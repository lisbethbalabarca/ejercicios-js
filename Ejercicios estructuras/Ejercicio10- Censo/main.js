var total=prompt("Ingrese N° de personas censadas:");
var suma_f=0;
var suma_m=0;
var varones=0;
for(var i=1; i<=total; i++){
	var dni =0;
	var condicion=true;
	do{
		dni=prompt("Ingrese N° de DNI de la persona "+i+" : ");
		if (dni.length==8) condicion=false;
		else alert("no");
	} while (condicion);
	var edad=prompt("Ingrese edad de la persona "+i+" : ");
	var sexo=prompt("Ingrese el sexo de la persona(femenino o masculino) "+i+" : ").toLowerCase();	
	alert("N° de DNI: 0"+dni+"\nEdad: "+edad+"\nSexo: "+sexo);
	document.write("N° de DNI: 0"+dni+"\nEdad: "+edad+"\nSexo: "+sexo);
	switch (sexo) {
		case 'femenino':
			suma_f++;
			break;
		case 'masculino':
			suma_m++;
			if(edad>=16&&edad<=65){
				varones++;
			} 
			break;
		default:
			alert("Escriba correctamente (masculino o femenino)");
			break;
	}	
}
document.write("La cantidad total de personas censadas es "+total+"\nLa cantidad de varones es "+sum+"\nLa cantidad de mujeres es "+suma+"\nLa cantidad de varones cuya edad varía entre 16 y 65 años es "+varones);


