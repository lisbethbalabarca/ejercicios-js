function numero_0(){
	var cantidad= parseInt(prompt("Cuantos números quieres comparar?: "));
	var i=1;
	var menor=0;
	var mayor=0;
	while(i<=cantidad){
		var number= parseInt(prompt("El numero "+i+" es :"));
		if(number<=0){
			menor+= 1;
		} else if(number>0){
			mayor+= 1;
		}
		i++;	
	}
	alert("Menor o igual a 0: "+menor+ "\nMayor a 0: "+mayor);
}
numero_0();